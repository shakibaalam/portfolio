import React from 'react';
import Banner from './Banner';
import Education from './Education';
import Footer from './Footer';
import ProjectSection from './ProjectSection';
import Skill from './Skill';


const Home = () => {
    return (
        <div className='font-serif'>
            <Banner></Banner>
            <Skill></Skill>
            <ProjectSection></ProjectSection>
            <Education></Education>
            <Footer></Footer>
        </div>
    );
};

export default Home;