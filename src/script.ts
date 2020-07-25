import {Component} from 'react';

export default function fadedImages() {
    let imagesTab = Array.prototype.slice.call(document.querySelectorAll('infoCard__box--animated .infoCard__box__imgHolder img'));
    let img_count = imagesTab.length;
    console.log(img_count);
    let active_index = 0;

    imagesTab.forEach((element, index) => {
        if(index == 0) {
            element.classList.add('active');
        }
    })

    setInterval(() => {
        let active_img = document.querySelector('.faded.active');
        if(imagesTab.indexOf(active_img) == img_count - 1) {
            active_index = 0;
        } else {
            active_index++;
        }

        active_img!.classList.remove('active');
        document.querySelectorAll('infoCard__box--animated .infoCard__box__imgHolder img')[active_index].classList.add('active');
    }, 2000);
}