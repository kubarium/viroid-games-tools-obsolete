import Layout from "../components/Layout"
import { pathDeconstructor } from "../components/utils"

import React, { Component } from 'react'

export default class extends Component {
  static async getInitialProps({req, pathname}) {
    return {
      //title: title(pathname)
    }
  }
  render() {

    return (
      <Layout title={ pathDeconstructor(this.props.url.pathname) }>
        <div>Do borek</div>
        <style jsx>
          { `
    div {
        border:1px dashed blue;
    }
    ` }
        </style>
      </Layout>
    )
  }
}
