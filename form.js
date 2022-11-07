let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#fa950e";

tg.MainButton.text = "Отправить отчет!"
tg.MainButton.isVisible = true
tg.MainButton.isActive = true
tg.MainButton.show()
tg.MainButton.enable()

document.addEventListener('DOMContentLoaded', function(){
    let formData = {};
    const form = document.getElementById('form');
    const LS = localStorage;

    //получааем данные из input
    form.addEventListener('input', function(event){
	console.log(event.target.name)
        formData[event.target.name] = event.target.value;
        LS.setItem('formData', JSON.stringify(formData));
    });

  	//востановить
    if (LS.getItem('formData')) {
      	formData = JSON.parse(LS.getItem('formData'));
        for (let key in formData){
            form.elements[key].value = formData[key];
      		}
  	}
})

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
    if (date == ""){
        alert('Вы не указали дату!');
    }
    if (point == "Выберите точку..."){
        alert('Вы не выбрали точку!');
    }
    else{
        tg.sendData(JSON.stringify(values));
    }
    
});


