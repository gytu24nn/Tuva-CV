import '../style/MenuStyle.css'



export default function Menu() {
    return (
        <aside className='menu'>
            <h1 className='logoText'>Tuvahilda</h1>
            <nav>
                <ul className='socialLinks'>
                    <li><a href="https://github.com/gytu24nn"><i className="fa-brands fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/tuva-gyllensten-751a5833b/"><i className="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="mailto:tuvagyllensten@gmail.com"><i className="fa-solid fa-envelope"></i></a></li>
                </ul>
            </nav>
            <div >
                <div className='followMeLine'/>
                <p className='followMeText'>Follow me</p>
            </div>

            <div className='MenuBtn'>
                <button className='DarkAndLightModeBtn'>
                    <i className="fa-solid fa-moon"></i>
                </button>

                <button className='MenuHamburgarBtn'>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
        </aside>
        
    );
}