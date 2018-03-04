import AceEditor from 'react-ace';
import brace from 'brace'


import {lipsum} from '../static/lipsum'

import 'brace/mode/markdown';
import 'brace/snippets/markdown';
import 'brace/ext/language_tools';
import 'brace/theme/github';
import Link from 'next/link'
function onChange(newValue) {
  console.log('change', newValue);
}
export default () => <div>
                       <p>
                         <AceEditor mode="markdown" theme="github" onChange={ onChange } name="UNIQUE_ID_OF_DIV" editorProps={ { $blockScrolling: true } } value={ lipsum(5) } />
                       </p>
                     </div>
