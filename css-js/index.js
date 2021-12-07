window.onload = function () {
    console.log('Loaded!');
    document.getElementById('form').addEventListener('submit', e => {
        e.preventDefault();
        form();
    })
}

async function loadingHeroku() {
    let url = `https://team-jasmien.herokuapp.com/allChallenges`;
    let resp = await fetch(url);
    return await resp.json()
}

async function run() {
    let dataGet = await loadingHeroku()
    console.log(dataGet)
    dataGet.forEach(element => {
        console.log(element);
        let container = document.getElementById('listBlock');
        let htmlString = `
            <h1 id="titleListBlock">Challenge</h1>
            <div id="containerList">
                <h2>Name: ${element.name}</h2>
                <h2>Points: ${element.points}</h2>
                <h2>Course: ${element.course}</h2>
                <h2>Session: ${element.sessions}</h2>
                <hr id="hr">            
            </div>`;
        console.log(htmlString)
        container.insertAdjacentHTML('beforeend', htmlString);  
    })
      
}

function form(){
    let object = {
        'name': document.getElementById('challenge').value,
        'points': document.getElementById('points').value,
        'course': document.getElementById('course').value,
        'session': document.getElementById('session').value
    }
    console.log(object.name);

    fetch("https://team-jasmien.herokuapp.com/saveChallenge", {
        method: 'POST',
        body: JSON.stringify({object}),
    })    
    .then(response => response.json())
    .then(dataPost=> {
        console.log("Succes Post", dataPost)
    })
    run()       
}
