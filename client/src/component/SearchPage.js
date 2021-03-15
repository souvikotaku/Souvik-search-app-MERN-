import React, { useEffect, useState } from "react";
import "./newStyle2.css";
import axios from "axios";
import {Link} from 'react-router-dom'

export default function SearchPage() {

    let token = localStorage.getItem("token");
    let role = localStorage.getItem("role");
    let name = localStorage.getItem("name");
    let name2 = localStorage.getItem("name2");
  
    let email = localStorage.getItem("email");
    let email2 = localStorage.getItem("email2");

  function closePanel3() {
    let modal = document.getElementById("myModal2");

    modal.style.display = "none";
  }

  const [postdata, setPostdata] = useState([]);
  const [postsearch, setPostsearch] = useState("");

  function clicksearch() {
    axios
      .get(`https://souvik-search-app.herokuapp.com/csvusers/search/${postsearch}`)
      .then((res) => {
        console.log(res.data);
        setPostdata(res.data);
      });
  }

  function clicksearch2(){

    axios
    .get(`https://souvik-search-app.herokuapp.com/csvusers/search/${postsearch}`)
    .then((res) => {
      console.log(res.data);
      setPostdata(res.data);

      document.querySelector('.loginstatement').style.display = "block";

    });

  }
  return (

    <>
 {token && role ? (
     <div class="searchBox">
     <span class="close" onClick={closePanel3}>
       &times;
     </span>
     <br />
     <br />

     <div style={{ display: "flex", justifyContent: "center" }}>
       <input
         className="form-control col col-sm-12"
         defaultValue={postsearch}
         placeholder="Enter name"
         onChange={(event) => {
           setPostsearch(event.target.value);
         }}
       />
     </div>

     <br />
     <button className="btn btn-info btn-block " onClick={clicksearch}>
       search
     </button>
     <br />
     <div style={{ overflow: "scroll", height: "60%" }}>
       {postdata.map((post) => {
         return (
           <>
             <div
               style={{
                 backgroundColor: "white",
                 padding: "15px",
                 width: "100%",
               }}
             >
               <aside className="col-md-12 col-sm-12">
                 <div className="card">
                
                   <div className="card-body">
                     <h5 className="card-title">{post.name}</h5>
                     <p className="card-text">{post.number}</p>
                     <br />
                   </div>
                 </div>
               </aside>
             </div>
           </>
         );
       })}
     </div>

     <div>
       <h5 id="titleone" style={{ color: "red" }}></h5>
     </div>
   </div>
 ):(
    <div class="searchBox">
      <span class="close" onClick={closePanel3}>
        &times;
      </span>
      <br />
      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          className="form-control col col-sm-12"
          defaultValue={postsearch}
          placeholder="Enter name"
          onChange={(event) => {
            setPostsearch(event.target.value);
          }}
        />
      </div>

      <br />
      <button className="btn btn-info btn-block " onClick={clicksearch2}>
        search
      </button>
      <br />
      <h4 className="loginstatement" style={{display:'none'}}><Link to='/login'>Login</Link> to view the search results</h4>

      <div style={{ overflow: "scroll", height: "57%" }}>

        {postdata.map((post) => {
          return (
            <>
              <div
                style={{
                  backgroundColor: "white",
                  padding: "15px",
                  width: "100%",
                }}
              >
                                  

                <aside className="col-md-12 col-sm-12 overlay">

                  <div className="card " >
                 
                    <div className="card-body" >
                      <h5 className="card-title">{post.name}</h5>
                      <p className="card-text">{post.number}</p>
                      <br />
                    </div>
                  </div>
                </aside>
              </div>
            </>
          );
        })}
      </div>

      <div>
        <h5 id="titleone" style={{ color: "red" }}></h5>
      </div>
    </div>
 )}
 </>

   
    
  );
}
