document.getElementById("main-action").onclick = function () // валидация кнопки Узнать цену
{
    if (document.getElementById("name").value === "")
    {
        alert("Заполните поле Имя!");
    }
    else if (document.getElementById("password").value === "")
    {
        alert("Заполните поле Пароль!");
    }
    else if (document.getElementById("role").value === "")
    {
        alert("Заполните поле Должность!");
    }
    else
    {
        document.getElementById("main-action").onclick = function(){window.location.href='../index.html'}
    }
}

