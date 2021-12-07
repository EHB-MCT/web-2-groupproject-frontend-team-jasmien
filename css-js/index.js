window.onload = function () {
    console.log('Loaded!');
    loadingHeroku()
    document.getElementById('form').addEventListener('submit', e => {
        e.preventDefault();
        form();
    })
}

function form(){
    const name = document.getElementById('challenge').value;
    const points = document.getElementById('points').value;
    const course = document.getElementById('course').value;
    const session = document.getElementById('session').value
        
    console.log(name, points, course, session);

    fetch("https://team-jasmien.herokuapp.com/saveChallenge", {
        method: 'POST',
        body: JSON.stringify({
            name, 
            points,
            course,
            session
        }),
    })    
    .then(response => response.json())
    .then(dataPost=> {
        console.log("Succes Post", dataPost)
    })
    loadingHeroku()       
}

async function loadingHeroku() {

    await fetch('https://team-jasmien.herokuapp.com/allChallenges')
    .then(response => response.json())
    .then(dataGet => 
        console.log("SuccesGET", dataGet))
        dataGet.forEach(element => {
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
        });
}
