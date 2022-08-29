const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
    .then(data=>displyCountry(data))
}


const displyCountry = countrys => {
    // for (const country of countrys)
    //     console.log(country);
    const countryContainer = document.getElementById('country-container');
    countrys.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name:${country.name.common}</h3>
        <p>capital:${country.capital ? country.capital[0] : 'no capital'}</p>
        <button onClick="loadCountryDetails('${country.cca2}')">Details</button>
        `
        countryContainer.appendChild(countryDiv);
    })
}

const loadCountryDetails = (code) => {
    const url=`https://restcountries.com/v3.1/alpha/${code}`
    // console.log('click country',code);
    fetch(url)
        .then(res => res.json())
    .then(data=>displyCountryDetails(data[0]))
}

const displyCountryDetails = country => {
    const countryDetalis = document.getElementById('country-details');
    countryDetalis. innerHTML = `
    <h2>Details:${country.name.common}</h2>
    <img src="${country.flags.png}">
    `
}
loadCountry();