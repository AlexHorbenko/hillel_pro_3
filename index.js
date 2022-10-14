const year = +prompt('Please type your bithday year');
console.log(year);

let resultYear;
if (year) {
    const nowYear = new Date().getFullYear()
    resultYear = 'Your age is ' + (nowYear - year) + '.';
    // resultYear = `Your age is ${now - year}`;
} else {
    resultYear = "It's a pity that you don't type your B-year. ";
}

const city = prompt('Please type your city');
let resultCity;

if (!city || +city) {
    resultCity = "It's a pity that you don't type your city. ";
} else if (city === 'Kyiv') {
    resultCity = 'You live in the capital of Ukraine. ';
} else if (city === 'London') {
    resultCity = 'You live in the capital of Great Britan. ';
} else if (city === 'Washington') {
    resultCity = 'You live in the capital of USA. ';
} else {
    resultCity = 'You live in ' + city + '. ';
}

const sport = prompt('What kind of sport do you prefer?');
let resultSport;

if (!sport || +sport) {
    resultSport = "It's a pity that you type any sport. ";
} else if (sport === 'Autoracing') {
    resultSport = 'Cool! Would you like to be Ayrton Senna?!';
} else if (sport === 'Paris-Dakar rally') {
    resultSport = 'Cool! Would you like to be Cyril Depres?!';
} else if (sport === 'Alpinism') {
    resultSport = 'Cool! Would you like to be Reinhold Messner?!';
} else {
    resultSport = 'You like ' + sport;
}

alert (resultCity + resultYear + resultSport);