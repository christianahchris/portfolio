// document.querySelector('.switch').addEventListener('click', dark)

// function dark(){
//     document.body.classList.toggle('dar')
// }

// document.getElementsByClassName('switch').onclick = makeItDark

// function makeItDark() {
//     document.querySelector('switch').style.backgroundCOLOR = 'black'
//

//  Mode.onclick = function(){
//     document.body.classList.toggle('dark');
// }


// save to localstorage
let darkMode = localStorage.getItem("darkMode");
const switchElement = document.querySelector('.switch');

// switch to dark
const switchToDark = () => {
    document.body.classList.add('dark')
    localStorage.setItem('darkMode', "darkEnabled")
}

// switch to light 
const switchToLight = () => {
    document.body.classList.remove('dark')
    localStorage.setItem('darkMode', null)
}

// Enable localStorage config
if (darkMode === "darkEnabled") {
    switchToDark();
}

// click event
switchElement.addEventListener('click', () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "darkEnabled") {
        switchToDark();
        console.log(darkMode);
    } else {
        switchToLight();
    }
})
