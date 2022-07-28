const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
               
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"></link>
                <link rel="stylesheet" href="/css/style.css"></link>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }
  

module.exports = Def

