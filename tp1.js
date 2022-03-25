const key = 'a3732a1074e2403ce364ad6e71eb998cb';
const baseURL = 'https://api.tisseo.fr/v1/lines.json'

const boutonLignes = document.querySelector('#boutonLignes');

function recup(){
        const listeLignes = document.querySelector('#listeLigne');

        fetch('https://api.tisseo.fr/v1/lines.json?key=a3732a1074e2403ce364ad6e71eb998cb')
        .then(response => response.json())
        .then(data => {
            const tabLignes = data.lines.line;
            console.log(tabLignes);
            for(ligneBus of tabLignes){
                listeLignes.innerHTML+= "<li onclick=\"recupArrets("+ligneBus.id+")\">" + ligneBus.name + "</li>"
            }
        })
        .catch(err => console.error(err))
    };

function recupArrets(id){
    const listeLignes = document.querySelector('#listeLigne');

    fetch('https://api.tisseo.fr/v1/stop_points.json?key=a3732a1074e2403ce364ad6e71eb998cb&lineId='+id)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const tabLignes = data.physicalStops.physicalStop;
        console.log(tabLignes);
        listeLignes.innerHTML="";
        for(ligneBus of tabLignes){
            listeLignes.innerHTML+= "<li onclick=\"recupPassages("+ligneBus.id+")\">" + ligneBus.name + "</li>"
        }
    })
    .catch(err => console.error(err))
};


function recupPassages(id){
    const listeLignes = document.querySelector('#listeLigne');

    fetch('https://api.tisseo.fr/v1/stops_schedules.json?key=a3732a1074e2403ce364ad6e71eb998cb&stopPointId='+id)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const tabLignes = data.departures.departure;
        console.log(tabLignes);
        listeLignes.innerHTML="";
        for(i of tabLignes){
            listeLignes.innerHTML+= "<li onclick id=\""+ i.id +"\">" + i.dateTime + "</li>"
        }
    })
    .catch(err => console.error(err))
};






