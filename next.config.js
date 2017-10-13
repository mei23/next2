const path = require('path')
const glob = require('glob')

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      }
    ,
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader']
      }
    ,
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader',
          { loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    )
    config.output.publicPath = `./${config.output.publicPath}`
    return config
  }
  ,
  exportPathMap: function() {
    // Node.js サーバー 下でなく、static web ホスティング用に出力することができる
    // ※ サーバー側ロジックを使ってない場合に限る
    return {
      '/index.html': { page: '/' },

      // static web で x => x.html をルーティングさせたいと時はRewriteとかに頼る？
      // /x/index.html のように出力ることもできるが、Node.js <=> static web で階層が変わって困った
      '/x.html': { page: '/x' },

      // 特定のクエリ文字列指定をシミュレート(fileプロトコルとかで使う？)
      '/x-1.html': { page: '/x', query: { key1: '1' } },

      // 2階層目に出力するとassetが読めない
      // assetPrefixを絶対パスにすればいいが、今度はデプロイパスを変えられなくなる
      // 2階層目はそもそも使わないほうがいいかも
      '/y-z.html': { page: '/y/z' },
    }
  }
  ,
  assetPrefix: './'
}
