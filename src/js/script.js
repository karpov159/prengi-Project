
window.addEventListener('DOMContentLoaded', () => {


    function slider() {
        const links = document.querySelectorAll('.solutions__link'),
        next = document.querySelector('.solutions__slider-next'),
        prev = document.querySelector('.solutions__slider-prev'),
        slides = document.querySelectorAll('.solutions__slide'),
        slidesField = document.querySelector('.solutions__slider-inner'),
        wrapper = document.querySelector('.solutions__slider-wrapper'),
        menu = document.querySelector('.solutions__menu'),
        width = window.getComputedStyle(wrapper).width;

        function deleteWords(str) {
            return +str.replace(/\D/g, '');
        }

        let offset = 0;

        next.addEventListener('click', () => {
            if (offset == deleteWords(width) * (slides.length - 1)) {
                offset = 0;
            } else {
                offset+= deleteWords(width);
            }
            deleteActiveClass();
            addActiveClass();

            slidesField.style.transform = `translateX(-${offset}px)`;
        });

        prev.addEventListener('click', () => {
            if (offset == 0) {
                offset = deleteWords(width) * (slides.length - 1);
            } else {
                offset-= deleteWords(width);
            }

            deleteActiveClass();
            addActiveClass();

            slidesField.style.transform = `translateX(-${offset}px)`;
        });

        // links 

        function deleteActiveClass() {
            links.forEach(link => link.classList.remove('solutions__link_active'));
        }

        function addActiveClass() {
            const num = offset / deleteWords(width);
            links[num].classList.add('solutions__link_active');
        }

        menu.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target;
             
            if (target && target.classList.contains('solutions__link')) {
                deleteActiveClass();

                links.forEach((link, i) => {
                    if (link == target) {
                        link.classList.add('solutions__link_active');
                        offset = deleteWords(width) * i;
                        slidesField.style.transform = `translateX(-${offset}px)`;


                    }
                });
            }
        });

    }
    slider();
});