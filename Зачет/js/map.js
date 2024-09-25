// Функция инициализирующая карту
(function () {
    "use strict";

    //Координаты местоположения
    const ourLocation = [59.92810140818102, 30.360349140274693];

    function initMap(userCoords) {
        //Создаем объект карты
        const map = new ymaps.Map("map", {
            center: ourLocation,
            zoom: 15
        });

        //Маркер для центра
        const ourPlacemark = new ymaps.Placemark(ourLocation, {
            balloonContent: "Мы здесь!"
        });

        //Маркер для центра на карту
        map.geoObjects.add(ourPlacemark);

        //Если есть координаты пользователя, добавляем их на карту
        if (userCoords) {
            const userPlacemark = new ymaps.Placemark(userCoords, {
                balloonContent: "Вы находитесь здесь!"
            });

            //Маркер для пользователя на карту
            map.geoObjects.add(userPlacemark);
            map.setCenter(ourLocation); //Центрируем карту на местоположении центра
        }
    }

    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("Пользователь отклонил запрос на геолокацию.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Информация о местоположении недоступна.");
                break;
            case error.TIMEOUT:
                alert("Запрос на получение местоположения превысил время ожидания.");
                break;
            case error.UNKNOWN_ERROR:
                alert("Произошла неизвестная ошибка.");
                break;
        }
        //Если произошла ошибка, показываем карту только с местоположением центра
        initMap(null);
    }

    function getCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const userCoords = [position.coords.latitude, position.coords.longitude];
                    initMap(userCoords);
                },
                showError
            );
        } else {
            alert("Geolocation не поддерживается вашим браузером.");
            //Если геолокация не поддерживается, показываем только местоположение центра
            initMap(null);
        }
    }

    //Загрузка карты после загрузки API
    ymaps.ready(getCurrentLocation);
})();






