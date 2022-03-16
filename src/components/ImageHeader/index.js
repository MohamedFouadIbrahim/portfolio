import React from 'react';
import DotLoader from "react-spinners/DotLoader";
import './styles.css';
import { UseImageHeader } from './useImageHeader';

export const ImageHeader = () => {

    const { isLoading, information } = UseImageHeader()

    return (
        <div className="imagedHeaderContainer" >

            <div className="secoundImageHeaderContainer" >

                <div className='loaderContainer'>
                    <DotLoader
                        color={"#38a5db"}
                        loading={isLoading}
                        size={50}
                    />
                </div>

                <h1 className="welcomeText" >
                    {information?.information}
                </h1>
                <p>
                    {information?.informationBody}
                </p>

            </div>
        </div>
    )
}