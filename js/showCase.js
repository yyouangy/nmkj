!function () {
  //isotope
  const isotope = new Isotope('.cases', {
    layoutMode: 'fitRows',
    itemSelector: '.case-item'
  })
  const filterBtns = document.querySelectorAll('.filter-btns') //[]
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let { target } = e
      let btnOptions = target.getAttribute('data-filter')
      if (btnOptions) {
        document.querySelectorAll('.filter-btn.active').forEach(btn => {
          btn.classList.remove('active')
        })
        target.classList.add('active')
        isotope.arrange({ filter: btnOptions })
      }
    })
  })
}.call()