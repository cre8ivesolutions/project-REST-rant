const router = require('express').Router()

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/', (req, res) => {
    let places = [{
        name: 'Nitty Gritty',
        city: 'Sun Prairie',
        state: 'WI',
        cuisines: 'American, Traditional',
        pic: '/images/nittygritty.jpg',
      }, {
        name: 'Buck and Honeys',
        city: 'Madison',
        state: 'WI',
        cuisines: 'American, Traditional',
        pic: '/images/bucknhoneys.jpg',
      }]
      
      res.render('places/index', { places })

  })

  router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })
  

module.exports = router
