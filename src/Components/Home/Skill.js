import React from 'react';
import SkillItem from './SkillItem';

const Skill = () => {
    const frontendSkills = [
        {
            title: 'HTML',
            percentage: '90'
        },
        {
            title: 'CSS',
            percentage: '90'
        },
        {
            title: 'JavaScript',
            percentage: '80'
        },
        {
            title: 'React.Js',
            percentage: '90'
        },
    ]
    const backendSkills = [
        {
            title: 'Node.js',
            percentage: '70'
        },
        {
            title: 'Express.js',
            percentage: '50'
        },
        {
            title: 'MongoDB',
            percentage: '80'
        },
        {
            title: 'Stripe.Js',
            percentage: '50'
        },
    ]

    return (
        <div className='mb-20 px-6'>
            <h2 className='text-3xl text-primary font-semibold lg:mx-32'>My Skills <hr /></h2>
            <div className='lg:mx-32 my-10'>
                <div className='grid lg:grid-cols-2 grid-cols-1'>
                    <div className="mx-auto">
                        {
                            frontendSkills.map((item, index) => (
                                <SkillItem title={item.title} key={index} percentage={item.percentage}></SkillItem>
                            ))
                        }
                    </div>
                    <div className=" mx-auto">
                        {
                            backendSkills.map((item, index) => (
                                <SkillItem title={item.title} key={index} percentage={item.percentage}></SkillItem>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;