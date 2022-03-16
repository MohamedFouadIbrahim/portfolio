import React, { useEffect, useState } from 'react'
import './styles.css'
import Couponak1 from '../../assets/imgaes/Couponak/1.webp'
import Couponak2 from '../../assets/imgaes/Couponak/2.webp'
import Couponak3 from '../../assets/imgaes/Couponak/3.webp'
import Couponak4 from '../../assets/imgaes/Couponak/4.webp'
import Couponak5 from '../../assets/imgaes/Couponak/5.webp'
import Couponak6 from '../../assets/imgaes/Couponak/6.webp'
import Couponak7 from '../../assets/imgaes/Couponak/7.webp'
import Couponak8 from '../../assets/imgaes/Couponak/8.webp'

import Byoty1 from '../../assets/imgaes/Byoty/1.webp'
import Byoty2 from '../../assets/imgaes/Byoty/2.webp'
import Byoty3 from '../../assets/imgaes/Byoty/3.webp'
import Byoty4 from '../../assets/imgaes/Byoty/4.webp'
import Byoty5 from '../../assets/imgaes/Byoty/5.webp'
import Byoty6 from '../../assets/imgaes/Byoty/6.webp'

import Discountatt1 from '../../assets/imgaes/Discountatt/1.webp'
import Discountatt2 from '../../assets/imgaes/Discountatt/2.webp'
import Discountatt3 from '../../assets/imgaes/Discountatt/3.webp'
import Discountatt4 from '../../assets/imgaes/Discountatt/4.webp'

import FreshJo1 from '../../assets/imgaes/freshjo/1.webp'
import FreshJo2 from '../../assets/imgaes/freshjo/2.webp'
import FreshJo3 from '../../assets/imgaes/freshjo/3.webp'
import FreshJo4 from '../../assets/imgaes/freshjo/4.webp'

import LEOMARKA1 from '../../assets/imgaes/LEOMARKA/1.webp'
import LEOMARKA2 from '../../assets/imgaes/LEOMARKA/2.webp'
import LEOMARKA3 from '../../assets/imgaes/LEOMARKA/3.webp'
import LEOMARKA4 from '../../assets/imgaes/LEOMARKA/4.webp'
import LEOMARKA5 from '../../assets/imgaes/LEOMARKA/5.webp'
import LEOMARKA6 from '../../assets/imgaes/LEOMARKA/6.webp'

import Mobigift1 from '../../assets/imgaes/Mobigift/1.webp'
import Mobigift2 from '../../assets/imgaes/Mobigift/2.webp'
import Mobigift3 from '../../assets/imgaes/Mobigift/3.webp'
import Mobigift4 from '../../assets/imgaes/Mobigift/4.webp'
import Mobigift5 from '../../assets/imgaes/Mobigift/5.webp'

import MobiShop1 from '../../assets/imgaes/MobiShop/1.webp'
import MobiShop2 from '../../assets/imgaes/MobiShop/2.webp'
import MobiShop3 from '../../assets/imgaes/MobiShop/3.webp'
import MobiShop4 from '../../assets/imgaes/MobiShop/4.webp'
import MobiShop5 from '../../assets/imgaes/MobiShop/5.webp'

import SheCook1 from '../../assets/imgaes/SheCook/1.webp'
import SheCook2 from '../../assets/imgaes/SheCook/2.webp'
import SheCook3 from '../../assets/imgaes/SheCook/3.webp'
import SheCook4 from '../../assets/imgaes/SheCook/4.webp'
import SheCook5 from '../../assets/imgaes/SheCook/5.webp'
import SheCook6 from '../../assets/imgaes/SheCook/6.webp'

import Zabehaty1 from '../../assets/imgaes/Zabehaty/1.webp'
import Zabehaty2 from '../../assets/imgaes/Zabehaty/2.webp'
import Zabehaty3 from '../../assets/imgaes/Zabehaty/3.webp'
import Zabehaty4 from '../../assets/imgaes/Zabehaty/4.webp'
import Zabehaty5 from '../../assets/imgaes/Zabehaty/5.webp'

import SaraSeaFood1 from '../../assets/imgaes/saraseafood/1.jpeg'
import SaraSeaFood2 from '../../assets/imgaes/saraseafood/2.jpeg'
import SaraSeaFood3 from '../../assets/imgaes/saraseafood/3.jpeg'
import SaraSeaFood4 from '../../assets/imgaes/saraseafood/4.jpeg'
import SaraSeaFood5 from '../../assets/imgaes/saraseafood/5.jpeg'
import SaraSeaFood6 from '../../assets/imgaes/saraseafood/6.jpeg'
import SaraSeaFood7 from '../../assets/imgaes/saraseafood/7.jpeg'
import SaraSeaFood8 from '../../assets/imgaes/saraseafood/8.jpeg'


