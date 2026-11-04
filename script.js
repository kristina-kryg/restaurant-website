const backToTopButton = document.querySelector(".back-to-top");

const toggleBackToTopButton = () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
};

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", toggleBackToTopButton);

let itemsInBasket = 0;
function addItemToCart() {
  itemsInBasket++;
  let itemNumber = document.querySelector(".cart-item-number");
  itemNumber.innerHTML = itemsInBasket;
}
