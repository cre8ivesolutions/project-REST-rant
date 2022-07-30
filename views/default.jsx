const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
            <nav className="navbar navbar-light bg-light justify-content-between">
            <a className ="navbar-brand"></a>
            <form className="form-inline">
                <input className ="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                </input>
                <button className ="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
</nav>
            <nav>
                <ul>
                    <li>
                    <a href="/">Home</a>
                    </li>
                    <li>
                    <a href="/places">Places</a>
                    </li>
                    <li>
                    <a href="/places/new">Add Place</a>
                    </li>
                </ul>
            </nav>
                {html.children}
            </body>
        </html>
    )
  }
  

module.exports = Def

