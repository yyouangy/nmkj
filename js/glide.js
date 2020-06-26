(function() {
    //glide
    const glide = new Glide('.glide')
    const captionEles = document.querySelectorAll('.slide-caption')

    glide.on('run.before', () => {
        const childOfCaption = document.querySelectorAll('.slide-caption > *')
        childOfCaption.forEach(ele => {
            ele.style.opacity = 0
        })
    })
    glide.on(['mount.after', 'run.after'], () => {
        const caption = captionEles[glide.index]
        anime({
            targets: caption.children,
            duration: 300,
            opacity: [0, 1],
            easing: 'linear',
            delay: anime.stagger(400, { start: 300 }),
            translateY: [anime.stagger([20, 10]), 0],
        })
    })
    glide.mount()
})()