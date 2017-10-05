(function () {

  var game = {    
    price: bundlePrice, // начальная цена
    discount: Math.floor(Math.random() * 41 + 10), // процент скидки от 10 до 50
    salePrice: function () {
      var saleRate = Math.round(this.price * (1 - this.discount / 100)); //цена со скидкой
      return saleRate;
    }    
  }
  
  var today, expiryMsg, elSale;

  function offerExpires(today) {

    var saleLength, saleOffDate, day, date, month, dayNames, monthNames, dayMsg;

    saleLength = Math.floor(Math.random() * 10 + 1); // число дней от 1 до 10  
    saleOffDate = new Date(today.getTime() + saleLength * 3600 * 24 * 1000); // дата конца
    // Создаем массивы, в которых будут содержаться названия дней и месяцев
    dayNames = ['Воскресения', 'Понедельника', 'Вторника', 'Среды', 'Четверга', 'Пятницы', 'Субботы'];
    monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    date = saleOffDate.getDate();
    day = dayNames[saleOffDate.getDay()];
    month = monthNames[saleOffDate.getMonth()];

    if (saleLength === 1) {
      dayMsg = " день";
    } else if (saleLength === 2 || saleLength === 3 || saleLength === 4) {
      dayMsg = " дня";
    } else {
      dayMsg = " дней";
    }

    /*
    <h2>У нас акция!</h2>
    <p>До
      <span class="game-sale-decor" id="date">8</span>
      <span class="game-sale-decor" id="month">месяца</span> берите всё со скидкой
      <span class="game-sale-decor" id="discount">17</span>
    </p>
    <p>Новая цена всего
      <span class="game-sale-decor--price"><span id="sale-price">900</span></span>  
    </p>
    <p>предложение действительно еще
      <span class="game-sale-decor" id="days">5</span> дней до
      <span class="game-sale-decor" id="days">среды</span>
    </p>
    */

    expiryMsg = "<h2>У нас акция!</h2>";
    expiryMsg += "<p>До <span class=\"game-sale-decor\">" + date + "</span> " +
      "<span class=\"game-sale-decor\">" + month + "</span> " +
      "берите всё со скидкой " +
      "<span class=\"game-sale-decor\">" + game.discount + " %</span></p>";
    expiryMsg += "<p>Новая цена всего <span class=\"game-sale-decor--price\"><span>" +           game.salePrice() + " рублей</span></span></p>";
    expiryMsg += "<p>Предложение действительно еще <span class=\"game-sale-decor\">" +           saleLength + dayMsg + "</span> " + "до " +
      "<span class=\"game-sale-decor\">" + day + "</span></p>";
    return expiryMsg;

  }

  today = new Date();
  elSale = document.getElementById("elSale");
  elSale.innerHTML = offerExpires(today);

}());