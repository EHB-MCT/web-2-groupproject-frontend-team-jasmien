async function loadingHeroku(){
    let url = `https://team-jasmien.herokuapp.com/api/allChallenges`;
    let resp = await fetch(url);
    return await resp.json()
}

window.onload = function(){
    console.log('Loaded!');

    async function run(){
        let data = await loadingHeroku()
        console.log(data)
    }

    run();
}