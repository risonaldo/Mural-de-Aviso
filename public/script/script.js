
document.addEventListener('DOMContentLoaded', () =>{
    updatePost();
})

function updatePost(){

    fetch("http://localhost:3000/api/all").then(res => {
        return res.json()
    }).then(json => {
        let postElements = '';

        let posts = JSON.parse(json);
        posts.forEach((post) => {
            let postElement = ` <div id=${post.id} class="card mb-4">
                                    <div class="card-header">
                                        <h5 class="card-title" >${post.titulo}</h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="card-text">${post.descricao}</div>
                                    </div>
                                </div>`

        postElements += postElement;
        });
        
        document.getElementById('posts').innerHTML = postElements;
    })
}

function newPost () {
    console.log("New Post");
}