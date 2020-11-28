window.addEventListener('load', () => {
    document.getElementsByClassName('appear-overall')[0].addEventListener('mouseover', () => {
        document.getElementsByClassName('appear-container-first')[0].classList.add('appear-container-first-changed')
        setTimeout(() => {
            if(document.getElementsByClassName('appear-container-first')[0].classList.contains('appear-container-first-changed')) {
                document.getElementsByClassName('appear-container-second')[0].classList.add('appear-container-second-changed')   
            } else {
                return
            }
        }, 1000);
    })
    document.getElementsByClassName('appear-overall')[0].addEventListener('mouseout', () => {
        document.getElementsByClassName('appear-container-first')[0].classList.remove('appear-container-first-changed')
        setTimeout(() => {
            document.getElementsByClassName('appear-container-second')[0].classList.remove('appear-container-second-changed')
        }, 1000);
    })
})