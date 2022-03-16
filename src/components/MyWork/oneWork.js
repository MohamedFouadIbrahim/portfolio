import React, { useState } from 'react';
import { BASEURL } from '../../utils/APIKit';
import './styles.css';

const OneWork = (props) => {

    const [showName, setShowName] = useState(false)

    const {
        images: src,
        name,
        link
    } = props

    return (
        <div className="oneWorkContainer" >

            <p className="oneWorkText" style={{ visibility: !showName ? 'hidden' : 'visible' }} >{name}</p>

            <img
                src={`${BASEURL}${src[0]}`}
                height={300}
                width={160}
                onMouseEnter={() => {
                    setShowName(true)
                }}
                onMouseLeave={() => {
                    setShowName(false)
                }}
                onClick={() => {
                    window.open(link)
                }}
                alt="not"
            />

        </div>
    )
}


export default OneWork