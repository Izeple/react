import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Subject } from 'rxjs';
import { setMatchers } from 'expect/build/jestMatchersObject';
import moment from 'moment'
import Input from './input'
import axios from 'axios';


const targetDate = moment("12/21/2019 17:00:00")

function App() {
  const Subject = ["a","React","c"]
  const [name,setName] = React.useState("") 
  const [email,setEmail] = React.useState("") 
  const [selectedSubject,setSelect] = React.useState("") 
  const [checked,setIsChecked] = React.useState(false) 
  const [timer,setTimer] = React.useState("")
  const [message,setMessage] = React.useState("")
  const [loading,setIsLoading] = React.useState(false) 


  const updateTimer = () => {
    const diffHours = targetDate.diff(moment(),"hours")
    const diffMinutes = targetDate.diff(moment(),"minutes") % 60
    const diffSeconds = targetDate.diff(moment(),"seconds") % 60
    setTimer(`${diffHours} hours ${diffMinutes} minutes ${diffSeconds} seconds`)
  }

  React.useEffect(() => {
    const interval = setInterval(updateTimer,1000)
    axios
    .get("http://www.mocky.io/v2/5dfde8a6310000551ec96e5b")
    .then(response => {
      setSelect(response.data.subject)
    })
    return () => clearInterval(interval)
  },[]) //ใส่ array เพื่อให้ไม่ทำงานทุกครั้งหลัง render


  
  const handleSubmit = ()=>{
    setIsLoading(true)
    axios
    .get("http://www.mocky.io/v2/5dfde561310000ed1ac96e39?mocky-delay=4000ms&fbclid=IwAR0v4HbOcn-8zu6JSHhQO8rDthDj_DsdH_uDp0En-BeMiXTstsAe-AThbuQ")
    .then(response => {
      const {data}=response
      setMessage(data.response)
      setIsLoading(false)
    }
    )
  }

  console.log("State:", {name,email,selectedSubject,checked})
  return (
    <div className="App"> 
    <div className="title">Season change Registration</div>
    <p>From end in</p>
    <p>{timer}</p>
    <Input 
      label="Name"
      value={name}
      onChangeFromComponent = {value => setName(value)}
      />
    <Input 
      label="Email"
      value={email}
      onChangeFromComponent = {value => setEmail(value)}
    />
    


    {/*
          <div className="field">
<label className="label">Name</label>
    <div className="control">
      <input className="input" type="text" placeholder="Text input" value={name} onChange={event => setName(event.target.value)}/>
    </div>
  </div>
  

  
  <div className="field">
    <label className="label">Email</label>
    <div className="control has-icons-left has-icons-right">
      <input className="input is-danger" type="email" placeholder="Email input" value={email} onChange={event => setEmail(event.target.value)}/>
      <span className="icon is-small is-left">
        <i className="fas fa-envelope"></i>
      </span>
      <span className="icon is-small is-right">
        <i className="fas fa-exclamation-triangle"></i>
      </span>
    </div>
    <p className="help is-danger">This email is invalid</p>
  </div>
  */}
  <div className="field">
    <label className="label">Subject</label>
    <div className="control">
      <div className="select">
        <select 
        value={selectedSubject}
        onChange={event => setSelect(event.target.value)}>
          {Subject.map(Subject => <option key={Subject}>{Subject}</option>)}
        </select>
      </div>
    </div>
  </div>
  
  <div className="field">
    <label className="label">Message</label>
    <div className="control">
      <textarea className="textarea" placeholder="Textarea"></textarea>
    </div>
  </div>
  
  <div className="field">
    <div className="control">
      <label className="checkbox">
        <input type="checkbox" 
        value={checked} 
        onChange={event => setIsChecked(event.target.checked)}/>
        I agree to the <a href="#">terms and conditions</a>
      </label>
    </div>
  </div>
  
  <div className="field is-grouped">
    <div className="control">
      <button className={`button is-link ${loading &&'is-loading'} `} onClick={handleSubmit} >Submit</button>
    </div>
    <div className="control">
      <button className="button is-link is-light">Cancel</button>
    </div>
  </div> 
  <p>{message}</p>
    </div>
  );
}


export default App;
