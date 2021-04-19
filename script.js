$('[data-fancybox="gallery"]').fancybox({
  buttons : [
    'close'
  ],
  thumbs : {
    autoStart : false
  }
});

const SiteHeader = document.querySelector(".site-header")
const Toggle = document.querySelector(".site-header__menu")

Toggle.addEventListener("click", e => {
console.log("ok")
  SiteHeader.classList.toggle("site-header--open")
})
