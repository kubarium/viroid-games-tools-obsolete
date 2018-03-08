import React, { Component } from "react";
import { pathDeconstructor } from "../components/utils";
import Layout from "../components/Layout";
import LetterSpinner from "../components/LetterSpinner";
import { Provider } from "react-redux";
import borekci from "../stores/borek";
const store = borekci();
//const store = borek.configureStore();

export default class extends Component {
  static async getInitialProps({ req, pathname }) {
    return {
      //title: title(pathname)
    };
  }

  render() {
    return (
      <Layout title={pathDeconstructor(this.props.url.pathname)}>
        <section>
          <Provider store={store}>
            <LetterSpinner />
          </Provider>
          <div>Do borek and cokselek</div>
          <div>Do borek and cokelek</div>
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
    );
  }
}
