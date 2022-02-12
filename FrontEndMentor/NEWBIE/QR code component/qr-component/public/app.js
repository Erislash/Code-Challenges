document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    let vh = window.innerHeight * 0.01;
    body.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        body.style.setProperty('--vh', `${vh}px`);
    })
});