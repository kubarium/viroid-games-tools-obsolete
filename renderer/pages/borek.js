import { Provider } from "react-redux"
import React, { Component } from "react"

import { pathDeconstructor } from "../components/utils"
import borekStore from "../borek/borekStore"
import Layout from "../components/Layout"
import LetterSpinner from "../components/LetterSpinner"

const store = borekStore()

export default class extends Component {
  static async getInitialProps({ req, pathname }) {
    return {
      //title: title(pathname)
    }
  }

  render() {
    return (
      <Layout title={pathDeconstructor(this.props.url.pathname)}>
        <section>
          <Provider store={store}>
            <LetterSpinner />
          </Provider>
          <div>Do borek and cokselek</div>
          <div>Do borek and aa</div>
        </section>
        <style jsx>
          {`
            section {
              border: 1px dashed red;
              display: grid;
              grid-template-columns: repeat(12, 1fr);
              grid-template-rows: repeat(12, 1fr);
            }
            div {
              border: 1px dashed blue;
              height: 100px;
              width: 100px;
            }
          `}
        </style>
      </Layout>
    )
  }
}
