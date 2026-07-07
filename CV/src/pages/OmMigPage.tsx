

export default function OmMigPage() {
    return (
        <div className="omMigContainer">
            <div className="omMigHeader">            
                <h1>
                    Om <span>mig</span>
                </h1>
                <p>
                    Hej! kul att du hittade hit! <br />
                    Jag heter Tuva Gyllensten och har precis tagit examen från <br />
                    Webbutveckling .NET på Campus Värnamo. Jag brinner för <br />
                    programmering och design då jag är en väldigt kreativ person.
                </p>

                <button>Ladda ner CV</button>
            </div>

            <div className="liteMerOmMigContatiner">
                <h1>Lite mer om mig</h1>

                <p>
                    Utöver programmering och design håller jag på med <br />
                    luftgevärsskytte, gaming målning, bakning och umgås med familj <br /> 
                    och vänner. <br /> <br />

                    Mitt intresse för programmering väcktes 2024 när jag läste <br />
                    Porgrammering 1. Det ledde till att jag började studera <br /> 
                    Webbutveckling .NET på Campus Värnamo, där jag tog examen <br /> 
                    i maj 2026. <br /> <br />

                    Det jag gillar mest med programmering är möjligheten att skapa, <br />
                    lösa problem och se ett projekt växa fram från idé till färdig lösning. 
                </p>

                <img className="PictureTuva" src="/pictureNewPapersmall color.png" alt="Bild på Tuva framifrån i färg." />
            </div>

            <div className="erfarenhetContainer">
                <div className="utbildningErfarenhetContatiner">
                    <h1 className="utbildningErfarenhetHeader"> 
                        <i className="fa-solid fa-graduation-cap"></i>
                        Utbildning
                    </h1>
                </div>

                <div className="arbetslivserfarenhetContainer">
                    <h1 className="arbetslivserfarenhetHeader">
                        <i className="fa-solid fa-briefcase"></i>
                        Arbetslivserfarenhet
                    </h1>
                </div>
            </div>
            
        </div>
    )
}