let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#fa950e";

tg.MainButton.text = "Отправить отчет!!"
tg.MainButton.isVisible = true
tg.MainButton.isActive = true
tg.MainButton.show()
tg.MainButton.enable()


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
        tg.sendData(JSON.stringify(values));
    }
    
});


