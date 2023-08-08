const express = require("express")
const app = express()
const PORT = 3000



const fruits = ["apple", "banana", "pear"]

app.get('/fruits', ( req, res ) => {
    res.send(fruits)
    // returns JSON looking array of fruits
} )










app.listen(PORT, ( req, res ) => {
    console.log(`Server is running on port ${PORT}. Better go catch it!`)
})