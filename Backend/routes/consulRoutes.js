const express = require("express")
const { getAllConsuls, createConsul, updateConsul, deleteConsul, getSingleConsul } = require("../controllers/consulController")
const router = express.Router()

router.route('/consuls').get(getAllConsuls)
router.route('/consul/new').post(createConsul)
router.route('/consul/update/:id').put(updateConsul)
router.route('/consul/delete/:id').delete(deleteConsul)
router.route('/consul/:id').get(getSingleConsul)

module.exports = router