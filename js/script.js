let addNumber = 0;

card = document.querySelectorAll('.card');

card.forEach(
    (product) => {
        var plusBtn = product.querySelector('.add-btn');
        qtyElement = product.querySelector(".quantity");
        var qtyItem = Number(
            qtyElement.textContent
        );
        plusBtn.addEventListener('click', () => {
            qtyItem++;
            qtyElement.textContent = qtyItem;
        })
    }
)

//const item = document.querySelectorAll(".add-btn");
//console.log(item);
//    item.forEach((el) => {
//        el.addEventListener("click", () => {
//            for (let i = 0; i < qtyElement.length; i++) {
//                const element = qtyElement[i];
//            }
//            addNumber += 1;
//            element.innerText = addNumber;
//            console.log("Ok");
//    }); 
//});
console.log(item);

function removeFromCart() {
    if (document.querySelector(".quantity").innerText > 0) {
        addNumber -= 1;
        document.querySelector(".quantity").innerText = addNumber;
    }
}
function toggleHeart() {
    const heart = document.querySelector(".heart");
    heart.classList.toggle("active");
    if (heart.classList.contains("active")) {
        heart.style.color = "red";
    } else {
        heart.style.color = "black";
    }
}

function removeProduct() {
    const products = document.querySelector(".product");
    products.remove();
}