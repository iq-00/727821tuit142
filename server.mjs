import http from "http"
import functions from "./functions.mjs"

let fun = new functions()

let server = http.createServer()

let authToken = undefined


server.on("request", async (request, response) => {
    console.log(request.url);

    if (!authToken) {
        authToken = await fun.refreshToken()
        console.log(authToken);
    }

    if (request.url.startsWith("/numbers/p")) {
        let val = await fun.prime(authToken)
        console.log(val);
        response.end(JSON.stringify(val))
    }

    if (request.url.startsWith("/numbers/f")) {
        let val = await fun.fibo(authToken)
        console.log(val);
        response.end(JSON.stringify(val))
    }

    if (request.url.startsWith("/numbers/e")) {
        let val = await fun.even(authToken)
        console.log(val);
        response.end(JSON.stringify(val))
    }
    if (request.url.startsWith("/numbers/r")) {
        let val = await fun.random(authToken)
        console.log(val);
        response.end(JSON.stringify(val))
    }

})



// server running on default port
server.listen(80, "192.168.247.121", ev => {
    console.log("server running on default port");
})