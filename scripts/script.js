document.getElementById("main-action").onclick = function () // перемещение при нажатии кнопки Посмотреть пользователей
{
    document.getElementById("participants").scrollIntoView({behavior: "smooth"});
}

document.getElementById("marketplace-action").onclick = function(){window.location.href='../martketplace/market.html'}
