const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <h2>Currently unrated</h2>
            <p>No comments yet</p>
            <a href="" className="btn btn-warning"> 
              Edit
            </a>  
            <form method="POST" action = ""> 
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>     
          </main>
        </Def>
    )
}

module.exports = show

