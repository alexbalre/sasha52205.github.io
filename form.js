let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#fa950e";

tg.MainButton.text = "Отправить отчет!!"
tg.MainButton.isVisible = true
tg.MainButton.isActive = true
tg.MainButton.show()
tg.MainButton.enable()


document.addEventListener("DOMContentLoaded", function() { // событие загрузки страницы
    // выбираем на странице все элементы типа textarea и input
    document.querySelectorAll('select, input').forEach(function(e) {
        // если данные значения уже записаны в sessionStorage, то вставляем их в поля формы
        // путём этого мы как раз берём данные из памяти браузера, если страница была случайно перезагружена
        if(e.value === '') e.value = window.sessionStorage.getItem(e.id, e.value);
        if(e.value === '') e.value = window.localStorage.getItem(e.id, e.value);
        // на событие ввода данных (включая вставку с помощью мыши) вешаем обработчик
        e.addEventListener('input', function() {
            // и записываем в sessionStorage данные, в качестве имени используя атрибут name поля элемента ввода
            window.sessionStorage.setItem(e.id, e.value);
            window.localStorage.setItem(e.id, e.value);
        })
    })

}); 


Telegram.WebApp.onEvent("mainButtonClicked", function(){
    fio = document.getElementById("name").value;
    date = document.getElementById("date").value;
    point = document.getElementById("point").value;
    cash = document.getElementById("cash").value;
    term = document.getElementById("term").value;
    qr = document.getElementById("qr").value;
    amount = document.getElementById("amount").value;
    stcash = document.getElementById("stcash").value;
    fncash = document.getElementById("fncash").value;
    incas = document.getElementById("incas").value;
    rash = document.getElementById("rash").value;
    zp = document.getElementById("zp").value;

    values = {fio: fio,
	      date: date,
	      point: point,
	      stcash: stcash,
              cash: cash,
              term: term,
              qr: qr,
              amount: amount,
              fncash: fncash,
              incas: incas,
              rash: rash,
	      zp: zp};

    if (fio ==""){
        alert('Вы не указали ФИО!');
    }
    if (point == "Выберите точку..."){
        alert('Вы не выбрали точку!');
    }
    else{
	window.localStorage.removeItem('amount');
	window.localStorage.removeItem('cash');
	window.localStorage.removeItem('date');
	window.localStorage.removeItem('fncash');
	window.localStorage.removeItem('incas');
	window.localStorage.removeItem('qr');
	window.localStorage.removeItem('rash');
	window.localStorage.removeItem('stcash');
	window.localStorage.removeItem('term');
	window.localStorage.removeItem('zp');
        tg.sendData(JSON.stringify(values));
    }
    
});


