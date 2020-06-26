(function() {
    const options = {
        delay: 300,
        distance: '50px',
        easing: 'ease-in-out',
        origin: 'bottom',
    }
    ScrollReveal().reveal('.feature', {...options, interval: 350 })
    ScrollReveal().reveal('.service-item', {...options, interval: 350 })
})()