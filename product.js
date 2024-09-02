function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.addEventListener('DOMContentLoaded', function() {
    const productId = getQueryParam("id");

    const products = {
        1: {
            name: "Taylor Swift Tee",
            image: "img/taylor.jpg",
            price: "R$ 69,90",
            description: "Uma camiseta exclusiva com a icônica Taylor Swift.",
            sizes: ["P", "M", "G", "GG"],
            colors: ["Preto", "Branco", "Cinza"]
        },
        2: {
            name: "Drake Tee",
            image: "img/images.jfif",
            price: "R$ 69,90",
            description: "Camiseta divertida com o Drake.",
            sizes: ["P", "M", "G", "GG"],
            colors: ["Preto", "Branco"]
        },
        3: {
            name: "Igor Job Tee",
            image: "img/7490510029_1.webp",
            price: "R$ 69,90",
            description: "Camiseta Do Igor Job",
            sizes: ["P", "M", "G", "GG"],
            colors: ["Preto", "Branco"]
        },
        4: {
            name: "Chico Coins Tee",
            image: "img/chico.jpeg",
            price: "R$ 69,90",
            description: "Camiseta Do Icone Chico Moedas",
            sizes: ["P", "M", "G", "GG"],
            colors: ["Preto", "Branco"]
        }
    };

    const product = products[productId];

    if (product) {
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-description').textContent = product.description;

        const sizeSelect = document.getElementById('product-size');
        product.sizes.forEach(size => {
            const option = document.createElement('option');
            option.value = size;
            option.textContent = size;
            sizeSelect.appendChild(option);
        });

        const colorSelect = document.getElementById('product-color');
        product.colors.forEach(color => {
            const option = document.createElement('option');
            option.value = color;
            option.textContent = color;
            colorSelect.appendChild(option);
        });
    } else {
        document.getElementById('product-name').textContent = "Produto não encontrado";
    }
});
