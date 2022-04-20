const express = require("express")
const { getAllConsuls, createConsul, updateConsul } = require("../controllers/consulController")
const router = express.Router()

router.route('/consuls').get(getAllConsuls)
router.route('/consul/new').post(createConsul)
router.route('/consul/update/:id').put(updateConsul)

module.exports = router