const Artist = require("../models/Artist")

const index = async (req, res) => {
    try {
        const artists = await Artist.getAll()
        res.status(200).json({
            success: true,
            artists: artists
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Unable to retrieve Artists",
            error: err
        })
    }
}


const show = async (req, res) => {
    try {
        const name = req.params.name
        const artist = await Artist.getOne(name)
        res.status(200).json({
            success: true,
            artist: artist
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Unable to retrieve Artist",
            error: err
        })
    }
}

const create = async (req, res) => {
    try {
        const data = req.body
        const artist = await Artist.create(data)
        res.status(201).json({
            success: true,
            artist: artist
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Unable to create Artist",
            error: err
        })
    }
}


const update = async (req, res) => {
    try {
        const name = req.params.name
        const data = req.body
        const artist = await Artist.getOne(name)
        const result = await artist.update(data)
        res.status(200).json({
            success: true,
            artist: result
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Unable to update Artist",
            error: err
        })
    }
}


const destroy = async (req, res) => {
    try {
        const name = req.params.name
        const artist = await Artist.getOne(name)
        const result = await artist.destroy()
        res.sendStatus(204)
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Unable to delete Artist",
            error: err
        })
    }
}

module.exports = {
    index, show, create, update, destroy
}