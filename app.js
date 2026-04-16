const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Hello World app is healthy!' })
})

// Main endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello World!',
    timestamp: new Date().toISOString(),
    status: 'CI/CD Pipeline Working! 🚀'
  })
})

// Version endpoint
app.get('/version', (req, res) => {
  res.json({ version: '1.0.0', environment: process.env.NODE_ENV || 'development' })
})

app.listen(PORT, () => {
  console.log(`✅ Hello World app running on port ${PORT}`)
  console.log(`📍 Health check: http://localhost:${PORT}/health`)
})