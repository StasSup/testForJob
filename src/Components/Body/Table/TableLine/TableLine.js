import React from "react";
import './TableLine.css';
import {headerData} from "../../../../constants";

const TableLine = (props) => {

    const rowGenerate = (width,data) => {
        return <div style={{width,textAlign:'center', color: "#282c34"} }>{data}</div>
    }

    return (
        <div className="tableLineWrapper">
            {headerData.map((el) => rowGenerate(el.width, props[el.name] ))}
        </div>
    )
}

export default TableLine