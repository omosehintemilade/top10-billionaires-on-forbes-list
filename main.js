// alert('hello')
let tableBody = document.querySelector('.table-body')

async function forbesList() {
    let response = await fetch('https://forbes400.herokuapp.com/api/forbes400?limit=10')
    data = await response.json()
    populateHtml(data)
}
forbesList()

function thousands_separators(num) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
}


function populateHtml(data) {
    tableBody.innerHTML = data.map(
        data => {
            let networth = thousands_separators(Math.round(data.finalWorth))
            return `
                <tr>
                <td><img src="be strong.jpg" alt="" /></td>
                <td class="name">${data.personName}</td>
                <td class="networth">$${networth} billion</td>
                <td class="industry">${data.industries[0]}</td>
                <td class="nationality">${data.countryOfCitizenship}</td>
                <td class="s-o-w">${data.source}</td>
            </tr>
         `
        }
    ).join('')
}