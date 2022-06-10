// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Project = () => {
    const { id } = useParams();
    // const [project] = useProject(id);

    const projects = [
        {
            "id": 1,
            "name": "Paintgenix",
            "desc": "We deliver several tools of painting in this website.This site is a single page application where it has home page,blog,dashboard,products,login/signup etc.",
            "img": [
                "https://i.ibb.co/XYtKcfZ/12-1.png",
                "https://i.ibb.co/gZTVWb6/12-3.png",
                "https://i.ibb.co/pjm2pxh/12-4.png",
                "https://i.ibb.co/RHsH54Q/12-5.png",
                "https://i.ibb.co/ZBtGb2c/12-7.png",
                "https://i.ibb.co/gyRrc1F/12-8.png",
                "https://i.ibb.co/WyBCMVP/12-6.png"
            ],
            "client": "https://github.com/shakibaalam/assignment-12",
            "server": "https://github.com/shakibaalam/assignment-12-server",
            "live": "https://assignment-12-f602b.web.app/"
        },
        {
            "id": 2,
            "name": "Grab Grocers",
            "desc": "Here we store some products that can be delivered ,restock,manage and update products quantity and others.",
            "img": [
                "https://i.ibb.co/jH9gZKn/2022-05-26.png",
                "https://i.ibb.co/NSZC6kD/11-5.png",
                "https://i.ibb.co/y4SGmfj/2022-06-10-14.png",
                "https://i.ibb.co/6bMPFfq/11-6.png",
                "https://i.ibb.co/fYWw3vD/11-7.png",
                "https://i.ibb.co/02s3Qjk/11-8.png",
                "https://i.ibb.co/jVZSnBX/2022-06-10-15.png"
            ],
            "client": "https://github.com/shakibaalam/assignment-11-client",
            "server": "https://github.com/shakibaalam/assignment-11-server",
            "live": "https://assignment-11-7321c.web.app/"
        },
        {
            "id": 3,
            "name": "Dream Tour",
            "desc": "This project related with an independent Tourist Servicer",
            "img": [
                "https://i.ibb.co/YQFvh2K/10-1.png",
                "https://i.ibb.co/vjnCHp5/10-2.png",
                "https://i.ibb.co/bLT2hRY/10-3.png"
            ],
            "client": "https://github.com/shakibaalam/assignment-10",
            "live": "https://assignment-10-c4025.web.app/home"
        }
    ]

    const project = projects.find((p) => p.id == id);
    // console.log(project);
    return (
        <div >
            <div className='lg:mx-32'>
                <h2 className='text-3xl text-primary mt-6 mb-3 font-bold'>Project : {project.name}</h2>
                <p>{project.desc}</p>
                <p>To explore more....</p>
                <div className=' text-xl mt-6 mb-10'>
                    <p>Live link : <a className=' text-info' href={project.live}>{project.live}</a></p>
                    <p>Client github : <a className=' text-info' href={project.client}>{project.client}</a></p>
                    <p>Server github : <a className=' text-info' href={project.live}>{project.server}</a></p>
                </div>
            </div>
            <div className='lg:mx-32'>
                <h2 className='text-2xl font-semibold text-secondary text-center my-10'>............ Project Screen-shots ..........</h2>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {
                        project.img.map((i, index) =>
                            <div key={index} className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={i} alt="project" /></figure>

                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Project;