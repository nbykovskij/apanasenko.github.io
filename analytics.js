function analyticsAddToCart(item) {

    var product = document.getElementsByClassName(item)[0].dataset

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'gaEvent',
        eventCategory: 'ecommerce',
        eventAction: 'addToCart',
        ecommerce: {
            add: {
                actionField: {
                    list: 'main_page_listing',
                    action: 'add'
                },
                products: [{
                    name: product.name,
                    id: product.sku,
                    price: product.price,
                    category: product.category,
                    brand: product.brand,
                    quantity: 1
                }]
            }
        }
    });
}

function analyticsProductClick(item) {

    var product = document.getElementsByClassName(item)[0].dataset

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'gaEvent',
        eventCategory: 'ecommerce',
        eventAction: 'productClick',
        ecommerce: {
            add: {
                actionField: {
                    list: 'main_page_listing',
                    action: 'click'
                },
                products: [{
                    name: product.name,
                    id: product.sku,
                    price: product.price,
                    category: product.category,
                    brand: product.brand,
                    quantity: 1
                }]
            }
        }
    });
}