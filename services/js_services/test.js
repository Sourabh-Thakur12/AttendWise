const express = require('express')
const app = express()
const port = 3001
    
app.get('/', (req, res) => {
    res.send('Hello from JS Service!')
})

app.listen(port, () =>{
    console.log(`JS Service running at http://localhost:${port}`)
})