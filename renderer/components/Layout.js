import { Menubar } from "primereact/components/menubar/Menubar";
import menu from "../menu.json";
import Head from "next/head";

export default (props) => (
  <div>
    <Head>
      <title>Viroid Games Tools</title>
      <link rel="stylesheet" href="/static/primereact.min.css" />
      <link rel="stylesheet" href="/static/theme.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.css" />
      <link rel="stylesheet" href="/static/index.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.0.0/js/all.js" />
    </Head>
    <Menubar model={ menu } />
    <section className="section">
      <div className="container is-fluid">
        <h1 className="title">{ props.title }</h1>
        { props.children }
      </div>
    </section>
  </div>
)