const header = $('#shopify-section-header').parent();

let banner = $('<div>Hello! This Script tag is coming from the public folder</div>')

console.log(banner)


const makeHeader = data => {
    banner = $(`<div>${data}</div>`)
    banner.css({ 'background-color': 'orange', 'text-align': 'center' })
    header.prepend(banner)
}

fetch('https://cors-anywhere.herokuapp.com/https://8e135ea8749a.ngrok.io/api/products?shop=bertrands-testing-shop.myshopify.com')
    .then(res => res.json())
    .then(data => {
        makeHeader(data.data)
    })
    .catch(err => console.log(err))