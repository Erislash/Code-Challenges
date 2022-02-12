window.addEventListener('DOMContentLoaded', () => {
    let vh = window.innerHeight * 0.01;
    document.body.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
        vh = window.innerHeight * 0.01;
        document.body.style.setProperty('--vh', `${vh}px`);
  });
});
