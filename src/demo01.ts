class Products {
    id: number;
    name: string;
    price: number;
    image: string;

    constructor(id: number, name: string, price: number, image: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }
}


class ShowProducts {
    products: Products[];

    constructor() {
        this.products = [
            { id: 9, name: 'Sản phẩm 1', price: 1000, image: 'https://cdn.webshopapp.com/shops/282647/files/396852583/image.jpg' },
            { id: 9, name: 'Sản phẩm 1', price: 1000, image: 'https://cdn.webshopapp.com/shops/282647/files/396852583/image.jpg' },
            { id: 9, name: 'Sản phẩm 1', price: 1000, image: 'https://cdn.webshopapp.com/shops/282647/files/396852583/image.jpg' },
            { id: 9, name: 'Sản phẩm 1', price: 1000, image: 'https://cdn.webshopapp.com/shops/282647/files/396852583/image.jpg' },
            { id: 9, name: 'Sản phẩm 1', price: 1000, image: 'https://cdn.webshopapp.com/shops/282647/files/396852583/image.jpg' },
            { id: 9, name: 'Sản phẩm 1', price: 1000, image: 'https://cdn.webshopapp.com/shops/282647/files/396852583/image.jpg' },
            { id: 9, name: 'Sản phẩm 1', price: 1000, image: 'https://cdn.webshopapp.com/shops/282647/files/396852583/image.jpg' },
            { id: 9, name: 'Sản phẩm 1', price: 1000, image: 'https://cdn.webshopapp.com/shops/282647/files/396852583/image.jpg' },
        ]
    }

    showProducts = () => {
        let _html = '';
        this.products.map((item, index) => {
            _html += ` <tr>
                        <td>${index + 1}</td>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td><img src="${item.image}" alt="" width="100px"></td>
                    </tr>`;
        });
        document.getElementById('tbody').innerHTML = _html;
    }
}

var showitem = new ShowProducts();
showitem.showProducts();
