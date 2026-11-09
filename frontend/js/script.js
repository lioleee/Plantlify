
let cartCount = 0;

const cartCountElement = document.getElementById("cart-count");
const addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        cartCount++;

        cartCountElement.textContent = cartCount;

        const originalText = button.textContent;
        button.textContent = "Added ✓";

        setTimeout(function() {
            button.textContent = originalText;
        }, 1000);
    });
});
