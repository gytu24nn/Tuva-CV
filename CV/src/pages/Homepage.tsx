import MainPictureSideways from "../components/MainPictureSideways";
import TypeWritingBio from "../components/TypeWritingBio";
import NavigationButtons from "../components/NavigationButtons";
import '../style/HomePageStyle.css'


export default function HomePage() {
    return (
        <div className="hero">
            <div className="leftSide">
                <TypeWritingBio />
                <NavigationButtons />
            </div>

            <div className="rightSide">
                <MainPictureSideways />
            </div>
        </div>
    )
}