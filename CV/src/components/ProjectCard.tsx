import '../style/ProjectPageStyle.css'

interface ProjectsCardProps {
    title: string,
    description: string,
    img: string[],
    link: string,
    inProgress: boolean,
    tags: string[],
    buildWith: string[]
}

export default function ProjectCard({title, description, img, link, inProgress, buildWith}: ProjectsCardProps) {
    return(
        <div className="projectCard">
            <div className="projectCardContent">
                <div className="projectImage">
                    {img && img.length > 0 ? (
                        <img src={img[0]} alt={title}/>
                    ) : (
                        <div className="imagePlaceholder">
                            Ingen bild
                        </div>
                    )}
                </div>

                <div className="projectInfo">
                    <div className="projectTitleContainer">
                        <h3>{title}</h3>
                        {inProgress && <span className="inProgressBadge ">In Progress</span>}
                    </div>

                    <p className="projectDescription">{description}</p>

                    <div className="projectBuildWith">
                        {buildWith.map(buildWith => (
                            <span key={buildWith} className="buildWith">
                                {buildWith}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer" className="projectLink">
                <i className="fa-solid fa-arrow-right"></i>
            </a>
        </div>
    )
}