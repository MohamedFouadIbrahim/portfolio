import React from "react";
import './styles.css'
import Img from '../../assets/imgaes/1.jpg'
import DotLoader from "react-spinners/DotLoader";
import { UseMyInfo } from "./useMyInfo";


export const MyInfo = () => {

    const { information, isLoading } = UseMyInfo()
    
    return (
        <div className="myInfoMainContainer" id="myInfo" >

            <div className="whoAmIcontaier" >
                <h2>WHO AM I  </h2>
                <h5 > <em >Software Engineer With 3 Years Of Experience </em></h5>
            </div>

            <div className="imageNameContainer" >

                <img src={Img} alt="not" />

                {isLoading ? <div style={{ height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <DotLoader color={"#38a5db"} loading={isLoading} size={50} />
                </div>
                    :
                    <div style={{ color: 'white' }} >
                        <h1 style={{ margin: '0px' }} >
                            {information?.information}
                        </h1>

                        <p style={{ lineHeight: '30px' }} >
                            {information?.informationBody}
                        </p>
                    </div>
                }

            </div>

        </div>

    )
}