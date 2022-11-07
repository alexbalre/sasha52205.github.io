let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#fa950e";

tg.MainButton.text = "Отправить отчет!"
tg.MainButton.isVisible = true
tg.MainButton.isActive = true
tg.MainButton.show()
tg.MainButton.enable()


Telegram.WebApp.onEvent("mainButtonClicked", function(){
    fio = document.getElementById("name").value;
    alert(fio);
})





