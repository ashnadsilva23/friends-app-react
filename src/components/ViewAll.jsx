import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const[data,changeData]=useState(
        [
            
        ]
    )
    const fetchData=()=>{
        axios.get("https://friendsapi-re5a.onrender.com/view").then(
            (response)=>{
                console.log(data)
            changeData(response.data)
            }
        ).catch().finally()
    
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Navbar/>
                <h1>view All</h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Friend Name</th>
      <th scope="col">Friend Nick Name</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
   
{data.map(
    (value,index)=>
        {
            return <tr>
                
           <td>{index+1}</td>
           <td>{value.name}</td>
           <td>{value.friendName}</td>
           <td>{value.friendNickName}</td>
           <td>{value.DescribeYourFriend}</td>
          </tr>
        }
)}
    
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll