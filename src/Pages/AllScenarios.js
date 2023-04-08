import './AllScenarios.css'
import { MdAddCircle, MdDelete, MdEdit } from 'react-icons/md';
// import React, { useState } from "react";

const AllScenarios = () => {

  return (
    <div className='allScenario'>
        <h1>All Scenarios</h1>
      <div className='button'>
                <button class="button sky">New Scenario</button>
                <button class="button green">Add Vehicle</button>
                <button class="button orange">Delete All</button>
        </div>
      <div className='allScenarioTable'>
        <table className='table'>
        <thead>
      <tr>
        <th className='th' width="150">Scenario Id</th>
        <th className='th' width="250">Scenario Name</th>
        <th className='th' width="250">Scenario Time</th>
        <th className='th' width="350">Number of Vehicles</th>
        <th className='th' width="200">Add Vehicle</th>
        <th className='th' width="100">Edit</th>
        <th className='th' width="100">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr className='tr'>
        <td className='td'>1</td>
        <td className='td'>Test Scenario</td>
        <td className='td'>2s</td>
        <td className='td'>3</td>
        <td className='td'><MdAddCircle/></td>
        <td className='td'><MdEdit /></td>
        <td className='td'><MdDelete /></td>
      </tr>
      <tr className='tr'>
        <td className='td'>2</td>
        <td className='td'>My Scenario</td>
        <td className='td'>10s</td>
        <td className='td'>1</td>
        <td className='td'><MdAddCircle/></td>
        <td className='td'><MdEdit /></td>
        <td className='td'><MdDelete /></td>
      </tr>
      <tr>
        <td className='td'>3</td>
        <td className='td'>Scenario ABC</td>
        <td className='td'>12s</td>
        <td className='td'>0</td>
        <td className='td'><MdAddCircle/></td>
        <td className='td'><MdEdit /></td>
        <td className='td'><MdDelete /></td>
        </tr>
        </tbody>
        </table>
      </div>
  </div>
  )
}



export default AllScenarios
