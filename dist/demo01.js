class Products {
    constructor(id, name, price, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }
}
class ShowProducts {
    constructor() {
        this.showProducts = () => {
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
        };
        this.products = [
            { id: 9, name: 'Sản phẩm 1', price: 1000, image: 'https://cdn.webshopapp.com/shops/282647/files/396852583/image.jpg' },
            { id: 9, name: 'Sản phẩm 1', price: 1000, image: 'https://cdn.webshopapp.com/shops/282647/files/396852583/image.jpg' },
            { id: 9, name: 'Sản phẩm 1', price: 1000, image: 'https://cdn.webshopapp.com/shops/282647/files/396852583/image.jpg' },
            { id: 9, name: 'Sản phẩm 1', price: 1000, image: 'https://cdn.webshopapp.com/shops/282647/files/396852583/image.jpg' },
            { id: 9, name: 'Sản phẩm 1', price: 1000, image: 'https://cdn.webshopapp.com/shops/282647/files/396852583/image.jpg' },
            { id: 9, name: 'Sản phẩm 1', price: 1000, image: 'https://cdn.webshopapp.com/shops/282647/files/396852583/image.jpg' },
            { id: 9, name: 'Sản phẩm 1', price: 1000, image: 'https://cdn.webshopapp.com/shops/282647/files/396852583/image.jpg' },
            { id: 9, name: 'Sản phẩm 1', price: 1000, image: 'https://cdn.webshopapp.com/shops/282647/files/396852583/image.jpg' },
        ];
    }
}
var showitem = new ShowProducts();
showitem.showProducts();
