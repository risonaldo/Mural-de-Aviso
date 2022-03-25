const express = require('express');
const bodyParser = require('body-parser');
const post = require('../model/post');
const router = express.Router();

router.get("/all", (req, res) => {
    res.json(JSON.stringify(post.getAll));
});

router.post("/new",bodyParser.json(), (req, res) =>{ 
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;

    post.newPost(titulo,descricao);

    res.send("Post Adicionado");

});

module.exports = router