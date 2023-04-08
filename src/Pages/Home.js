import './Home.css'
import { useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

const Home = () => {
  const [isRunning, setIsRunning] = useState(false);

  const startSimulation = () => {
    setIsRunning(true);

    // code to start the simulation logic goes here
  };

  const stopSimulation = () => {
    setIsRunning(false);

    // code to stop the simulation logic goes here
  };

  return (
    <div className='home'>
      <label htmlFor="scenario">Scenario</label>
      <div className='homeList'>
        <select className='homeInput' id="scenario">
          <option className='options' value="Test Scenario">Test Scenario</option>
          <option className='options' value="My Scenario">My Scenario</option>
        </select>
      </div>
      <div className='allHomeTable'>
        <table className='table'>
          <thead>
            <tr>
              <th className='th' width="150">Vehicle Id</th>
              <th className='th' width="150">Vehicle Name</th>
              <th className='th' width="150">Position X</th>
              <th className='th' width="150">Position Y</th>
              <th className='th' width="100">Speed</th>
              <th className='th' width="100">Direction</th>
              <th className='th' width="100">Edit</th>
              <th className='th' width="100">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr className='tr'>
              <td className='td'>1</td>
              <td className='td'>Bus</td>
              <td className='td'>200</td>
              <td className='td'>305</td>
              <td className='td'>5</td>
              <td className='td'>Towards</td>
              <td className='td'><MdEdit /></td>
              <td className='td'><MdDelete /></td>
            </tr>
            <tr>
              <td className='td'>2</td>
              <td className='td'>Car</td>
              <td className='td'>1200</td>
              <td className='td'>304</td>
              <td className='td'>4</td>
              <td className='td'>Upwards</td>
              <td className='td'><MdEdit /></td>
              <td className='td'><MdDelete /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='button'>
        {isRunning ? (
          <button className="button sky" onClick={stopSimulation}>Start Simulation</button>
        ) : (
          <button className="button sky" onClick={startSimulation}>Start Simulation</button>
        )}
        {setIsRunning ? (
          <button className="button green" onClick={stopSimulation}>Stop Simulation</button>
        ) : (
          <button className="button green" onClick={startSimulation}>Stop Simulation</button>
        )}
      </div>
    </div>
  );
};

export default Home;
