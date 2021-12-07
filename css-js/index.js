window.onload = function () {
    console.log('Loaded!');
    run();
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
    let name = document.getElementById('challenge').value;
    let points = document.getElementById('points').value;
    let course = document.getElementById('course').value;
    let session = document.getElementById('session').value
        
    let object = name, points, course, session;
    console.log(name, points, course, session);

    fetch("https://team-jasmien.herokuapp.com/saveChallenge", {
        method: 'POST',
        body: JSON.stringify({
            object
        }),
    })    
    .then(response => response.json())
    .then(dataPost=> {
        console.log("Succes Post", dataPost)
    })
    loadingHeroku()       
}

// function loadingHeroku() {

//     fetch('https://team-jasmien.herokuapp.com/allChallenges')
//     .then(response => response.json())
//     .then(dataGet => 
//         console.log("SuccesGET", dataGet))
//         let data = dataGet
//         console.log("Test", data);
//         data.forEach(element => {
//             let container = document.getElementById('listBlock');
//             let htmlString = `
//                 <h1 id="titleListBlock">Challenge</h1>
//                 <div id="containerList">
//                     <h2>Name: ${element.name}</h2>
//                     <h2>Points: ${element.points}</h2>
//                     <h2>Course: ${element.course}</h2>
//                     <h2>Session: ${element.sessions}</h2>
//                     <hr id="hr">
//                 </div>`;
            
//             console.log(htmlString)
//             container.insertAdjacentHTML('beforeend', htmlString);
//         });
// }
