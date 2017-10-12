import React from 'react'
import Head from 'next/head'

import stylesheet1 from '/styles/1.scss'
import stylesheet2 from '/styles/2.css'

export default () => {
  const textColor1 = 'pink'
  const className1 = 'class4'

  return (
  <div>
    <Head>
      <link rel='stylesheet' href='/static/3.css' />{/* 普通のCSSファイル */}
      <style dangerouslySetInnerHTML={{ __html: `
/* import from 1.scss */
${stylesheet1}
/* import from 2.css */
${stylesheet2}
      `}} />
    </Head>
    <p className='class1' style={{ color: 'blue' }}>いち</p>
    <p className='class2' style={{ color: `${textColor1}` }}>にー</p>
    <p className='class3'>さん</p>
    <p className={className1}>よん</p>

    {/*
      以下は styled-jsx を使っている https://www.npmjs.com/package/styled-jsx
      内容は普通のStyle, 変数不可, 既定でscopedなのでこのscopeでだけ効く
    */}
    <style jsx>{`
      .class4 {
        background-color: #66f;
      }
    `}</style>

  </div>
  )
}