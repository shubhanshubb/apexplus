import './AddVS.css'

const AddVehicle = () => {
    return (
        <div className='addVechicle'>
            <h1>Add Vehicle</h1>
        <div class="form">
            <form action="">
                <div class="row">
                    <div class="col">
                    <label for="scenario-list">Scenarios List</label>
                    <select className='listInput' id="scenario-list">
                        <option className='option' value="Select Scenario">Select Scenario</option>
                        <option className='option' value="Select Scenario">Scenario 1</option>
                        <option className='option' value="Select Scenario">Scenario 2</option>
                        <option className='option' value="Select Scenario">Scenario 3</option>
                    </select>
                    </div>
                    <div class="col">
                    <label for="vehicle-name">Vehicle Name</label>
                    <input className='listInput' type="text" id="vehicle-name" name="vehicle-name" placeholder='Target abc' />
                    </div>
                    <div class="col">
                    <label for="speed">Speed</label>
                    <input className='listInput' type="text" id="speed" name="speed" placeholder='2'/>
                    </div>
                    
                    <div class="col">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    <label for="position-x">Position X</label>
                    <input className='listInput' type="text" id="position-x" name="position-x" placeholder='1000' />
                    </div>
                    <div class="col">
                    <label for="position-y">Position Y</label>
                    <input className='listInput' type="text" id="position-y" name="position-y" placeholder='20'/>
                    </div>
                    <div class="col">
                    <label for="direction">Direction</label>
                    <select className='listInput' id="direction">
                        <option className='option' value="towards">Select Direction</option>
                        <option className='option' value="towards">Towards</option>
                        <option className='option' value="backwards">Backwards</option>
                        <option className='option' value="upwards">Upwards</option>
                        <option className='option' value="downwards">Downwards</option>
                    </select>
                    </div>
                    
                    <div class="col">
                    </div>
                </div>
                
            </form>
            
        </div>
        <div className='button'>
                <button class="button green">Add</button>
                <button class="button orange">Reset</button>
                <button class="button sky">Go Back</button>
             </div>
        </div>
        

        
    )
}

export default AddVehicle
