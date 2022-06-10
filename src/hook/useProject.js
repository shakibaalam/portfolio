import { useEffect, useState } from "react"

const useProject = id => {
    const [project, setProject] = useState({});
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const p = data.find(d => d.id == id)
                setProject(p);
            })
    }, [id])
    return [project];
}

export default useProject;