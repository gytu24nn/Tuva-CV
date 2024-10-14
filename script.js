/*Här deklarerar jag knapparna som jag skapat i HTML*/
let aboutMebtn = document.getElementById("aboutMeBtn");
let workExperiencesBtn = document.getElementById("workExperiencesBtn"); 

/*Här deklarerar jag sidorna Om mig och arbetslivserfarenher.*/
const aboutMePage = document.querySelector(".aboutMePage");
const workExperiencePage = document.querySelector(".workExperiencePage");

/*Här deklarerar jag tillbaka knappar.*/
const startAboutMeBtn = document.querySelector(".startAboutMeBtn");
const StartWorkExperienceBtn = document.querySelector(".StartWorkExperienceBtn");

/*Här deklarerar jag klockan paragrafen där det står vad jag kan för att jag ska kunna lägga till och 
tabort hide så att de inte syns när användaren vill se om mig sidan tex och sen när man vill tillbaka så ska de synas igen. */
let clock = document.querySelector(".clock");
let h3Header = document.querySelector(".h3Header");
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
fetch("db.json")
.then(function(response){
    return response.json();
})
.then(function(json){
    json.forEach(work => {
        let listWork = document.getElementById("listWork");
        let li = document.createElement("li");
        li.innerHTML = `${work.workName}`;

        listWork.appendChild(li);
    })
})

/*Detta är knapparna som jag använder för att visa det olika grejerna som ska visas och de som inte ska visas lägger koden till hide på.*/
aboutMebtn.addEventListener("click", () => {
    workExperiencePage.classList.add("hide");
    aboutMePage.classList.remove("hide");
    clock.classList.add("hide");
    h3Header.classList.add("hide");
    githubRepos.classList.add("hide");
    
})
workExperiencesBtn.addEventListener("click", () => {
    workExperiencePage.classList.remove("hide");
    aboutMePage.classList.add("hide");
    clock.classList.add("hide");
    h3Header.classList.add("hide");
    githubRepos.classList.add("hide");
})
startAboutMeBtn.addEventListener("click", () => {
    workExperiencePage.classList.add("hide");
    aboutMePage.classList.add("hide");
    clock.classList.remove("hide");
    h3Header.classList.remove("hide");
    githubRepos.classList.remove("hide");
})
StartWorkExperienceBtn.addEventListener("click", () => {
    workExperiencePage.classList.add("hide");
    aboutMePage.classList.add("hide");
    clock.classList.remove("hide");
    h3Header.classList.remove("hide");
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
