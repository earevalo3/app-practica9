const axios = require('axios');
const url = 'https://jsonplaceholder.typicode.com/todos';

function getAll(req, res){
    axios.get(url).then(data => {
        return res.status(200).send({ ok: true, users: data.data })
    })
}


function getById(req, res){
    axios.get(`${url}/${req.params.id}`).then(data => {

        return res.status(200).send({ ok: true, user:data.data})

    })
}

module.exports = {
    getAll, getById
}