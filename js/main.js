
document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("btn-scroll-top");
 
  // Плавная прокрутка при клике на кнопку
  backToTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});