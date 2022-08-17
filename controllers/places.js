const router = require('express').Router()
const db = require('../models')

// 1. Show Index page
router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places })
  })
  .catch(err => {
    console.log(err) 
    res.render('error404')
  })
})

// 2. Add New Place
router.post("/", (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "https://images.unsplash.com/photo-1584536286788-78ae81c2c54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80";
    if (req.body.city === '') { req.body.city = undefined }
    if (req.body.state === '') { req.body.state = undefined }
    }
    db.Place.create(req.body)
      .then(() => {
        res.redirect("/places");
      })
      .catch((err) => {
        if (err && err.name == "ValidationError") {
          let message = "Validation Error: ";
          for (var field in err.errors) {
            message += `${field} was ${err.errors[field].value}. `;
            message += `${err.errors[field].message}`;
          }
          console.log("Validation error message", message);
          res.render("places/new", { message });
        } else {
          res.render("error404");
        }
      });
    });

// 3. Show Add a New Place Page
router.get('/new', (req, res) => {
  res.render('places/new')
  })

// 4. Show individual place
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// 5. Update a place
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

// 6. Delete a place
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})
// 7. Edit a place
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
      .then(place => {
          res.render('places/edit', { place })
      })
      .catch(err => {
          res.render('error404')
      })
})

// 8. Add a comment to a place
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  req.body.rant = req.body.rant ? true : false 
      db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment.id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})

// 9. Delete a place
router.delete('/:id/comment/:commentId', (req, res) => {
  db.Comment.findByIdAndDelete(req.params.commentId)
      .then(() => {
          console.log('Success')
          res.redirect(`/places/${req.params.id}`)
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
    })

module.exports = router
