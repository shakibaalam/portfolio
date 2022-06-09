import React from 'react';

const SkillItem = ({ title, percentage }) => {
    console.log(percentage);
    return (
        <div className="">
            <div className="">
                <h6>{title}</h6>
                <progress class="progress w-56 progress-secondary" value={percentage} max="100"></progress><span>{percentage}%</span>
            </div>
        </div>
    );
};

export default SkillItem;