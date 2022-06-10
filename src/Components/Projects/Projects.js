import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProjects from '../../hook/useProjects';
import { FaHeart } from 'react-icons/fa';

const Projects = () => {
    const [projects] = useProjects();
    // console.log(projects[0]);
    const navigate = useNavigate();
    const navigateProduct = id => {
        // console.log(id);
        navigate(`/project/${id}`)
    }
    return (
        <div>
            <div className=' flex justify-center'>
                <h1 className=' text-3xl font-bold my-10 text-primary flex justify-items-center'><FaHeart className=' text-red-600 mb-5 mr-2' />Some of My Special Projects <FaHeart className=' text-red-600 mt-4 ml-2' /></h1>
            </div>

            <div className='mt-5 lg:mx-20'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    {
                        projects.map(project =>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className='mx-10 mt-10 rounded'><img src={project.img[0]} alt="project" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{project.name}</h2>
                                    <p>{project.desc}</p>
                                    <div className="card-actions justify-end">
                                        <button onClick={() => navigateProduct(project.id)} className="btn text-white btn-secondary lowercase btn-sm">Watch more</button>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;