//  Header 아래로 스크롤 시 background-color 변경
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

// Arrowup 버튼 상단에서 스크롤 시 투명하게 처리
const arrowUp = document.querySelector(".arrowup");
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

// Navbar 토글버튼 클릭 처리
const navbarMenu = document.querySelector(".header__nav");
const navbarToggle = document.querySelector(".header__toggle");
navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});
