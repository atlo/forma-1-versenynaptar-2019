const mapRadios = Array.from(document.querySelectorAll('.map-radios input'))
const raceImages = Array.from(document.querySelectorAll('.image-container li'))
const raceNameElement = document.querySelector('.race-name')
const raceCityElement = document.querySelector('.race-city')
const raceDateElement = document.querySelector('.race-date')

const races = [
  {
    id: 1,
    name: 'Ausztrál Nagydíj',
    city: 'Melbourne',
    date: 'március 17.',
    abbrevation: 'AUS'
  },
  {
    id: 2,
    name: 'Bahreini Nagydíj',
    city: 'Szahír',
    date: 'március 31.',
    abbrevation: 'BRN'
  },
  {
    id: 3,
    name: 'Kínai Nagydíj',
    city: 'Sanghaj',
    date: 'április 14.',
    abbrevation: 'PRC'
  },
  {
    id: 4,
    name: 'Azerbajdzsáni Nagydíj',
    city: 'Baku',
    date: 'április 28.',
    abbrevation: 'AZ'
  },
  {
    id: 5,
    name: 'Spanyol Nagydíj',
    city: 'Barcelona',
    date: 'május 12.',
    abbrevation: 'E'
  },
  {
    id: 6,
    name: 'Monacói Nagydíj',
    city: 'Monte-Carlo',
    date: 'május 26.',
    abbrevation: 'MC'
  },
  {
    id: 7,
    name: 'Kanadai Nagydíj',
    city: 'Montreal',
    date: 'június 9.',
    abbrevation: 'CDN'
  },
  {
    id: 8,
    name: 'Francia Nagydíj',
    city: 'Le Castellet',
    date: 'június 23.',
    abbrevation: 'F'
  },
  {
    id: 9,
    name: 'Osztrák Nagydíj',
    city: 'Spielberg',
    date: 'június 30.',
    abbrevation: 'A'
  },
  {
    id: 10,
    name: 'Brit Nagydíj',
    city: 'Silverstone',
    date: 'július 14.',
    abbrevation: 'GB'
  },
  {
    id: 11,
    name: 'Német Nagydíj',
    city: 'Hockenheim',
    date: 'július 28.',
    abbrevation: 'D'
  },
  {
    id: 12,
    name: 'Magyar nagydíj',
    city: 'Mogyoród',
    date: 'augusztus 4.',
    abbrevation: 'H'
  },
  {
    id: 13,
    name: 'Belga Nagydíj',
    city: 'Spa-Francorchamps',
    date: 'szeptember 1.',
    abbrevation: 'B'
  },
  {
    id: 14,
    name: 'Olasz Nagydíj',
    city: 'Monza',
    date: 'szeptember 8.',
    abbrevation: 'I'
  },
  {
    id: 15,
    name: 'Szingapúri Nagydíj',
    city: 'Szingapúr',
    date: 'szeptember 22.',
    abbrevation: 'SGB'
  },
  {
    id: 16,
    name: 'Orosz Nagydíj',
    city: 'Szocsi',
    date: 'szeptember 29.',
    abbrevation: 'RUS'
  },
  {
    id: 17,
    name: 'Japán Nagydíj',
    city: 'Szuzuka',
    date: 'október 13.',
    abbrevation: 'J'
  },
  {
    id: 18,
    name: 'Mexikói Nagydíj',
    city: 'Mexikóváros',
    date: 'október 27.',
    abbrevation: 'MEX'
  },
  {
    id: 19,
    name: 'Egyesült Államok Nagydíja',
    city: 'Austin',
    date: 'november 3.',
    abbrevation: 'USA'
  },
  {
    id: 20,
    name: 'Brazil Nagydíj',
    city: 'Sao Paulo',
    date: 'november 17.',
    abbrevation: 'BR'
  },
  {
    id: 21,
    name: 'Abu-Dzabi Nagydíj',
    city: 'Abu-Dzabi',
    date: 'december 1.',
    abbrevation: 'UAE'
  }
]

function setMap () {
  const selectedRadio = mapRadios.find(radio => radio.checked).value
  console.log({selectedRadio})
  const {id, name, city, date} = races.find(race => race.id === parseInt(selectedRadio))
  console.log({id, name, city, date})
  raceNameElement.innerHTML = name
  raceCityElement.innerHTML = city
  raceDateElement.innerHTML = date

  raceImages.forEach(image => image.classList.remove('active'))
  document.querySelector(`.map-image-${id}`).classList.add('active')
}

mapRadios.forEach(radio => radio.addEventListener('change', setMap))
mapRadios[0].click()