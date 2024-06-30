const font__size = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');
const book__content = document.querySelector('.book__content');
const color_text = document.querySelectorAll('[data-text-color].color');
const color_bg = document.querySelectorAll('[data-bg-color].color');

const font_size_active = 'font-size_active';
const color_active = 'color_active';

const func = function(element, active) {
    element.forEach((index) => {
        index.addEventListener('click', (ev) => {
            ev.preventDefault();


            element.forEach((el_i) => {
                el_i.classList.remove(active);
                book.classList.remove('font-size_small');
                book.classList.remove('font-size_big');
            })


            if (index.classList.contains('font-size_big')) {
                book.classList.add('font-size_big');
            }
            if (index.classList.contains('font-size_small')) {
                book.classList.add('font-size_small');
            }


            if (index.hasAttribute('data-text-color')) {
                book__content.style.color = index.getAttribute('data-text-color');
            }
            if (index.hasAttribute('data-bg-color')) {
                book__content.style.background = index.getAttribute('data-bg-color');
            }

            index.classList.add(active);
        })
    })

}

func(color_text, color_active);
func(color_bg, color_active);
func(font__size, font_size_active);


