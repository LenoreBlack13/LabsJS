(function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", function () {
        const contactForm = document.getElementById("contactForm");
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        //Проверка, существуют ли элементы формы перед добавлением обработчика события
        if (contactForm && nameInput && emailInput && messageInput) {
            contactForm.addEventListener("submit", function (e) {
                e.preventDefault();

                const name = nameInput.value;
                const email = emailInput.value;
                const message = messageInput.value;

                //Получаем существующие данные из LS
                const existingData = JSON.parse(localStorage.getItem("contactInfo")) || [];

                //Добавляем новое сообщение в массив
                existingData.push({ name, email, message });

                //Сохраняем обновлённый массив обратно в LS
                localStorage.setItem("contactInfo", JSON.stringify(existingData));
                alert("Ваше сообщение отправлено, мы с вами обязательно свяжемся!");

                //Очищаем поля формы после отправки
                nameInput.value = "";
                emailInput.value = "";
                messageInput.value = "";
            });
        } else {
            console.error("Не все элементов формы были найдены");
        }
    });
})();
