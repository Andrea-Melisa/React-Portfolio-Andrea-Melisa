import Project from '../Project'
import dataProjects from '../../dataProjects.json'
import Footer from '../Footer';



const ProjectGallery = () => {

    return (
        <>
            <h1>These are my projects!</h1>
            <p> Click on the button to see the deployed.</p>

            {dataProjects.map(project => (
                <Project key={project.id} project={project} />
            ))}

            <Footer />
        
        
        </>
    )
}

export default ProjectGallery