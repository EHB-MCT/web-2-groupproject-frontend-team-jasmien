"use strict";

window.onload = function () {
    run()
    console.log('Loaded!');
    document.getElementById('form').addEventListener('submit', e => {
        e.preventDefault();
        let nameInput = document.getElementById('challenge').value;
        let pointsInput = document.getElementById('points').value;
        let courseInput = document.getElementById('course').value;
        let sessionInput = document.getElementById('session').value;
        form(nameInput, pointsInput, courseInput, sessionInput);
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
        let htmlString = `
            <h1 id="titleListBlock">Challenge</h1>
            <div id="containerList">
                <h2>Name: ${element.name}</h2>
                <h2>Points: ${element.points}</h2>
                <h2>Course: ${element.course}</h2>
                <h2>Session: ${element.sessions}</h2>
                <hr id="hr">            
            </div>`;
        document.getElementById("listChallenge").insertAdjacentHTML = htmlString;
    })
      
}

function form(nameInput, pointsInput, courseInput, sessionInput){
    let header = new Headers();
    header.append("Content-Type", "application/json");

    fetch("https://team-jasmien.herokuapp.com/saveChallenge", {
        method: 'POST',
        headers: header,                        // laat weten welke taal hij moet hebben en in welke taal hij communiceert
        body: JSON.stringify({
            name: nameInput,
            points: pointsInput,
            course: courseInput,
            session: sessionInput
        }),
    })    
    .then(response => response.json())
    .then(dataPost=> {
        console.log("Succes Post", dataPost)
        run()
    })
}
