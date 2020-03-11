import React from 'react'; //agar component dapat berjalan pada react
import './HelloComponent.css';

const HelloComponent = () =>{
    return (
    <div>
        <h1>Form Login</h1>
        <form>
            <center><h1><b>Tugas Pertemuan Ketiga</b></h1></center>
            <div className="formcontainer">
            <hr/>
                <div className="container">
                    <label for="uname"><strong>Username</strong></label>
                    <input type="text" placeholder="Enter Username" name="uname" required></input>
                    <label for="psw"><strong>Password</strong></label>
                    <input type="password" placeholder="Enter Password" name="psw" required></input>
                </div>
                <button type="submit">Login</button>
                <div className="container" style={{backgroundColor: "#eee"}}>
                    <label style={{paddingLeft:"15px"}}>
                    <center><input type="checkbox"  name="remember"></input> 
                    Remember me</center>
                    </label>
                </div>
                <center><button type="submit" className="button1">Cancel</button></center>
            </div>
        </form>
    </div>
    );
}

export default HelloComponent;