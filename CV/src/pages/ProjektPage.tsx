import { useEffect, useState } from "react"
import ProjectCard from "../components/ProjectCard";
import '../style/ProjectPageStyle.css'

interface Project {
    title: string,
    description: string,
    img: string[],
    link: string,
    featured: boolean,
    inProgress: boolean,
    tags: string[],
    buildWith: string[]
}

export default function ProjektPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    const [selectedFilter, setSelectedFilter] = useState('Alla');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/Data/Projects.json');
                const data = await response.json();
                setFilteredProjects(data)
                setProjects(data)
            
            } catch (error) {
                console.error("Someting went wrong: ", error)
            } finally {
                setLoading(false)
            }
        }

        fetchProjects();
    }, [])

    const handleFilter = (filter: string) => {
        setSelectedFilter(filter)

        if(filter === 'Alla') {
            setFilteredProjects(projects)
        } else if (filter === 'Skola') {
            setFilteredProjects(projects.filter(x => x.tags.includes('Skola')))
        } else if (filter === 'Privata') {
            setFilteredProjects(projects.filter(x => x.tags.includes('Privata')))
        } else {
            setFilteredProjects(projects.filter(x => x.tags.includes(filter)))
        }
    };

    const getFilterOptions = () => {
        // Set fungerar som en array men tillåter inte dubbletter. 
        const filters = new Set<string>()

        projects.forEach(p => {
            p.tags.forEach(tag => {
                filters.add(tag);
            })
        });

        return ['Alla', ...Array.from(filters).sort()];

    }

    return (
        <div className="projektContainer">
            <div className="projektHeader">
                <h1>
                    Mina <span>projekt</span>
                </h1>
                <p>Här är några av projekten jag har gjort i skolan och privat!</p>
            </div>

            <div className="filterButtons">
                {getFilterOptions().map(filter => (
                    <button 
                        key={filter} 
                        className={`filterBtn ${selectedFilter === filter ? 'active' : ''}`} 
                        onClick={() => handleFilter(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            
           {loading ? (
                <p>Laddar projekt</p>
           ) : filteredProjects.length > 0 ? (
                <div className="projektGrid">
                    {filteredProjects.map(p => (
                        <ProjectCard 
                            key={p.title}
                            title={p.title}
                            description={p.description}
                            img={p.img}
                            link={p.link}
                            inProgress={p.inProgress}
                            tags={p.tags}
                            buildWith={p.buildWith}
                        />
                    ))}
                </div>
           ) : (
                <div className="noProjects">
                    <p>Inga projekt hittades tyvärr, prova gärna igen senare!</p>
                </div>
           )} 
        </div>
    )
}