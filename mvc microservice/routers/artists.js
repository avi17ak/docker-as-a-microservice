const { Router } = require('express')

const artistsController = require("../controllers/artists")

artistsRouter = Router()

artistsRouter.get('/', artistsController.index)
artistsRouter.get('/:name', artistsController.show)
artistsRouter.post('/', artistsController.create)
artistsRouter.patch('/:name', artistsController.update)
artistsRouter.delete('/:name', artistsController.destroy)


module.exports = artistsRouter