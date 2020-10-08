import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import BodyTable from "./Components/Body/Table/BodyTable";

const App = (props) => {
  return (
    <div className="App">
      <Header sortExp={props.sortExp} onClickState={props.onClickState} filterFunc={props.filterFunc}
              setDataFilter={props.setDataFilter} dataFilter={props.dataFilter} addDataTable={props.addDataTable}/>
      <BodyTable tableValue={props.tableValue} tableValueFiltered={props.tableValueFiltered}/>
    </div>
  );
}

export default App;
