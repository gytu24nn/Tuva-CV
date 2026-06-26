import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/MenuStyle.css'



export default function Menu() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            <aside className='menu'>
                <h1 className='logoText'>Tuvahilda</h1>
                <div className='middleSection'>
                    <nav>
                        <ul className='socialLinks'>
                            <li><a href="https://github.com/gytu24nn"><i className="fa-brands fa-github"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/tuva-gyllensten-751a5833b/"><i className="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="mailto:tuvagyllensten@gmail.com"><i className="fa-solid fa-envelope"></i></a></li>
                        </ul>
                    </nav>
                    <div className='followMe'>
                        <div className='followMeLine'/>
                        <p className='followMeText'>Follow me</p>
                    </div>
                </div>

                <div className='MenuBtn'>
                    <button className='DarkAndLightModeBtn'>
                        <i className="fa-solid fa-moon"></i>
                    </button>

                    <button className='MenuHamburgarBtn' onClick={() => setMenuOpen(!menuOpen)}>
                        <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </aside>

            <nav className={`slideMenu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Hem</Link></li>                    <li></li>
                    <li><Link to="/projekt" onClick={() => setMenuOpen(false)}>Projekt</Link></li>
                    <li><Link to="/om-mig" onClick={() => setMenuOpen(false)}>Om mig</Link></li>
                    <li><Link to="/tech-stack" onClick={() => setMenuOpen(false)}>Tech stack</Link></li>
                    <li><Link to="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</Link></li>
                </ul>

            </nav>

            {menuOpen && (
                <div className='overlay' onClick={() => setMenuOpen(false)} />
            )}
        </>

        
    );
}