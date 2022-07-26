const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('anything')
})

module.exports = router
