
import React from 'react'
import Head from 'next/head'
import Layout from '/components/Layout'
import Link from 'next/link'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.state.state1 = 0
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({state1: this.state.state1 + 1})
    }, 1000)
  }

  render() {
    return (
      <Layout title='Index'>
        <Head>
          <link rel='stylesheet' href='../custom/style.css' />
        </Head>
        <div>{this.state.state1}</div>
        <div>{JSON.stringify(this.props)}</div>
        <ul>
          <li><Link href='x'>x</Link></li>
          <li><Link href='y/z'>y/z</Link></li>
          <li><Link href={{ pathname: 'x', query: { key1: '1' } }}>x?key1=1</Link></li>
        </ul>
      </Layout>
    )
  }
}
