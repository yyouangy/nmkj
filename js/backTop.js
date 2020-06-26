(function() {
    //sticky header
    window.addEventListener('scroll', () => {
        const wrapTop = document.querySelector('.contentWrap').offsetTop
        const scrollToTop = document.querySelector('.scrollToTop')
        if (window.scrollY > wrapTop) {
            document.querySelector('header').classList.add('sticky')
        } else {
            document.querySelector('header').classList.remove('sticky')
        }

        if (window.scrollY > 1700) {
            scrollToTop.style.display = 'block'
        } else {
            scrollToTop.style.display = 'none'
        }
    })

    document.querySelector('.scrollToTop').onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" //bom中的scrollTo方法
        })
    }
})()