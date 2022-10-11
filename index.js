const axios = require("axios");

const arr = ['https://reqres.in/api/users/1', 'https://reqres.in/api/users/3', 'https://reqres.in/api/users/10'];

function run() {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        axios.get(element).then((res) => {
            console.log(res.data.data.email);
        }, (err) => {
            console.log(err);
        })
    }
}

run();