import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    trim: true,
    default: 0
  }
}, {
  timestamps: true
})

export default mongoose.model('Product', productSchema)