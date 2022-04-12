import mongoose from 'mongoose'

const MONGODB_URI = process.env['MONGODB_URI']

export async function connectToDB () {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('mongodb connected')
  } catch (error) {
    console.error(error)
  }
}
