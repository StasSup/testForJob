import React, {useEffect, useState} from "react";
import TableLine from "./TableLine/TableLine";

const BodyTable = (props) => {

    let item = props.tableValueFiltered.length > 0 ? props.tableValueFiltered : props.tableValue
    const tableItem = item.map(p => (<TableLine id={p.id} firstName={p.firstName} lastName={p.lastName} email={p.email} phone={p.phone}/>))
    return (
        <div className="tableWrapper">
            {tableItem}
        </div>
    )
}



export default BodyTable