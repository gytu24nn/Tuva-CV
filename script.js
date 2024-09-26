/*Här deklarerar jag knapparna som jag skapat i HTML*/
let BtnOmMig = document.getElementById("OmMig");
let BtnArbetslivserfarenheter = document.getElementById("Arbetslivserfarenheter"); 

/*Här deklarerar jag sidorna Om mig och arbetslivserfarenher.*/
const omMigPage = document.querySelector(".omMigSida");
const arbetslivserfarenheterPage = document.querySelector(".ArbetslivserfarenheterSida");

/*Här deklarerar jag tillbaka knappar.*/
const startBtnOmMig = document.querySelector(".Start");
const startBtnArbetserfarenhet = document.querySelector(".StartKnappArbetserfarenhet");

/*Här deklarerar jag klockan paragrafen där det står vad jag kan för att jag ska kunna lägga till och 
tabort hide så att de inte syns när användaren vill se om mig sidan tex och sen när man vill tillbaka så ska de synas igen. */
let clock = document.querySelector(".clock");
let paragrafVadJagKan = document.querySelector(".paragrafVadJagKan");
let githubRepos = document.getElementById("githubRepos")

fetch("https://api.github.com/users/gytu24nn/repos")
.then(function(response) {
    return response.json();
})
.then(function(githubReposData) {
    
        console.log("Github API: ", githubReposData );

        githubReposData.forEach((repo) => {
            console.log(repo)
            let repoDiv = document.createElement('a')
            repoDiv.classList.add('repoClass')

            repoDiv.innerHTML = repo.name
            repoDiv.href = repo.html_url

            githubRepos.appendChild(repoDiv)
        })
   
   
})

/*Här får jag en bild att ändras till en annan bild med hjälp av att först deklarera en variabel från HTML med id.
Sen använder jag mig av en switch sats som kontrollerar vilket bild det är och byter ut den till andra. */
let imageElement = document.getElementById("bildpåmig");
let source = "Tidning";
imageElement.addEventListener("click", function swapImage() {
    switch (source) {
        case "Tidning":
            imageElement.src = "/bilder/studentbildpåmig.jpg";
            source = "student";
            break;
        case "student":
            imageElement.src = "/bilder/bildpåmigtidning.jpg";
            source = "Tidning";
            break;
    }

})
/*Detta är knapparna som jag använder för att visa det olika grejerna som ska visas och de som inte ska visas lägger koden till hide på.*/
BtnOmMig.addEventListener("click", () => {
    omMigPage.classList.remove("hide");
    arbetslivserfarenheterPage.classList.add("hide");
    clock.classList.add("hide");
    paragrafVadJagKan.classList.add("hide");
    githubRepos.classList.add("hide");
    
})
BtnArbetslivserfarenheter.addEventListener("click", () => {
    arbetslivserfarenheterPage.classList.remove("hide");
    omMigPage.classList.add("hide");
    clock.classList.add("hide");
    paragrafVadJagKan.classList.add("hide");
    githubRepos.classList.add("hide");
})
startBtnOmMig.addEventListener("click", () => {
    arbetslivserfarenheterPage.classList.add("hide");
    omMigPage.classList.add("hide");
    clock.classList.remove("hide");
    paragrafVadJagKan.classList.remove("hide");
    githubRepos.classList.remove("hide");
})
startBtnArbetserfarenhet.addEventListener("click", () => {
    arbetslivserfarenheterPage.classList.add("hide");
    omMigPage.classList.add("hide");
    clock.classList.remove("hide");
    paragrafVadJagKan.classList.remove("hide");
    githubRepos.classList.remove("hide");
})

/*Här är koden för klockan och först hämtar jag elementen med id från HTML och sen med javascript så får jag klockan att skrivas ut 
med rätt tidzon. */
setInterval(() => {
    let currentTime = new Date(); 

    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();
},1000)
