function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.addEventListener('DOMContentLoaded', function() {
    const productId = getQueryParam('id');

    const products = {
        "1": {
            name: "Taylor Swift Tee",
            image: "img/taylor.jpg",
            price: "R$ 69,90",
            description: "Uma camiseta exclusiva com a icônica Taylor Swift."
        },
        "2": {
            name: "Drake Meme Tee",
            image: "img/images.jfif",
            price: "R$ 69,90",
            description: "Camiseta divertida com o Drake."
        }
    };

    const product = products[productId];

    if (product) {
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-description').textContent = product.description;
    } else {
        document.getElementById('product-name').textContent = "Produto não encontrado";
    }
});