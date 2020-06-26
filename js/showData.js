! function() {
    //data区域
    const dataEl = document.querySelector('.data')

    function bgPositionContr(bottom) {
        let bottomDi = bottom / 7
        dataEl.style.backgroundPosition = `center calc(50% - ${bottomDi}px)`
    }
    ScrollReveal().reveal('.data', {
        beforeReveal: () => {
            anime({
                targets: '.data-piece .num', //目标：css选择器num
                innerHTML: (el) => {
                    return [0, el.innerHTML]
                },
                duration: 1000,
                round: 1,
                easing: 'easeInOutExpo' //缓和
            })
            let { bottom } = dataEl.getBoundingClientRect()
            bgPositionContr(bottom)
        }
    })
    window.addEventListener('scroll', () => {
        let { top, bottom } = dataEl.getBoundingClientRect()
            //判断是否在可见区域
        if (bottom > 0 && top < window.innerHeight) {
            bgPositionContr(bottom)
        }
    })
}.call()