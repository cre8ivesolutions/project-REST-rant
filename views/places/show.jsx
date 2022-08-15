const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = ( 
        <h5 className="inactive">
          No comments yet
        </h5>
          )
    let rating = (
        <h5 className="inactive">
          Not yet rated!
        </h5>
        )
    if (data.place.comments.length) {
      //rating code here
      let sumRatings = data.place.comments.reduce((tot, c) => {
          return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
          stars += '⭐️'
        }
        rating = (
          <h3>
            {stars} stars
          </h3>
        )
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h5 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h5>
            <h5>{c.content}</h5>
            <h5>
              <strong>- {c.author}</strong>
            </h5>

            <h5>Rating: {c.stars} STARS</h5>
          </div>
        )
      })
    }
    return (
      <Def>
        <main>
          <h1>{ data.place.name }</h1>
          <h4>Rating </h4>
          {rating}
          <div className="row">
              <div className="col-sm-6">
              <img className="showImg" src={data.place.pic} alt={data.place.name} />
              <h5>
                Located in {data.place.city}, {data.place.state}
              </h5>
            </div>
            <div className="col-sm-6">
            <h3>Description</h3>
            <h5>{data.place.showEstablished()}</h5>
            <h6>Serving {data.place.cuisines}</h6>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                  Edit
                </a>     
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form> 
            </div>
          </div>
            {/*why is this on this form? It is already at the top*/} 
            {/* <button className="addPlace_btn">Add a new place</button> */} 
        <hr/>
          <div>
          <h4 id='comment-section'>Comments</h4>
          {comments}
      <hr/>
          <h4>Add a Comment!</h4>
          <form action={`/places/${data.place.id}/comment`}method="POST">
          <div>
            <div className="row">
                <div className="form-group col-sm-12">
                    <label htmlFor="content">Your Comments:</label>
                    <textarea id="content" name="content" className="form-control"></textarea>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-sm-4 form">
                    <label htmlFor="author">Your Name:</label>
                    <input className="form-control" id="author" name="author"/>
                </div>
                <div className="form-group col-sm-4 form">
                    <label htmlFor="stars">☆Star Rating☆ 1 - 5 &nbsp; &nbsp; </label>
                    <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" />
                </div> 
                <div className="form-group col-sm-4 form">
                    <label htmlFor="rant">Rant! 😡 &nbsp; &nbsp; </label>
                    <input type="checkbox" default="unchecked" id="rant" name="rant" />
                </div>
            </div>
                  <input className="btn addPlace_btn" type="submit" value="Submit" />
          </div>
          </form>
        </div>
       </main>
      </Def>);
}
module.exports = show

