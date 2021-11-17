import React from 'react';


export const Discussion:React.FC<any> = (subject:any) => {
    return(
        <div className="subject-container">
            <div className="subject-profile">
                <img className="subject-image" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"/>
                <h3 className="subject-username">Username</h3>
            </div>

            <div className="Subject-content">
                <p>This is a subject</p>
            </div>
        </div>
    );
}