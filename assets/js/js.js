const minus_cart = document.getElementById("minus-cart");
const add_cart = document.getElementById("add-cart");
const affichage = document.getElementById("quantity-cart");

add_cart.addEventListener("click", () => {
    let quantity = parseInt(affichage.textContent);

    if(quantity == 0){
        document.getElementById("btn-add-panier").style.display = '';
    }

    quantity++;
    affichage.textContent = quantity;
});

minus_cart.addEventListener("click", () => {
    let quantity = parseInt(affichage.textContent);
    if (quantity > 0) {
        quantity--;

        if(quantity == 0){
            document.getElementById("btn-add-panier").style.display = 'none';
        }

        affichage.textContent = quantity;
    }
});