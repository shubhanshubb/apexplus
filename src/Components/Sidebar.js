import './Sidebar.css'
import {Menu} from 'antd'
import {  Route, Routes,useNavigate } from 'react-router-dom'
import AddScenario from '../Pages/AddScenario'
import AddVehicle from '../Pages/AddVehicle'
import AllScenarios from '../Pages/AllScenarios'
import Home from '../Pages/Home'

const Sidebar = () => {
    const navigate =useNavigate()
  return (
    <div className='menu-content'>
        {/* creating menu items */}
    <Menu  className='menu-item'
    // Creating OnClick function and generating key as path name and using useNavigate hooks  to redirect path
    onClick={({key})=> navigate(key)
}
// keep selection of menu items using path
    defaultSelectedKeys ={[window.location.pathname]}
    items={[
        {label : "Home" , key:'/Home' },
        {label :'Add Scenario', key:'/AddScenario'},
        { label : "All Scenarios",key:'/AllScenarios'},
        {label : "Add Vehicle", key:'/AddVehicle'}
]} >

    </Menu>
    {/* Creating contents for menu items */}
    < Content />
</div>

  )

  function Content(){
    return <div className='rtg'>
       <Routes>
           {/* Routing Paths */}
       <Route path='/Home' element={ <div ><Home /></div>} />
   
   
       <Route path='/AddScenario' element={<div>
           <h3>Scenario / add</h3>
           <AddScenario/>
           
       </div>} />
   
   
       <Route path='/AllScenarios' element={ 
       
       <div>
        <AllScenarios />
       </div>} />
   
   
   
       <Route path='/AddVehicle' element={ 
   <div>
       <h3>Vehicle / add</h3>
           <AddVehicle/>
           </div>
       } />
       </Routes>
    </div>
   }
}

export default Sidebar
