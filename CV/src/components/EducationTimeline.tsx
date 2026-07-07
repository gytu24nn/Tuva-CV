import { useEffect, useState } from "react"

interface Education {
    period: string,
    title: string,
    school: string,
    type: string, 
    description: string, 
    modality: string
}

export default function EducationTimeline() {
    const [education, setEducation] = useState<Education[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEducation = async () => {
            try {
                const response = await fetch('/Data/Education.json');
                const data = await response.json();
                setEducation(data)
            } catch (error) {
                console.error("Something went wrong: ", error)
            } finally {
                setLoading(false)
            }
        }

        fetchEducation()
    }, [])

    return(
        <div>

        </div>
    )
}