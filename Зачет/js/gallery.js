(function () {
    "use strict";

    //Слайд-шоу
    var currentIndex = 0;
    const images = document.querySelectorAll(".gallery img");
    const totalImages = images.length;

    function showNextImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add("active");
    }

    //Показываем следующее изображение каждые 5 сек
    const slideshowInterval = setInterval(showNextImage, 5000);
})();



