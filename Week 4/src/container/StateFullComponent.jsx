import React,{Component} from 'react';
import './StateFUllComponent.css';

class Statefullcomponent extends  Component{
	render(){
		return(
			<div>
    <br/><br/>
    <h1>Login Form</h1>
    <form>
      <br/><br/>
    <center><h2><b>Tugas Pertemuan ketiga</b></h2></center>
      <div className="formcontainer">
        <hr/>
        <div className="container">
          <label for="uname"><strong>Username</strong></label>
          <input type="text" placeholder="Enter Username" name="uname" required/>
          <label for="psw"><strong>Password</strong></label>
          <input type="password" placeholder="Enter Password" name="psw" required/>
        </div>
        <button type="submit">Login</button>
        <div className="container" >
          <label >
          <input type="checkbox"  checked="checked" name="remember"/> Remember me
          </label>
          <span className="psw"><a href="#"> Forgot password?</a></span>
        </div>
        <button type="submit" className="cancelbtn">cancel</button>
        </div>
    </form>
  </div>
		) 
		
	}
}

export default Statefullcomponent;