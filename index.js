// Express Documentation Link :
// https://expressjs.com/en/4x/api.html

const express = require("express")
const app = express();
// app is an object
// console.dir(app)
let port = 3000;
app.listen(port, ()=>{
    console.log(`App is listening on ${port}`)
})
// Path Parameters :
app.get("/:username/:id", (req, res)=>{
    let {username, id} = req.params;
    let htmlStr = `<h1>welcome to the page of <br> @${username}. and your id is ${id}</h1>`
    // console.log(req.params)
    res.send(htmlStr)
})

// Routing : 
// sytax in browser :
// single query : /search?q="Hello"

app.get("/", (req, res)=>{
    res.send("Hello! You contacted root path")
})
app.get("/apple", (req, res)=>{
    res.send("you cotacted apple path")
})

app.get("/orange", (req, res)=>{
    res.send("You contacted orange path")

})
// app.get("*", (req, res)=>{
//     res.send("this path dose not exist.")
// })
// app.post("/", (req, res)=>{
//     res.send("You sent a post request to root")
// })

// Query Strings : 

app.get("/search", (req, res)=>{
    console.log(req.query)
    res.send("no results")
})
// app.get("/sreach", (req, res)=>{
//     let { q } = req.query;
//     if(!q){
//         res.send("Nothing Sreach!")
//     }
//     res.send(`<h1>sreach results for the query ${q}</h1>`)
// })
// app.use((req, res)=>{
//     console.log(req)
//     console.log("Request Received")

    // res.send({
    //     name : "Apple",
    //     color : "red"
    // })
    // const html = `
    //                 <h2>Fruits</h2>
    //                 <ul>
    //                 <li>Apple</li>
    //                 <li>Banana</li>
    //                 <li>Orange</li>
    //                 </ul>`
    // res.send(html)
// })

// Reading Hoppscotch :
// https://github.com/hoppscotch/hoppscotch/discussions/2051




