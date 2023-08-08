const express = require("express")
const app = express()
const PORT = 3000

//  requiring fruits from models folder
// front end imports back end requires
const fruits = require("./models/fruits")


app.get('/fruits', ( req, res ) => {
    res.send(fruits)
    // returns JSON looking array of fruits
} )




// best practice keep this at end... 
// more specific roots come first!!
app.get('/fruits/:indexOfFruitsArray', ( req, res ) => {
    res.send( fruits[req.params.indexOfFruitsArray] )
})









// keep at bottom
app.listen(PORT, ( req, res ) => {
    console.log(`Server is running on port ${PORT}. Better go catch it!`)
})