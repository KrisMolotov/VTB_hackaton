document.getElementById("main-action").onclick = function () // перемещение при нажатии кнопки Посмотреть пользователей
{
    document.getElementById("product").scrollIntoView({behavior: "smooth"});
}

document.getElementById("price-action").onclick = function () // валидация кнопки Узнать цену
{
    if (document.getElementById("name").value === "")
    {
        alert("Заполните поле Имя!");
    }
    else if (document.getElementById("password").value === "")
    {
        alert("Заполните поле Телефон!");
    }
    else if (document.getElementById("role").value === "")
    {
        alert("Заполните поле Товар!");
    }
}