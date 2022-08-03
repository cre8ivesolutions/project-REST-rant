const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
                <div>
                  <img class="hero" src="/images/ice-cream.jpg"  alt="ice cream"/>
                  </div>
              <div>
                <p className='caption'><i>Photo by <a href="https://unsplash.com/@lamaroscu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lama Roscu</a> on <a href="https://unsplash.com/s/photos/ice-cream?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></i></p>
              </div>
              <a href="/places">
              <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }
  

module.exports = home

