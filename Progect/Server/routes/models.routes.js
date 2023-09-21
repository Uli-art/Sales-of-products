module.exports = (app, pareser) => {
    const models = {
        user:{},
        roles:{},
        places:{},
        party:{},
        order:{},
        discount:{},
        coctail:{},
        categories:{},
    }
    Object.keys(models).map((model) => {
        const router = require('express').Router();
        const controller = require('../controllers/' + model + '.controller.js')
        if (model === 'user') {
            router.get('/',controller.getAll)
            router.post('/',controller.create)
            router.delete('/:id',controller.delete)
        } else if (model === 'cards') {
            router.get('/',controller.getAll)
            router.post('/',controller.create)
            router.delete('/:id',controller.delete)
        } else if (model === 'comments') {
            router.get('/',controller.getAll)
            router.post('/',controller.create)
            router.delete('/:id',controller.delete)
        } else if (model === 'favorites') {
            router.get('/',controller.getAll)
            router.post('/',controller.create)
            router.delete('/:id',controller.delete)
        } else if (model === 'orders') {
            router.get('/',controller.getAll)
            router.post('/',controller.create)
            router.delete('/:id',controller.delete)
        } else if (model === 'products') {
            router.get('/',controller.getAll)
            router.post('/',controller.create)
            router.delete('/:id',controller.delete)
        } else if (model === 'rating') {
            router.get('/',controller.getAll)
            router.post('/',controller.create)
            router.delete('/:id',controller.delete)
        } else if (model === 'categories') {
            router.get('/',controller.getAll)
            router.post('/',controller.create)
            router.delete('/:id',controller.delete)
        } else if (model === 'sellers') {
            router.get('/',controller.getAll)
            router.post('/',controller.create)
            router.delete('/:id',controller.delete)
        } else if (model === 'statusesoforder') {
            router.get('/',controller.getAll)
            router.post('/',controller.create)
            router.delete('/:id',controller.delete)
        } else if (model === 'statusesofproduct') {
            router.get('/',controller.getAll)
            router.post('/',controller.create)
            router.delete('/:id',controller.delete)
        }
        
    })
    
}