const slides = [...document.querySelectorAll('.slide')];
const rightArrow = document.querySelector('.arrow.right')
const leftArrow = document.querySelector('.arrow.left')

const slidesWrapper = document.querySelector('.slider .slides-wrapper ');

// let number = 0;
// const sliderMoveRight = () => {
//     console.log('test')
//     const activeSlides = document.querySelectorAll('.slide.active');
//     const currentIndex = slides.indexOf(activeSlides[2]);
//     activeSlides[0].classList.remove('active');
//     if(slides[currentIndex + 1]){
//         slides[currentIndex + 1].classList.add('active');
//     }
//     else{
//         slides[number].classList.add('active');
//
//         number++;
//     }
// }
//
//
// rightArrow.addEventListener('click', sliderMoveRight)
//

document.addEventListener("DOMContentLoaded", e => {
    let number = null;
    let imageWidth = 0;
    let fullWidth = 0;

    const scaleImages = () => {
        const windowWith = window.innerWidth;

        if(windowWith > 1200){
            number = 3;
        }

        else if(windowWith <= 1200 && windowWith >= 850){
            number = 2;
        }
        else if(windowWith < 850){
            number = 1;
        }

        imageWidth = window.innerWidth / number;

        fullWidth = document.querySelectorAll('.slides-wrapper img').length * imageWidth

        slidesWrapper.style.width = `${fullWidth}px`;
        [...document.querySelectorAll('.slides-wrapper img')].forEach(img => img.style.width = `${imageWidth}px`)
    }

    scaleImages();

    window.addEventListener('resize', scaleImages)

    const rightMoveSlider = (e) => {


        let translateX = slidesWrapper.style.transform.replace(/[^-0-9.,]/g, '')
        if(translateX === ''){
            translateX = 0;
        }
        else{
            translateX = parseInt(translateX);
        }


        if(translateX - imageWidth > -1 * fullWidth / 2){
            slidesWrapper.style.transform = `translateX(${translateX - imageWidth}px)`;
        }
        else{
            slidesWrapper.style.transform = `translateX(0)`;
        }
    }

    const leftMoveSlider = () => {
        let translateX = slidesWrapper.style.transform.replace(/[^-0-9.,]/g, '')
        if(translateX === ''){
            translateX = 0;
        }
        else{
            translateX = parseInt(translateX);
        }

        console.log(fullWidth)

        if(translateX < 0){
            slidesWrapper.style.transform = `translateX(${translateX + imageWidth}px)`;
        }
        else{
            slidesWrapper.style.transform = `translateX(${(-1 * fullWidth + number * imageWidth)}px)`;
        }
    }

    rightArrow.addEventListener('click', rightMoveSlider)
    leftArrow.addEventListener('click', leftMoveSlider)


})