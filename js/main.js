;(function () {
  // Habilitar JavaScript
  var $body = document.querySelector('body')
  $body.classList.remove('no-js')
  $body.classList.add('js')

  // Hamburger Menu
  var menu = new Menu({
    container: '.header__nav',
    toggleBtn: '.header__btnMenu',
    widthEnabled: 1024
  })

  // Carousel notebook img
  var carouselImgs = new Carousel({
    container: '.laptop-slider .slideshow',
    itens: 'figure',
    btnPrev: '.prev',
    btnNext: '.next'
  })

  // Carousel Quotes
  var carouselQuotes = new Carousel({
    container: '.quote-slideshow',
    itens: 'figure',
    btnPrev: '.prev',
    btnNext: '.next'
  })
})()
