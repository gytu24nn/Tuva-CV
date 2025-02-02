const AbouteMeDropDownBtn = document.getElementById("AbouteMeDropDownBtn");
const dropdownIcon = document.getElementById('dropdownIcon');
const repoDropdownBtn = document.getElementById('repoDropdownBtn');
const repoList = document.getElementById('repoList');
const repoDropdownIcon = document.getElementById('repoDropdownIcon');

//-----------Header skriv ut funktion-----------
document.addEventListener("DOMContentLoaded", () => {
    const TextThatsTypesOut = "Hi, i'm Tuva Gyllensten. Welcome to my portfolio! :D";
    const typeWriterTextElement = document.getElementById("typewriterHeader");
    let index = 0;

    function typeLetter() {
        typeWriterTextElement.innerHTML = TextThatsTypesOut.substring(0, index + 1);
        index++;

        if (index < TextThatsTypesOut.length) {
            setTimeout(typeLetter, 100);
        }
    }

    setTimeout(typeLetter, 500);
});

//--------Fetch API Repos public---------------
fetch("https://api.github.com/users/gytu24nn/repos")
    .then((res) => res.json())
    .then((data) => {
        console.log("Github:", data);

        data.forEach(repo => {
            let repositorisCard = document.createElement('div');
            repositorisCard.className = "repo-card";

            const repoName = document.createElement("a");
            repoName.href = repo.html_url;
            repoName.target = "_blank";
            repoName.className = "repo-name";
            repoName.textContent = repo.name;

            repositorisCard.appendChild(repoName);

            repoList.appendChild(repositorisCard);
        });
    });
