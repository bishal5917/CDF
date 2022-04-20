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
    let consul = await Consul.findById(req.params.id)

    if (!consul) {
        return res.status(500).json({
            success: false,
            message: "Not Found"
        })
    }

    consul = await Consul.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runvalidatos: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        consul
    })

}