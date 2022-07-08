
import './App.css';
import { useState } from "react";
import layouts from "./layouts.json";


function App() {
  const myevents = [
    {
      label:"My Room",
      status:false,
    },
    {
      label:"Rooms",
      status:true,
    },
    {
      label:"Halls",
      status:false,
    },
    {
      label:"Bus",
      status:false,
    },
  ]
  const seatplaces=[
      {
        row:0,
        key:-1,
      },
  ]
  const [sp,setSeatplaces]=useState(seatplaces)
  const [events,setEvents]=useState(myevents);
  const [selector, setSelector] = useState("Rooms");
  const [rows,setRows]=useState('');
  const [columns,setColumns]=useState('');
  const [isActive, setIsActive] = useState(false);


  const showCreate=()=>{

    setIsActive(current => !current);
  }
  
 
  const createVidjet=()=>{
    let keyCount=1;
    //console.log(sp)
    for(let i=0;i<rows;i++){
      for(let j=0;j<columns;j++){
        let addnew = {
          row:(i+1),
          key:keyCount
        }
        setSeatplaces(current => [...current, addnew]);
        keyCount++;

      }
    }
    console.log(sp)
  }
  const handleRows=(event)=>{
    setRows(event.target.value)
  }
  const handleColums=(event)=>{
    setColumns(event.target.value)

  }

  const handleChange=(item)=>{
    
    setSelector(item.label);
    console.log(item.label)
    setEvents((prevItems) =>
      prevItems.map((event) => {
         if(item.label == event.label){
          return { ...event, status:true };
         }else{
          return { ...event, status:false };
         }
        
      })
    );
    
  }
  return (
    <div className="App">
      <div className="top-navigation">
      <div className="container ">
        <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between ">
          <div className="navbar-brand">
            
          </div>
          <div className="navbar">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
      
      </nav>
      <div className="eventlist">
        <p className="maintext">My Calendly</p>
        <div className="events d-flex justify-content-between w-50">
          {events.map((event)=>(
                  <div key={event.label} 
                  className={`event-item ${event.status ? "current":""}`}   
                  onClick={()=>handleChange(event)}>{event.label}</div>
          ))}
        </div>
        <button type="button" className="btn btn-primary ">
          <i className="fa-solid fa-plus"></i>
          Create
        </button>
      </div>
    
      </div>
    </div>
    
  

  {selector === "Rooms" &&
          <div className="bottom-navigation container d-flex justify-content-between flex-wrap mt-5">
          {layouts.map((item)=>(
            //  <div  key={item.name} className="card">
          
           <div class="flip-card" key={item.label}   onClick={showCreate}>
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  
                <img src={item.link} ></img>
                </div>
                <div class="flip-card-back">
                  <h1>{item.name}</h1>
                  <p>Architect  Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          // </div>
          
          ))}
         

    </div>
        }
  {selector === "My Room" &&
    <div className="bottom-navigation container d-flex justify-content-between flex-wrap mt-5">
    <div className="card">
      myroom
    </div>

  </div>
  }{selector === "Halls" &&
    <div className="bottom-navigation container d-flex justify-content-between flex-wrap mt-5">
    <div className="card">
    lectures
    </div>

  </div>
  }{selector === "Bus" &&
    <div className="bottom-navigation container d-flex justify-content-between flex-wrap mt-5">
    <div className="card">
    bus
    </div>

  </div>
  }






  <div className="create" style={{
          zIndex: isActive ? 1 : -10,
          opacity:isActive ? 1:0,
        }}>

    <a 
    className='closeBtn'
    onClick={showCreate}
    >x</a>
    <div className='custom'>
    <form   >		
				<h4 class="title">calculate lecture size</h4>
           		<div class="input-div one">
           		   <div class="i">
					<i class="fa fa-venus"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>rows</h5>
           		   		<input  onChange={handleRows} type="number" class="input" id ="rows" ></input>
           		   </div>
           		</div>
           		<div class="input-div one">
           		   <div class="i"> 
					<i class="fa fa-mars"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>columns</h5>
           		    	<input onChange={handleColums}  type="number" class="input" id="columns"></input>
            	   </div>
                </div>
				
				 
            	<input onClick={()=>createVidjet()} class="btn" value="Calculate Lacture Size" id = "lectureseats"></input>
            </form>
    </div>
    <div className='vidjet'  >
        
            <ul class="showcase">
            <li>
              <div class="seat"></div>
              <small>Available</small>
            </li>
            <li>
              <div class="seat selected"></div>
              <small>Selected</small>
            </li>
            <li>
              <div class="seat sold"></div>
              <small>Sold</small>
            </li>
            </ul>
            <div class="row">
                  {seatplaces.map(()=>{
                  <div class="seat">
                  <div class="seatbtn">+</div></div>
                  })}
                  </div>  
    </div>

  </div>


 
    
  </div>



  );
}

export default App;
