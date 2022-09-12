import express, { Router } from 'express'
import { starter } from '../controllers/starterController'

const router = express.Router()

router.get("/", starter);

export default router