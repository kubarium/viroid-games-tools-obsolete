import AceEditor from 'react-ace';
import brace from 'brace'


import {lipsum} from '../static/lipsum'

import 'brace/mode/markdown';
import 'brace/snippets/markdown';
import 'brace/ext/language_tools';
import 'brace/theme/github';

import Layout from "../components/Layout"
import { pathDeconstructor } from "../components/utils"

import React, { Component } from 'react'

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
        <div>Do borek</div>
        <AceEditor mode="markdown" theme="github" onChange={ onChange } name="UNIQUE_ID_OF_DIV" editorProps={ { $blockScrolling: true } } value={ lipsum(5) } />
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