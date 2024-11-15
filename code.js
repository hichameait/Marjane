let currentIndex = 0;

function showProduct(index) {
    const products = document.querySelectorAll('.section2_prd2 .pdr2');
    products.forEach((product, i) => {
        product.classList.toggle('visible', i === index);
    });
}

function showNext() {
    const products = document.querySelectorAll('.section2_prd2 .pdr2');
    currentIndex = (currentIndex + 1) % products.length;
    showProduct(currentIndex);
}

function showPrev() {
    const products = document.querySelectorAll('.section2_prd2 .pdr2');
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    showProduct(currentIndex);
}

// Initialize the first product to be visible on page load
document.addEventListener("DOMContentLoaded", () => {
    showProduct(currentIndex);
});
