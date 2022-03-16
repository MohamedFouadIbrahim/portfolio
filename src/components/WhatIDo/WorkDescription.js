import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const Icon = ({ iconType }) => {

    switch (iconType) {

        case "Mobile":
            return <FaMobileAlt size={40} />
        case "Node":
            return <FaNodeJs size={40} />
        case "React":
            return <FaReact size={40} />
        default:
            return null
    }
}
const WorkDecription = ({ text, iconType, desription }) => {

    return (
        <div className="oneWorkDecriptionContainer" >
            <div style={{ width: "60px" }} >
                <Icon iconType={iconType} />
            </div>
            <div style={{ width: "100%" }} >
                <p style={{ margin: '0px', }} >{text}</p>
                <h6 style={{ margin: '0px', color: "#adadad", marginTop: "3px" }} >{desription}</h6>
            </div>

        </div>
    )
}

export default WorkDecription