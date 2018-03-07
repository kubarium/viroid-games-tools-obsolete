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
        <section>
          <div>Do borek and cokelek</div>
          <div>Do borek and cokelek</div>
        </section>
        <style jsx>
          { `
          section{
            border:1px dashed red;
            display:grid;
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: repeat(12, 1fr);
          }
          div {
            border:1px dashed blue;
            height: 100px;
            width: 100px;
          }

          ` }
        </style>
      </Layout>
    )
  }
}