import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import APIKit from '../../utils/APIKit'
import ProjectCart from './ProjcetCart'

// roxiit => id/1
// atpvital => id/2

const data = [

    {
        projectName: "Sara Sea Food",
        images: [SaraSeaFood1, SaraSeaFood2, SaraSeaFood3, SaraSeaFood4, SaraSeaFood5, SaraSeaFood6, SaraSeaFood7, SaraSeaFood8],
        links: {
            github: 'https://github.com/MohamedFouadIbrahim/E-commerce',
            live: ' http://onelink.to/ykuv53'
        },
        id: 1
    },

    {
        projectName: "Couponak",
        images: [Couponak1, Couponak2, Couponak3, Couponak4, Couponak5, Couponak6, Couponak7, Couponak8],
        links: {
            github: 'https://github.com/MohamedFouadIbrahim/E-commerce',
            live: 'http://onelink.to/hmmxy7'
        },
        id: 1
    },
    {
        projectName: "SheCook",
        images: [SheCook1, SheCook2, SheCook3, SheCook4, SheCook5, SheCook6],
        links: {
            github: 'https://github.com/MohamedFouadIbrahim/E-commerce',
            live: 'http://onelink.to/wtv7rs'
        },
        id: 1
    },
    {
        projectName: "Zabehaty",
        images: [Zabehaty1, Zabehaty2, Zabehaty3, Zabehaty4, Zabehaty5],
        links: {
            github: 'https://github.com/MohamedFouadIbrahim/Zabehaty',
            live: 'http://onelink.to/ztkn9s'
        },
        id: 2
    },
    {
        projectName: "Mobigift",
        images: [Mobigift1, Mobigift2, Mobigift3, Mobigift4, Mobigift5],
        links: {
            github: 'https://github.com/MohamedFouadIbrahim/E-commerce',
            live: 'http://onelink.to/phhfyy'
        },
        id: 1
    },
    {
        projectName: "Discountatt",
        images: [Discountatt1, Discountatt2, Discountatt3, Discountatt4],
        links: {
            github: 'https://github.com/MohamedFouadIbrahim/E-commerce',
            live: 'http://onelink.to/p9b77f'
        },
        id: 1
    },
    {
        projectName: "LEOMARKA",
        images: [LEOMARKA1, LEOMARKA2, LEOMARKA3, LEOMARKA4, LEOMARKA5, LEOMARKA6],
        links: {
            github: 'https://github.com/MohamedFouadIbrahim/E-commerce',
            live: 'http://onelink.to/hs8vq8'
        },
        id: 1
    },
    {
        projectName: "FreshJo",
        images: [FreshJo1, FreshJo2, FreshJo3, FreshJo4],
        links: {
            github: 'https://github.com/MohamedFouadIbrahim/E-commerce',
            live: 'http://onelink.to/jnne5b'
        },
        id: 1
    },
    {
        projectName: "MobiShop",
        images: [MobiShop1, MobiShop2, MobiShop3, MobiShop4, MobiShop5],
        links: {
            github: 'https://github.com/MohamedFouadIbrahim/E-commerce',
            live: 'http://onelink.to/phhfyy'
        },
        id: 1
    },
    {
        projectName: "Byoty",
        images: [Byoty1, Byoty2, Byoty3, Byoty4, Byoty5, Byoty6],
        links: {
            github: 'https://github.com/MohamedFouadIbrahim/E-commerce',
            live: 'https://play.google.com/store/apps/details?id=com.roxiit.stores.shogolbait'
        },
        id: 1
    },
]

const Portfolio = () => {

    const Params = useParams()
    const [locallData, setLocallData] = useState(data)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        if (Params?.id) {
            setLocallData(data.filter(pro => pro.id == Params?.id))
        }
        setIsLoading(false)

        APIKit.get('https://geolocation-db.com/json/').then(res => {
            const {
                IPv4
            } = res.data
            APIKit.post('/Visitor', { IPv4 })
        })
    }, [])

    if (isLoading) {
        return null
    }

    return (
        <div className='container' >

            <h1 className='projectText PotofolioText' >
                Portfolio
            </h1>
            
            <div className='cartRow'>
                {locallData.map((item, index) => (<ProjectCart key={String(item.id)} {...item} />))}
            </div>

        </div>
    )
}

export { Portfolio }