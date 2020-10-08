import React, {useEffect, useState} from "react";
import App from "./App";

const AppContainer = () =>{
    const url = 'http://www.filltext.com/?rows=30&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
    const [tableValue,setTableValue] = useState([])
    const [onClickState, setOnClickState] = useState('true')
    const [tableValueFiltered, setTableValueFiltered] = useState([])
    const [dataFilter, setDataFilter] = useState('')
    useEffect(() => {
        fetch(url).then(
            (response) => {return response.json()}
        ).then((data) => setTableValue(data))
    },[])

    const sortByid = (a,b,name) =>{
        if (onClickState == 'true'){
            setOnClickState('false')
            if (a[name] < b[name]) {
                return -1
            }
            if (a[name] > b[name]) {
                return 1
            }
            return 0
        } else {
            setOnClickState('true')
            if (a[name] > b[name]) {
                return -1
            }
            if (a[name] < b[name]) {
                return 1
            }
            return 0
        }
    }

    const sortExp = (name) => {
        setTableValue(tableValue.sort((a,b) => sortByid(a,b,name)).slice())
    }

    const addDataTable = (data) => {
        setTableValue([data, ...tableValue])
    }

    const filterFunc = (dataFilter) => {
        if (dataFilter == '') {
            setTableValueFiltered([])
        } else {
            const tableValueFilterId = tableValue.filter((el) => el.id.toString().toLowerCase().indexOf(dataFilter.toLowerCase()) === 0 ||
            el.firstName.toString().toLowerCase().indexOf(dataFilter.toLowerCase()) === 0 ||
                el.lastName.toString().toLowerCase().indexOf(dataFilter.toLowerCase()) === 0 ||
                    el.email.toString().toLowerCase().indexOf(dataFilter.toLowerCase()) === 0 ||
                        el.phone.toString().toLowerCase().indexOf(dataFilter.toLowerCase()) === 0
            )
            setTableValueFiltered(tableValueFilterId)
        }
    }

    return (
        <App tableValue={tableValue} sortExp={sortExp} onClickState={onClickState}
             filterFunc={filterFunc} tableValueFiltered={tableValueFiltered} setDataFilter={setDataFilter}
             dataFilter={dataFilter} addDataTable={addDataTable}/>
    )
}

export default AppContainer