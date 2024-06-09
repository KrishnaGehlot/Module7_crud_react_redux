// src/App.js
import React from 'react';
// import TableSearch from './Pages/TableSearch';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add_Table from './Pages/Add_Table';

function App() {
  return (
    <div className="App container">
      <h1 className='ml-3 '>React Table </h1>
      {/* <TableSearch /> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='add_table' element={<Add_Table />}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
