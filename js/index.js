//缓动滚动
const theScroll = new SmoothScroll('nav a', {
    header: "header",
    offset: -10,
})
const glideBtnEl = document.querySelectorAll('.glide .btn')
glideBtnEl.forEach(el => {
    el.addEventListener('click', () => {
        const targetTo = document.querySelector('#about')
        theScroll.animateScroll(targetTo)
    })
})

//根据页面高亮nav
const disEls = document.querySelectorAll('[data-d]')
let minIndex = 0
window.addEventListener('scroll', () => {
    disEls.forEach((el, index) => {
        if (Math.abs(disEls[index].getBoundingClientRect().top) < Math.abs(disEls[minIndex].getBoundingClientRect().top)) {
            //console.log(disEls[index].id)
            const aTags = document.querySelectorAll('.nav a')
            aTags.forEach(el => {
                el.classList.remove('active')
            })
            aTags[index].classList.add('active')
            minIndex = index
        }
    })
})

//导航按钮
const barsEl = document.querySelector('.bars')
const headerEl = document.querySelector('header')
barsEl.addEventListener('click', () => {
    headerEl.classList.toggle('open')
})
document.addEventListener('scrollStart', () => {
    if (headerEl.classList.contains('open')) {
        headerEl.classList.remove('open')
    }
})