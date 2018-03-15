/* import 'brace/ext/language_tools';
import 'brace/mode/markdown';
import 'brace/snippets/markdown';
import 'brace/theme/github';
import AceEditor from 'react-ace';
import brace from 'brace' */
import React, { Component } from 'react'

import { lipsum } from '../static/lipsum'
import { pathDeconstructor } from "../components/utils"
import Layout from "../components/Layout"

export default class extends Component {
    static async getInitialProps({req, pathname}) {
        return {
            //title: title(pathname)
        }
    }

    onChange = () => {
        console.log('change', newValue);

    }
    render() {

        return (
            <Layout title={ pathDeconstructor(this.props.url.pathname) }>
              <div>fuck sake</div>
              {/* <AceEditor mode="markdown" theme="github" onChange={ onChange } name="UNIQUE_ID_OF_DIV" editorProps={ { $blockScrolling: true } } value={ lipsum(5) } /> */}
              <style jsx>
                { `
    div {
        border:1px dashed red;
    }
    ` }
              </style>
            </Layout>
        )
    }
}
