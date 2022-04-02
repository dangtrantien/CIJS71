//BT A.1
const arr1 = [2, 3, -5, -2, 4];

function adjacentElementsProduct(arr) {
    let max = arr[0] * arr[1];
    for (let i of arr) {
        let res = arr[i] * arr[i + 1];
        if (res > max) {
            max = res;
            console.log(`Cặp (${arr[i]};${arr[i + 1]}) có tích lớn nhất =`, max);
        }
    }
}

adjacentElementsProduct(arr1);

//BT A.2
const arr2 = [60, 40, 55, 75, 64];

function alternatingSums(arr) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            sum1 += arr[i];
        }
        else {
            sum2 += arr[i];
        }
    }

    console.log(`Tổng cân nặng của 2 nhóm = [${sum1},${sum2}]`);
}

alternatingSums(arr2);

//BT B
class EnterLink {
    constructor() {
        this.$container = document.createElement('form');
        this.$container.setAttribute(
            'class',
            'w-1/2 p-8 absolute inset-x-1/4 top-14 rounded-3xl bg-white font-medium text-xl'
        );
        this.$container.addEventListener('submit', this.onSubmit);

        this.$title1 = document.createElement('h1');
        this.$title1.innerText = 'Link Shortener';
        this.$title1.setAttribute(
            'class',
            'mb-8 font-bold text-4xl'
        );

        this.$input = document.createElement('div');
        this.$input.setAttribute(
            'class',
            'mb-2 flex items-center'
        );

        this.$tag_name_input = document.createElement('p');
        this.$tag_name_input.innerText = 'Enter a Link:';

        this.$input_link = document.createElement('input');
        this.$input_link.placeholder = 'example.com';
        this.$input_link.setAttribute(
            'class',
            'mx-3 h-10 px-2 bg-slate-300 rounded-lg'
        );

        this.$button = document.createElement('button');
        this.$button.type = 'submit';

        this._button =
            `
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
            </svg>
        `

        this.$domain = document.createElement('div');
        this.$domain.setAttribute(
            'class',
            'mb-6 flex items-center'
        );

        this.$tag_name_domain = document.createElement('p');
        this.$tag_name_domain.innerText = 'Short domain:';

        this.$shrtco_btn = document.createElement('button');
        this.$shrtco_btn.innerText = 'shrtco.de';
        this.$shrtco_btn.setAttribute(
            'class',
            'ml-2 px-2 rounded-lg bg-rose-400 text-white hover:bg-red-500'
        );

        this.$9qr_btn = document.createElement('button');
        this.$9qr_btn.innerText = '9qr.de';
        this.$9qr_btn.setAttribute(
            'class',
            'ml-2 px-2 rounded-lg bg-rose-400 text-white hover:bg-red-500'
        );

        this.$shiny_btn = document.createElement('button');
        this.$shiny_btn.innerText = 'shiny.link';
        this.$shiny_btn.setAttribute(
            'class',
            'ml-2 px-2 rounded-lg bg-rose-400 text-white hover:bg-red-500'
        );

        this.$describe = document.createElement('p');
        this.$describe.innerText = 'With this free Link Shortener you can make Links shorter and easier to remember. Just enter a Link into the form and click on the above Button to generate a short Link. When visiting the short-Link, the short-Link will immediately redirect you to the long Link.';

    }

    onSubmit = (e) => {
        e.preventDefault();

        const input_link = this.$input_link.value;
        const short_link = new ShortLink(input_link);
        view.appendChild(short_link.render());
    }

    render() {
        this.$container.appendChild(this.$title1);
        this.$container.appendChild(this.$input);
        this.$input.appendChild(this.$tag_name_input);
        this.$input.appendChild(this.$input_link);
        this.$input.appendChild(this.$button);
        this.$button.insertAdjacentHTML('afterbegin', this._button);

        this.$container.appendChild(this.$domain);
        this.$domain.appendChild(this.$tag_name_domain);
        this.$domain.appendChild(this.$shrtco_btn);
        this.$domain.appendChild(this.$9qr_btn);
        this.$domain.appendChild(this.$shiny_btn);

        this.$container.appendChild(this.$describe);

        return this.$container;
    }
}

class ShortLink {
    constructor(link) {
        this.$short_link_container = document.createElement('div');
        this.$short_link_container.setAttribute(
            'class',
            'w-1/4 p-4 absolute inset-x-1/3 top-2/3 rounded-3xl bg-white font-medium text-xl flex flex-col items-center'
        );

        this.$title2 = document.createElement('h2');
        this.$title2.innerText = 'Link generated!';

        this.$link = document.createElement('div');
        this.$link.innerText = link;
        this.$link.setAttribute(
            'class',
            'text-3xl text-green-500 cursor-pointer'
        );
    }

    render() {
        this.$short_link_container.appendChild(this.$title2);
        this.$short_link_container.appendChild(this.$link);

        return this.$short_link_container;
    }
}

const view = document.getElementById('root');
const enter_link = new EnterLink();

view.setAttribute('class', 'bg-amber-400')
view.appendChild(enter_link.render());

// async function getData() {
//     try {
//         const request = await fetch("https://api.shrtco.de/v2/");
//         const response = await request.json();
//         return response.data;
//     } catch (error) {
//         console.log(error)
//     }
// }

// getData().then(value => {
//   console.log(value)
// }).catch(error => {
//   console.log("error", error)
// })