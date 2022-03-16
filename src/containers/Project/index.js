import React from 'react'
import './styles.css'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

function Project(props) {

    const {
        location: {
            data: {
                id,
                images,
                projectName
            }
        }
    } = props

    const originalImages = images.map(item => ({
        original: item,
        thumbnail: item,
    }))

    return (
        <ImageGallery
            items={originalImages}
            showPlayButton
            disableKeyDown
            useBrowserFullscreen
            lazyLoad
        />
    )
}

export { Project }