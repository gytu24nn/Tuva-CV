import { useEffect, useState } from "react";
import '../style/TypeWritingBioStyle.css' 

const typeWritingTitles = [
    "Creative Fullstack Web Developer.",
    "Code. Create. Repeat.",
    "Building Modern Web Apps.",
    "Pixels, Passion & Programming.",
    "Fueled by Coffee & C#.",
    "Gamer by Night. Developer by Day."
]


export default function TypeWritingBio() {
    const [titleIndex, setTitleIndex] = useState(0)
    const [displayedText, setDisplayedText] = useState("")
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    
    const currentTitle = typeWritingTitles[titleIndex];

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        
        if(!isDeleting) {
            if(charIndex < currentTitle.length) {
                timeout = setTimeout(() => {
                    setCharIndex(prev => prev + 1);
                }, 100);

            } 
            else {
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, 2000);
            }
        } else {
            if(charIndex > 0 ) {
                timeout = setTimeout(() => {
                    setCharIndex(prev => prev - 1)
                }, 50);
            } else {
                setIsDeleting(false)
                setTitleIndex(prev => (prev + 1) % typeWritingTitles.length);
            }

            return () => clearTimeout(timeout);
        }
    }, [charIndex, isDeleting, currentTitle])

    return(
        <>
            <div className="TypeWrittingBio">
                <div className="HeaderDiv">
                    <h1 className="Header"> Hej! Jag heter{" "} <span className="HeaderWithColor">Tuva Gyllensten</span></h1>
                </div>

                <p className="subTitle">
                    {currentTitle.slice(0, charIndex)}
                    <span className="Cursor">|</span>
                </p>
            </div>
        
        </>
    )
}