const post = [
    {
        title: 'Uzumaki Naruto',
        image: 'https://i.pinimg.com/originals/2c/0a/08/2c0a08b3751b4401ffa8f1719a642b9d.png',
    },
    {
        title: 'Uzumaki Naruto',
        image: 'https://i.pinimg.com/originals/2c/0a/08/2c0a08b3751b4401ffa8f1719a642b9d.png',
    },
]
class App {
    constructor(title, imgUrl){
        this.$post= document.createElement('div');
        this.$post.classList.add('post');

        this.$name= document.createElement('h2');
        this.$name.innerText= title;

        this.$image= document.createElement('img');
        this.$image.src= imgUrl;
    }

    render() {
        this.$post.appendChild(this.$name);
        this.$post.appendChild(this.$image);

        return this.$post;
    }
}

const body = document.getElementById('app');

post.forEach((post) => {
    const postApp = new App(post.title, post.image);
    body.appendChild(postApp.render());
})