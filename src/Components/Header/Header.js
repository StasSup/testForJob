import React from 'react';
import './Header.css';
import {headerData} from "../../constants";

import ModalWindow from "./ModalWindow/Modal";

const Header = (props) => {

    const onChangeFunction = (e) =>{
        props.setDataFilter(e.target.value)
    }

    return (
        <div className="HeaderGG">
            <ModalWindow addDataTable={props.addDataTable}/>
            <div className="HeaderWrapper">
                {
                    headerData.map((el) => {
                        if (props.onClickState == 'true'){
                            return <div className="HeaderItemWrapper" style={{width: el.width}}>
                                <p className="HeaderItem" onClick={() => props.sortExp(el.name)}>
                                    {el.name}{el.isDecreased}
                                </p>
                            </div>
                        }
                        return <div className="HeaderItemWrapper" style={{width: el.width}}>
                            <p className="HeaderItem" onClick={() => props.sortExp(el.name)}>
                                {el.name}{el.isIncreased}
                            </p>
                        </div>
                    })
                }
            </div>
            <div className="HeaderWp">
                <div>
                    <button onClick={() => props.filterFunc(props.dataFilter)}>Найти</button>
                    <input onChange={onChangeFunction} value={props.dataFilter}/>
                </div>
            </div>
        </div>
    )
}

export default Header