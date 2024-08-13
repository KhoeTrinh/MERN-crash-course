import mongoose from 'mongoose'

export const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Connected to MongoDB successfully`)
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error}`)
        process.exit(1)
    }
}