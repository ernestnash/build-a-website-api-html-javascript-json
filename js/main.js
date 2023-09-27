const url = 'http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json'

async function getData(){
    const response = fetch(url);
    const data = (await response).json()
    console.log(data)
}

getData()