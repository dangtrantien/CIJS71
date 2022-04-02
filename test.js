import { mock } from "./test-mock.js";

const view = document.getElementById('root');

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
// 		'X-RapidAPI-Key': 'c22ae9a82dmsh2532b74b51edda4p1b2224jsnabbec37db785'
// 	}
// };

// fetch('https://spotify23.p.rapidapi.com/tracks/?ids=3QMZPTPPxsfM5MoqjH2i0t', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

class Music {
    constructor (image, title, artist, id, url) {
        this.$container = document.createElement('div');

        this.$image = document.createElement('img');
        this.$image.src = image;

        this.$title = document.createElement('div');
        this.$title.innerText = `title: ${title}`;

        this.$artist = document.createElement('div');
        this.$artist.innerText = `artist: ${artist}`;

        this.$key = document.createElement('div');
        this.$key.innerText = `id: ${id}`;

        this.$url = document.createElement('a');
        this.$url.innerText = url;
        this.$url.href = url;

        this.$___ = document.createElement('hr');

    }

    render () {
        this.$container.appendChild(this.$image);
        this.$container.appendChild(this.$title);
        this.$container.appendChild(this.$artist);
        this.$container.appendChild(this.$key);
        this.$container.appendChild(this.$url);
        this.$container.appendChild(this.$___);

        return this.$container;
    }
}

function music_data () {
    const music = {
        image : mock[0].album.images[1].url,
        title : mock[0].name,
        artist : mock[0].artists[0].name,
        id : mock[0].id,
        url : mock[0].preview_url
    }

    const playList = new Music(
        music.image,
        music.title,
        music.artist,
        music.id,
        music.url
    );
    view.appendChild(playList.render());
}

// music_data();