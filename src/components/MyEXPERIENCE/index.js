import React from 'react';
import Position from './Position';
import './styles.css';
import { UseMyExperience } from './useMyExperience';

export const MyEXPERIENCE = () => {
    
    const { myExperiences } = UseMyExperience()

    return (
        <div className="MyExContainer" >

            <h2 className="MyExText" >My Experience</h2>

            <h5 className="exinfo" ><em> 3 Years of Software industry</em></h5>

            <div className="ExampleTextSepratore" ></div>

            <div style={{ marginTop: 10 }} >
                {myExperiences.map((onePos, index) => (
                    <Position key={String(index)} {...onePos} />
                ))}
            </div>


        </div>
    )
}