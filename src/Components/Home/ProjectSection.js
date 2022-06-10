import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProjects from '../../hook/useProjects';

const ProjectSection = () => {
    const [projects] = useProjects();
    console.log(projects);
    const navigate = useNavigate();
    const navigateProduct = id => {
        // console.log(id);
        navigate(`/project/${id}`)
    }
    return (
        <div className='lg:mx-32 px-6'>
            <h2 className='text-3xl text-primary font-semibold'>My Projects <hr /></h2>
            <div className='grid lg:grid-cols-3  lg:gap-5 my-10'>
                {
                    projects.map(project => <div class="card w-96 bg-base-100 shadow-xl ">
                        <figure class="px-10 pt-10">
                            <img src={project.img[0]} alt="img" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title font-bold text-purple-500"><a href={project.live}>{project.name}</a></h2>
                            <div className="card-actions justify-end">
                                <button onClick={() => navigateProduct(project.id)} className="btn text-white btn-secondary lowercase btn-sm">Watch more</button>
                            </div>
                        </div>
                    </div>)
                }
                {/* <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://i.ibb.co/NT7WBfw/2022-05-26-6.png" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title font-bold"><a href="https://assignment-10-c4025.web.app/"> Dream Tour</a></h2>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://i.ibb.co/G3sxPkB/2022-05-26-5.png" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title font-bold"><a href="https://sparkling-beignet-a7484c.netlify.app"> Uno Wear</a></h2>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default ProjectSection;