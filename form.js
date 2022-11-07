let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#fa950e";

tg.MainButton.text = "Отправить отчет!"
tg.MainButton.isVisible = true
tg.MainButton.isActive = true
tg.MainButton.show()
tg.MainButton.enable()





// при загрузке страницы (когда DOM готова)
document.addEventListener('DOMContentLoaded', () => {
  // восстановление ранее сохраненных данных 
  let savedFormData = localStorage.getItem('form');
  alert(savedFormData);
  // пробуем считать JSON-строку с объектом, хранящим введенные пользователем данные
  if (savedFormData) {                                   // если ранее мы ничего не сохранили, getItem вернет null (и тогда условие не выполнится)
    savedFormData = JSON.parse(savedFormData);           // преобразуем JSON-строку с данными в объект 
    // к примеру, у нас есть поля ввода #subject и #message
    document.getElementById('name').value = savedFormData.name; 
    document.getElementById('date').value = savedFormData.date; 
    localStorage.removeItem('formData');                 // после того как мы восстановили сохраненные данные, удаляем запись в localStorage
  }

  // сохранение данных, введенных пользователем 
  window.addEventListener('beforeunload', e => {           // назначаем слушателя события, которое возникает при уходе со страницы
    let name = document.getElementById('name').value,   // получаем значения содержимого полей ввода 
        date  = document.getElementById('date').value; 
    if (name.length || date.length) {                       // если текст хотя бы в одном из полей ввода не нулевой длины
      let formData = {                                     // создаем объект, содержащий введенные пользователем данные 
        name: name, 
        date: date
      };
      // записываем JSON-строку только что созданного объекта с данными
      localStorage.setItem('formData', JSON.stringify(formData)); 
    }
  }); 
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


