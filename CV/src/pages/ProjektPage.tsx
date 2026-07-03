
import { useState, useEffect } from 'react';
import ProjectsCard from '../components/ProjectsCard';
import '../style/ProjektPageStyle.css';

interface Project {
    title: string;
    description: string;
    img: string[];
    link: string;
    featured: boolean;
    inProgress: boolean;
    tags: string[];
    buildWith: string[];
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
                setProjects(data);
                setFilteredProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const handleFilter = (filter: string) => {
        setSelectedFilter(filter);

        if (filter === 'Alla') {
            setFilteredProjects(projects);
        } else if (filter === 'Skola') {
            setFilteredProjects(projects.filter((p) => p.tags.includes('Skola')));
        } else if (filter === 'Privata') {
            setFilteredProjects(projects.filter((p) => p.tags.includes('Privata')));
        } else {
            setFilteredProjects(projects.filter((p) => p.tags.includes(filter)));
        }
    };

    // Get unique filter options from tags
    const getFilterOptions = () => {
        const filters = new Set<string>();
        projects.forEach((p) => {
            p.tags.forEach((tag) => {
                if (tag === 'Skola' || tag === 'Privata' || tag === 'C#' || tag === 'React') {
                    filters.add(tag);
                }
            });
        });
        return ['Alla', ...Array.from(filters).sort()];
    };

    return (
        <div className="projektContainer">
            <div className="projektHeader">
                <h1>
                    Mina <span>projekt</span>
                </h1>
                <p>Här är några av projekten jag har gjort. Finns på Github!</p>
            </div>

            <div className="filterButtons">
                {getFilterOptions().map((filter) => (
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
                <p>Laddar projekt...</p>
            ) : filteredProjects.length > 0 ? (
                <div className="projektGrid">
                    {filteredProjects.map((project) => (
                        <ProjectsCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            link={project.link}
                            img={project.img}
                            inProgress={project.inProgress}
                        />
                    ))}
                </div>
            ) : (
                <div className="noProjects">
                    <p>Inga projekt hittades för det valda filtret.</p>
                </div>
            )}
        </div>
    );
}