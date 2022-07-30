const router = require('express').Router()
const places = require('../models/places.js')

//GET PLACES
router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/', (req, res) => {
  res.render('places/index', { places })
})


router.post('/', (req, res) => {
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = '/images/goodfood.jpg'
    }
    if (!req.body.city) {
      req.body.city = 'Somewhere'
    }
    if (!req.body.state) {
      req.body.state = 'WI, USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })


module.exports = router
