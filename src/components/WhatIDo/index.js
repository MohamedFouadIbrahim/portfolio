import React from 'react'
import './styles.css'
import image from '../../assets/imgaes/design.jpg'
import WorkDecription from './WorkDescription'

const works = [
    { workText: "Mobile Development", desription: "Using React Native I Build & Design A Mobile Apps", iconType: "Mobile" },
    { workText: "Back End Development", desription: "Using NodeJS I Build & Design An API To Serve Our Front End & Mobile Development", iconType: "Node" },
    { workText: "Front End Development", desription: "Using React I Build A UI For Single Web Pages ", iconType: "React" },
]
export const WhatIDo = () => {
    return (
        <div className="whatIDoContainer" >
            <h2 className="whatIDoText" >
                WHAT I <span> <strong>DO</strong> </span>
            </h2>

            <h5 className="whatIDoDescription" >
                <em>
                    Design And Develop Software
                </em>
            </h5>

            <div className="hr" />
            <div>

            </div>

            <div className="workDecriptionContainer" >

                <img src={image} className="designImage" alt='not' />
                <div style={{ margin: "20px", display:'flex', flexDirection:'column' , justifyContent:'space-evenly' }} >
                    {works.map((work, index) => (
                        <WorkDecription
                            iconType={work.iconType}
                            text={work.workText}
                            desription={work.desription}
                            key={String(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}