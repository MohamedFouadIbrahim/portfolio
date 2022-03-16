import React from 'react'
import './styles.css'
import {
    ImageHeader,
    Header,
    IntroSection,
    MyEXPERIENCE,
    MyInfo,
    MyWork,
    WhatIDo
} from '../../components'

const Home = () => {

    return (
        <>
            <Header />
            <ImageHeader />
            <IntroSection />
            <WhatIDo />
            <MyInfo />
            <MyWork />
            <MyEXPERIENCE />
        </>
    )
}

export { Home }