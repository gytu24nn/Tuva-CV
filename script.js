/*Här deklarerar jag knapparna som jag skapat i HTML*/
let BtnOmMig = document.getElementById("OmMig");
let BtnArbetslivserfarenheter = document.getElementById("Arbetslivserfarenheter"); 

/*Här deklarerar jag sidorna Om mig och arbetslivserfarenher.*/
const omMigPage = document.querySelector(".omMigSida");
const arbetslivserfarenheterPage = document.querySelector(".ArbetslivserfarenheterSida");
const startBtnOmMig = document.querySelector(".Start");
const startBtnArbetserfarenhet = document.querySelector(".StartKnappArbetserfarenhet");

/*Här får jag en bild att ändras till en annan bild med hjälp av att först deklarera en variabel från HTML med id */
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
BtnOmMig.addEventListener("click", () => {
    omMigPage.classList.remove("hide");
    arbetslivserfarenheterPage.classList.add("hide");
})
BtnArbetslivserfarenheter.addEventListener("click", () => {
    arbetslivserfarenheterPage.classList.remove("hide");
    omMigPage.classList.add("hide");
})
startBtnOmMig.addEventListener("click", () => {
    arbetslivserfarenheterPage.classList.add("hide");
    omMigPage.classList.add("hide");
})
startBtnArbets.addEventListener("click", () => {
    arbetslivserfarenheterPage.classList.add("hide");
    omMigPage.classList.add("hide");
})