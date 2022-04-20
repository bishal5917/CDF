const Consul = require('../models/consulModel')

exports.createConsul = async (req, res, next) => {
    const consul = await Consul.create(req.body)

    res.status(201).json({
        success: true,
        consul
    })
}

exports.getAllConsuls = async (req, res) => {
    const consulFound = await Consul.find()

    res.status(200).json({
        success: true,
        consulFound
    })
}

exports.updateConsul = async (req, res) => {

}