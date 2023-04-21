// you have to set in pages folder .
// its not created by default , you have to create it .
// this one targets the document element of your whole project .
//when you change it you have to restart the server .
// DEFAULT :
you can change languauge  <HTml lang='en'>
  Head is not the same Head we imported from next/head
Main rerpresents _app.js file 
you can add html code in body before or after Main 
nextScript is some thing default you have to write 
we use this file with React Portals .

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
