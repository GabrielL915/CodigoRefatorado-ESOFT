import { Router } from 'express'

import userController from "./user.controller"

const router = Router();

router.get('/users', userController.findAll)
router.get('/users/:id', userController.find)
router.post('/users', userController.create)
router.delete('/users/:id', userController.delete)
router.put('/users/:id', userController.update)
export default router