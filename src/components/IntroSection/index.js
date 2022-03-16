import React from 'react'
import './styles.css'
import DotLoader from "react-spinners/DotLoader";

export const IntroSection = (props) => {

    const {
        isLoading,
        information
    } = props

    return (
        <div className="introSection" >

            {isLoading ? <div style={{ height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <DotLoader color={"#38a5db"} loading={isLoading} size={50} />
            </div> :
                <>
                    <h1 className="introSectionText" >
                        {information?.information}
                    </h1>

                    <p>
                        {information?.informationBody}
                    </p>
                </>
            }
        </div>
    )
}