import { Router } from "express"
import AuthController from "../cotrollers/AuthController.js"

const router = new Router()

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/logout', AuthController.logout)
router.get('/refresh', AuthController.refresh)




export default router