import '../style/MainPictureSidewaysStyle.css'

export default function MainPictureSideways() {
    return (
        <div className='pictureContainer'>
            <img className="MainPicture" src="/SidewayPictureTuva.png" alt="Bild på Tuva från sidan vid dator i svartvit" />

            <div className='welcomeBox'>
                <p>
                    Välkommen till min protofilo! 
                    Här samlar jag information och länkar om mina projekt. 
                    Hoppas du gillar det  😊
                </p>
            </div>
        </div>
    )
}

