/*
 * connect to database (which is handled in db.js)
 * store relevent data in db through user profile model
 * Cases:
        - New user sign-up
            -take user details
                -check username availability
                -check email availability
                -create collection if not exists
                -validate user input
            -hash password before storing
            -send confirmation email

        - Existing user sign-up
           -forward to sign-in
*/

import express from 'express'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import dbConnect from '../dbConnect.js'

dotenv.config()

const app = express()
const port = process.env.PORT

app.listen(port, (req, res) => {
    res.send('Sign-up Service is running!')
})

app.post('/sign-up', async (req, res) => {
    await dbConnect();
    

    
})