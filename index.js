const express = require("express")
const app = express()
const PORT = 3000

//  requiring fruits from models folder
// front end imports back end requires
const fruits = require("./models/fruits")


//  MIDDLEWARE -----------------------------------------------------------
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine() )

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
}); // how you're supposed to read the packages/ information as they come in... process before sending. interpreter. middleman
// runs in the middle of the req/rest cycle.. duh middleware
//put at top of file. so middleware can be executed by the other routes
// how do we treat the data after we understand where its going? middleware is a filter perhaps? based on jordan at 10:16 am w11d4


app.get('/fruits', ( req, res ) => {
    // res.send(fruits)
    // returns JSON looking array of fruits

    res.render("Index", {fruits: fruits})

} )

app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    fruits.push(req.body);
    console.log(fruits);
    res.send('data received');
});




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