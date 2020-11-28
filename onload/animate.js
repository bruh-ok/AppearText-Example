window.addEventListener('load', () => {
    let element1 = document.getElementsByClassName('appear-container-first')[0]
    let element2 = document.getElementsByClassName('appear-container-second')[0]
    element1.classList.add('appear-container-first-changed')
    setTimeout(() => {
        element2.classList.add('appear-container-second-changed')
    }, 1000);
})