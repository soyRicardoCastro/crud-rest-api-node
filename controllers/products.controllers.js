import Product from '../models/product.model.js'

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

export const createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body

    const product = new Product({
      name,
      description,
      price
    })
    
    await product.save()
    
    res.json(product)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)

    if (!product) return res.status(404).json({
      message: 'El producto no existe'
    })
    
    return res.json(product)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
  
    if (!product) return res.status(404).json({
      message: 'El producto no existe'
    })
    
    return res.json(product)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

export const updateProduct = async (req, res) => {
  try {
    const {id} = req.params
    const productUpdated = await Product.findByIdAndUpdate(id, req.body, {
      new: true
    })
  
    return res.json(productUpdated)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}
