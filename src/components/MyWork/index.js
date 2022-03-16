import React from 'react';
import OneWork from './oneWork';
import './styles.css';
import { UseMyWork } from './useMyWork';


export const MyWork = () => {
    const { projects, isLoading } = UseMyWork()

    if (isLoading) {
        return null
    }

    return (
        <div>

            <div className="textContaiiner" >
                <p className="MyWorksText" >my works</p>
                <em className="ExampleText" > This is A Example of My Projects </em>
                <div className="ExampleTextSepratore" ></div>
            </div>

            <div className="myWorksImageCntianer" >
                {projects.map((oneWorkItem, indx) => (
                    <OneWork {...oneWorkItem} key={String(indx)} />
                ))}
            </div>


        </div>
    )
}