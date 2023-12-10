var express = require('express');
var router = express.Router();
var Bateau=require('../model/bateau')
var portcontroller=require('../controller/portcontroller')

router.post('/add', portcontroller.add)

router.get('/show', portcontroller.show)

router.get('/showbyid/:id',portcontroller.showbyid)
router.get('/showbyname/:name',portcontroller.showbyname)
router.put('/update/:id',portcontroller.update)
router.delete('/delete/:id',portcontroller.deletebyid)

module.exports = router;
