// const express = require('express')
import express from 'express'
import dotenv from 'dotenv'
const app = express()

dotenv.config()

const port = process.env.PORT
    
app.get('/test', (req, res) => {
    res.send('Hello from JS Service!')
})

app.listen(port, () =>{
    console.log(`JS Service running at http://localhost:${port}`)
})