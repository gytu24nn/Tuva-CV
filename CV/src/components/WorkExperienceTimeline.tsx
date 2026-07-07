import { useEffect, useState } from "react"

interface WorkExperience {
    period: string,
    title: string,
    emplyer: string,
    location: string, 
    description: string
}

export default function WorkExperienceTimeline() {
    const [WorkExperience, setWorkExperience] = useState<WorkExperience[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchWorkExperience = async () => {
            try {
                const response = await fetch('/Data/WorkExperience.json')
                const data = await response.json()
                setWorkExperience(data)
            } catch (error) {
                console.error("Something went wrong: ", error)
            } finally {
                setLoading(false)
            }
        }

    }, [])

    return(
        <div>

        </div>
    )
}