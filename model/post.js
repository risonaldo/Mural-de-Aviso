module.exports = {
    posts : [
        {
            id: 'sdanfa',
            titulo: 'Teste Mural',
            descricao: 'Descrição de alguma coisa'
        },
        {
            id: 'trea',
            titulo: 'Teste Mural',
            descricao: 'Descrição de alguma coisa'
        },
        {
            id: 'dadw',
            titulo: 'Teste Mural',
            descricao: 'Descrição de alguma coisa'
        }
    ],

    getAll() {
        return this.posts;
    },

    newPost(titulo, descricao){
        this.posts.push({id:genereteID(),titulo,descricao});
    }
}

function genereteID() {
    return Math.random().toString(36).substrings(2,9);
}


