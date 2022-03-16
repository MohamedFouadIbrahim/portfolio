import React from "react";
import './styles.css';
import { Link } from 'react-router-dom'
export const Header = () => {
    return (
        <div className="headerContainer" >

            <h3 className="headerTitle" >
                Mohamed Fouad
            </h3>

            <div>

                <ul className="headerList" >
                    <li className="headerListItem" >
                        <a href="/" > HOME </a>
                    </li>
                    <li className="headerListItem" >
                        <Link to='/Portfolio' >
                            PORTFOLIO
                        </Link>
                    </li>
                </ul>

            </div>

        </div>
    )
}