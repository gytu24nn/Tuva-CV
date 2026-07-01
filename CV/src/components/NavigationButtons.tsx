import { Link } from 'react-router-dom';
import '../style/NavigationButtonsStyle.css'

export default function NavigationButtons() {
    return (
        <div className='navigationOptions'>
            <ul>
                <li>
                    <Link to="/projekt">Projekt</Link>
                </li>
                <li>
                    <Link to="/om-mig">Om mig</Link>
                </li>
                <li>
                    <Link to="/tech-stack">Tech stack</Link>
                </li>
                <li>
                    <Link to="/kontakt">Kontakt</Link>
                </li>
            </ul>
        </div>
    )
}