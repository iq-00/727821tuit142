import http from "http"
import functions from "./functions.mjs"

let fun=new functions()

let server = http.createServer()

server.on("request", (request, response) => {
    console.log(request.url);
    
})



// server running on default port
server.listen(80, ev => {
    console.log("server running on default post");
})

// , "192.168.247.121"