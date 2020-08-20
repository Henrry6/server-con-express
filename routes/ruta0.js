const {Router} = require('express')
const router = Router()

router.get( '/', (req,res) => {
    res.send('Esta es mi nueva ruta')
})

module.exports = router;