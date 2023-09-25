import React, { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { UsersContext } from '../context/UserContextComponent'
function Dashboard() {
  let userContext = useContext(UsersContext)
  console.log('context',userContext)
let [data,setData] = useState([



])

let navigate = useNavigate()
 return <>
  
  <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <div className="container-fluid">

                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Student And Teacher Management</h1>
                        <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>

                    <div className="row">
                  {
                    data.map((e,i)=>{
                        return <Card key={i}
                        input={e}

                        />
                    })

                    }
                     </div>
                     <div>
                     <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Student Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>DOB</th>
          <th>Teacher Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            userContext.users.map((e,i)=>{
                return <tr key={i}>
                    <td>{i+1}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.mobile}</td>
                    <td>{e.dob}</td>
                    <td>{e.tname}</td>
                    <td>
                      <Button variant='primary' onClick={()=>navigate(`/edit-user/${i}`)}>Edit</Button>
                      &nbsp;&nbsp;
                      <Button variant='danger' onClick={()=>{
                        let newArray = [...userContext.users]
                        newArray.splice(i,1)
                        userContext.setUsers(newArray)
                      }}>Delete</Button>
                    </td>
                </tr>
            })
        }
      </tbody>
    </Table>

                     </div>
                </div>
            </div>
        </div>

  </>
}

export default Dashboard