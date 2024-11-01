// Import packages
import express, { Request, Response } from 'express'
import pageRouter from './routes/page.routes'
import todoRouter from './routes/todo.routes'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

// Create server
const app = express()

// Set view engine to EJS
app.set('view engine', 'EJS')
app.set('views', path.join(__dirname, '../src/views'))

// Middleware
app.use(express.json()) // accept incoming json
app.use(express.static(path.join(__dirname, 'public'))) // Set public dir
app.use(express.urlencoded({ extended: true })) // accept form submissions

// Routes
app.use('/', pageRouter)
app.use('/todos', todoRouter)

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`)
})