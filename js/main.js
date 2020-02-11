'use strict';

var numberOfPins = 8;
var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
var pins = document.querySelector('.map__pins');

var randomInteger = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};


var getRandomElement = function (arr) {
  return arr[randomInteger(0, arr.length - 1)];
};

var getRandomLengthArrow = function (arr) {
  var lengthOfArrow = randomInteger(0, arr.length - 1);
  var newArr = [];
  var getNewArr = function () {
    for (var i = 0; i <= lengthOfArrow; i++) {
      newArr.push(arr[i]);
    }
  };
  getNewArr();

  return newArr;
};


var cards = [{}, {}, {}, {}, {}, {}, {}, {}];

var createCards = function () {
  for (var i = 0; i <= numberOfPins; i++) {
    cards[i] =
      {
        'author': {
          'avatar': 'img/avatars/user0' + randomInteger(1, 8) + '.png',
        },
        'offer': {
          'title': 'Заголовок',
          'address': '600, 350',
          'price': 1000,
          'type': getRandomElement(['palace', 'flat', 'house', 'bungalo']),
          'rooms': randomInteger(1, 4),
          'guests': randomInteger(1, 10),
          'checkin': getRandomElement(['12:00', '13:00', '14:00']),
          'checkout': getRandomElement(['12:00', '13:00', '14:00']),
          'features': getRandomLengthArrow(['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']),
          'description': 'строка с описанием',
          'photos': getRandomLengthArrow(['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']),
        },

        'location': {
          'x': randomInteger(130, 630),
          'y': randomInteger(130, 630),
        }
      };
  }

  return;
};

createCards();

var map = document.querySelector('.map');
map.classList.remove('map--faded');

var createPins = function () {
  for (var i = 0; i < numberOfPins; i++) {
    var pin = pinTemplate.cloneNode(true);

    pin.querySelector('img').src = cards[i].author.avatar;
    pin.querySelector('img').alt = cards[i].offer.title;
    pin.style.left = cards[i].location.x + 25 + 'px';
    pin.style.top = cards[i].location.y + 35 + 'px';

    pins.appendChild(pin);
  }
};

createPins();
