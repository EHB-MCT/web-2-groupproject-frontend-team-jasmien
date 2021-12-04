window.onload = function(){
    console.log('Loaded!');
}

async function loadingHeroku(){
    let response = await fetch('https://team-jasmien.herokuapp.com/');
        return await response.json();
}