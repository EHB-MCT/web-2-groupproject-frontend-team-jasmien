window.onload = function(){
    console.log('Loaded!');
}
fetch(`https://team-jasmien.herokuapp.com/`)
.then(response => response.json())
.then(data => {
    console.log('Testing Heroku', data)
})