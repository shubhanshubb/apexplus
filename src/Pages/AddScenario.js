import './AddVS.css'

const AddScenario = () => {
  return (
    <div className='addScenario'>
      <h1>Add Scenario</h1>
      <div class="form">
        <form action="">
          <div class="row">
            <div class="col">
              <label for="scenarioname">Scenario Name</label>
              <input className='listInput' type="text" id="scenarioname" name="scenarioname" placeholder='Test Scenario' />
            </div>
            <div class="col">
              <label for="scenariotime">Scenario Time</label>
              <input className='listInput' type="text" id="scenariotime" name="scenariotime" placeholder='2' required />
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

export default AddScenario
