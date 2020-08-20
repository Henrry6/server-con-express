const {Router} = require('express')
const router = Router()


router.get('/', (req,res) => {
    let pagePrincipal ={
        name: "Henrry",
        lastName: "Alvarado"
    }
    res.json(pagePrincipal)
})
module.exports = router