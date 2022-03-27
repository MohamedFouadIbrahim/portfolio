import React from 'react';
import { AiFillFileImage, AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { Link } from 'react-router-dom'
import './styles.css';


function ProjectCart(props) {

    const {
        projectName,
        images,
        links: {
            github,
            live
        },
        id,
        index
    } = props

    return (
        <div className='cartContainer' style={{ animationDelay: `${index}s` }}  >
            <img
                className='cartImage'
                src={images[0]}
            />
            <p className='cartName' >
                {projectName}
            </p>

            <div className='iconContainer'>
                <AiOutlineLink
                    size={25}
                    className='LinkIcon'
                    onClick={() => window.open(live, '_blank')?.focus()}
                />
                <AiFillGithub
                    size={25}
                    className='LinkIcon'
                    onClick={() => window.open(github, '_blank')?.focus()}
                />
                <Link
                    to={{
                        pathname: '/Project',
                        data: { ...props }
                    }}
                    className='imagesIcon'
                >
                    <AiFillFileImage
                        size={25}
                        className='LinkIcon'
                    />
                </Link>
            </div>
        </div>
    )
}

export default ProjectCart