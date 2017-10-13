
import React from 'react'
import Head from 'next/head'
import Layout from '/components/Layout'

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
      <Layout title='Z'>
        <div>{this.state.state1}</div>
        <div>{JSON.stringify(this.props)}</div>
      </Layout>
    )
  }
}
