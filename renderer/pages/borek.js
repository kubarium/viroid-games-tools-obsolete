import React, { Component } from 'react'

import { pathDeconstructor } from "../components/utils"
import Layout from "../components/Layout"

export default class extends Component {
  static async getInitialProps({req, pathname}) {
    return {
      //title: title(pathname)
    }
  }

  render() {

    return (
      <Layout title={ pathDeconstructor(this.props.url.pathname) }>
        <div>Do borek and cokelek</div>
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