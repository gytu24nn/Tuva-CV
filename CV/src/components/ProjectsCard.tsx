interface ProjectsCardProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
    img: string[];
    inProgress?: boolean;
}

export default function ProjectsCard({ title, description, tags, link, img, inProgress }: ProjectsCardProps) {
    return (
        <div className="projectCard">
            <div className="projectCardContent">
                <div className="projectImage">
                    {img && img.length > 0 ? (
                        <img src={img[0]} alt={title} />
                    ) : (
                        <div className="imagePlaceholder">Ingen bild</div>
                    )}
                </div>
                <div className="projectInfo">
                    <div className="projectTitleContainer">
                        <h3>{title}</h3>
                        {inProgress && <span className="inProgressBadge">In Progress</span>}
                    </div>
                    <p className="projectDescription">{description}</p>
                    <div className="projectTags">
                        {tags.map((tag) => (
                            <span key={tag} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer" className="projectLink">
                <i className="fa-solid fa-arrow-right"></i>
            </a>
        </div>
    );
}
