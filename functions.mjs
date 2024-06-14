import axios from "axios"
export default class functions {

    prime(token) {
        return new Promise(async (res, rej) => {
            let value = (await axios.get("http://20.244.56.144/test/primes", { headers: { "Authorization": "Bearer " + token } })).data
            res(value)
        })
    }

    fibo(token) {
        return new Promise(async (res, rej) => {
            let value = (await axios.get("http://20.244.56.144/test/fibo", { headers: { "Authorization": "Bearer " + token } })).data
            res(value)
        })
    }

    even(token) {
        return new Promise(async (res, rej) => {
            let value = (await axios.get("http://20.244.56.144/test/even", { headers: { "Authorization": "Bearer " + token } })).data
            res(value)
        })
    }

    random(token) {
        return new Promise(async (res, rej) => {
            let value = (await axios.get("http://20.244.56.144/test/rand", { headers: { "Authorization": "Bearer " + token } })).data
            res(value)
        })
    }

    refreshToken() {
        let token = undefined
        let obj = {
            "companyName": "top_products",
            "clientID": "d4118401-b991-453c-8980-dd23f8315ee7",
            "clientSecret": "KSLflHqGmryTPNdE",
            "ownerName": "Subhas",
            "ownerEmail": "727821tuit142@skct.edu.in",
            "rollNo": "727821tuit142"
        }
        return new Promise((res, rej) => {
            async function a() {
                return (await axios.post("http://20.244.56.144/test/auth", JSON.stringify(obj))).data
            }
            a()
                .then(ev => {
                    token = ev.access_token
                    res(token)
                })
        })
    }
}