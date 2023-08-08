const express = require("express")
const app = express()
const PORT = 3000

//  requiring fruits from models folder
// front end imports back end requires
const fruits = require("./models/fruits")


//  MIDDLEWARE -----------------------------------------------------------
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine() )

app.get('/fruits', ( req, res ) => {
    // res.send(fruits)
    // returns JSON looking array of fruits

    res.render("Index", {fruits: fruits})

} )




// best practice keep this at end... 
// more specific roots come first!!

app.get('/fruits/:indexOfFruitsArray', ( req, res ) => {
    // res.send( fruits[req.params.indexOfFruitsArray] )

    // show each fruit
    // this is also passing a prop to Show.jsx
    res.render("Show", {
        fruit: fruits[req.params.indexOfFruitsArray]
    })

})









// keep at bottom
app.listen(PORT, ( req, res ) => {
    console.log(`Server is running on port ${PORT}. Better go catch it!`)
})