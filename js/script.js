let addNumber = 0;

card = document.querySelectorAll('.card');

card.forEach(
    (product) => {
        var plusBtn = product.querySelector('.add-btn');
        var minusBtn = product.querySelector('.minus-btn');
        var delButton = product.querySelector('.delete-btn');
        var qtyElement = product.querySelector(".quantity");
        var heart = document.querySelector(".heart");
        var qtyItem = Number(
            qtyElement.textContent
        );
        plusBtn.addEventListener('click', () => {
            qtyItem++;
            qtyElement.textContent = qtyItem;
            calc();
        })
        minusBtn.addEventListener('click', () => {
            if (qtyItem > 0) {
                qtyItem--;
                qtyElement.textContent = qtyItem;
                calc();
            }
        })
        delButton.addEventListener('click', () => {
                product.remove();
                calc();
            }
        )
        heart.addEventListener('click', () => {
            heart.classList.toggle("active");
            if (heart.classList.contains("active")) {
                heart.style.color = "red";
            } else {
                heart.style.color = "black";
            }
        })
    }
)

function calc(){
var totalPrice = 0;
var totalPriceElement = document.querySelector('.total');
var priceElements = document.querySelectorAll('.card');
priceElements.forEach((priceElement) => {
    var unitPriceElement = priceElement.querySelector('.unit-price');
    var price = parseFloat(unitPriceElement.textContent.replace('$', ''));
    var qtyElement = priceElement.closest('.card').querySelector('.quantity');
    var qty = parseInt(qtyElement.textContent);
    totalPrice += price * qty;
}); 
totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
// This code is for a shopping cart functionality where users can add, remove, and update quantities of products.
// It also includes a heart icon to mark favorite products and calculates the total price of items in the cart.
}