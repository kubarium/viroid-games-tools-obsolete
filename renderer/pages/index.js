import Head from "next/head";
import Link from "next/link";
import { Menubar } from "primereact/components/menubar/Menubar";
import menu from "../menu.json";

export default () => (
  <div>
    <Head>
      <title>Viroid Games Tools</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.css"
      />
      <link rel="stylesheet" href="/static/primereact.min.css" />
      <link rel="stylesheet" href="/static/theme.css" />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.0/js/all.js"
      />
    </Head>
    <Menubar model={menu} />
  </div>
);
