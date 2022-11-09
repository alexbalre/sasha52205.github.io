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
    alert(fio);
    date = document.getElementById("date").value;
    alert(date);
    point = document.getElementById("point").value;
    alert(point);
    cash = document.getElementById("cash").value;
    alert(cash);
    term = document.getElementById("term").value;
    alert(term);
    qr = document.getElementById("qr").value;
    alert(qr);
    amount = document.getElementById("amount").value;
    alert(amount);
    stcash = document.getElementById("stcash").value;
    alert(stcash);
    fncash = document.getElementById("fncash").value;
    alert(fncash);
    incas = document.getElementById("incas").value;
    alert(incas);
    rash = document.getElementById("rash").value;
    alert(rash);
    zp = document.getElementById("zp").value;
    alert(zp);

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





