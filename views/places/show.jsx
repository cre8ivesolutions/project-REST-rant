const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = ( 
      <h5 className="inactive">
        No comments yet!
      </h5>
    )
    if (data.place.comments.length) {
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            {/* <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2> */}
            <h5>{c.content}</h5>
            <h5>
              <strong>- {c.author}</strong>
            </h5>
            <h4>Rating </h4>
            <h5>Rating: {c.stars} STARS</h5>
          </div>
        )
      })
    }
    return (
      <Def>
        <main>
          <h1>{ data.place.name }</h1>
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
          <hr/>
          <h4>Comments</h4>
          {comments}
          <button className="addPlace_btn">Add a new place</button>
        </main>
      </Def>);
}
module.exports = show

