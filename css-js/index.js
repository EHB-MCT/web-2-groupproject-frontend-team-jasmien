let submitForm = document.getElementById("form");
submitForm.addEventListener("submit", e => {
    e.preventDefault();
  
    let inputData = ({
      "name": document.getElementById("challenge").value,
      "points": document.getElementById("points").value,
      "course": document.getElementById("course").value,
      "session": document.getElementById("session").value
    });
  
    fetch("https://team-jasmien.herokuapp.com/saveChallenge", {
        method: 'POST',
        body: inputData
    })
      .then(response => response.json())
      .then(data2Post=> console.log(dataPost))
      .catch(error => console.log('error', error));
})
  


async function loadingHeroku() {
    let url = `https://team-jasmien.herokuapp.com/allChallenges`;
    let resp = await fetch(url);
    return await resp.json()
}

window.onload = function () {
    console.log('Loaded!');

    async function run() {
        let dataGet = await loadingHeroku()
        console.log(dataGet)

        dataGet.forEach(element => {
            let htmlString = `
                <div id="containerItem">
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