import React from 'react';
import './styles.css';

const Position = (props) => {

    const {
        companyName,
        role,
        from,
        to
    } = props

    return (
        <div className="positionContainer">

            <p className="positionCopanyName" >
                {companyName[0]}
            </p>

            <div>

                <h4 className="media-heading">{companyName}</h4>

                <h5 className="fromTo" >{`${from} - ${to}`}</h5>

                <p className="role" >
                    {role}
                </p>


            </div>
        </div>
    )
}

export default Position