async function loadingHeroku() {
    let url = `https://team-jasmien.herokuapp.com/allChallenges`;
    let resp = await fetch(url);
    return await resp.json()
}

window.onload = function () {
    console.log('Loaded!');

    async function run() {
        let data = await loadingHeroku()
        console.log(data)

        data.forEach(element => {
            let htmlString = `
            <div id="containerItem">
            <h2>Id: ${element._id}</h2>
            <h2>Name: ${element.name}</h2>
            <h2>Points: ${element.points}</h2>
            <h2>Course: ${element.course}</h2>
            <h2>Session: ${element.sessions}</h2>
            <hr id="hr">
            </div>`;
            
            console.log(htmlString)

            let container = document.getElementById('containerList');
            container.insertAdjacentHTML('beforeend', htmlString);
        });
        
    }

    run();
}