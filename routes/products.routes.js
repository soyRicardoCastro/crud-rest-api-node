import { Router } from 'express'
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct
} from '../controllers/products.controllers.js'
const router = Router()

router.get('/products', getProducts)

router.post('/products', createProduct)

router.put('/products/:id', updateProduct)

router.delete('/products/:id', deleteProduct)

router.get('/products/:id', getProducts)

export default router