let new_cases = document.getElementById('new_case');
let new_death = document.getElementById('new_death');
let total_death = document.getElementById('total_death');
let total_recovered = document.getElementById('total_recovered');
let total_cases = document.getElementById('total_cases');
let table = document.getElementById('countries_stat');

//Fetching the world data

fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "56cf0ef69amshb9e5cc1ebc4c3ddp17e6d0jsn72eb4f2a92ce"
	}
})
.then(response => response.json().then(data => {
    // console.log(data);
    total_cases.innerHTML = data.total_cases;
    new_cases.innerHTML = data.new_cases;
    new_death.innerHTML = data.new_deaths;
    total_death.innerHTML = data.total_deaths;
    total_recovered.innerHTML = data.total_recovered;
}))
.catch(err => {
	console.log(err);
});

//Fetching the case country data

fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "56cf0ef69amshb9e5cc1ebc4c3ddp17e6d0jsn72eb4f2a92ce"
	}
})
.then(response => response.json().then(data => {
    // console.log(data);
    let countries_stat = data.countries_stat;
    // console.log(countries_stat);
    for(let i = 0;i < countries_stat.length; i++) {
        // console.log(countries_stat[i]);
        let row = table.insertRow(i + 1);
        let country_name = row.insertCell(0);
        let cases = row.insertCell(1);
        let new_cases = row.insertCell(2);
        let deaths = row.insertCell(3);
        let new_deaths = row.insertCell(4);
        let serious_critical = row.insertCell(5);
        let recovered_per_country = row.insertCell(6);
        country_name.innerHTML = countries_stat[i].country_name;
        countries_stat[i].cases != "0" ?            cases.innerHTML = countries_stat[i].cases:cases.innerHTML = "-";
        countries_stat[i].new_cases != "0" ?        new_cases.innerHTML = countries_stat[i].new_cases:new_cases.innerHTML = "-";
        countries_stat[i].deaths != "0"?            deaths.innerHTML = countries_stat[i].deaths:deaths.innerHTML = "-";
        countries_stat[i].new_deaths != "0" ?       new_deaths.innerHTML = countries_stat[i].new_deaths:new_deaths.innerHTML = "-";
        countries_stat[i].serious_critical != "0" ? serious_critical.innerHTML = countries_stat[i].serious_critical:serious_critical.innerHTML = "-";
        countries_stat[i].total_recovered != "0" ?  recovered_per_country.innerHTML = countries_stat[i].total_recovered:recovered_per_country.innerHTML = "-";
    }
}))
.catch(err => {
	console.log(err);
});