import React,{useState} from 'react'
export const UsersContext = React.createContext()

function UserContextComponent({children}) {
    let [users,setUsers] = useState([
        {
         name:"Anoop",
         email:"anoop@gmail.com",
         mobile:"1234567890",
         dob:"1998-01-23"
      },
      {
        name:"Ajith",
        email:"ajith@gmail.com",
        mobile:"9790973973",
        dob:"1998-01-28" 
      },
      {
        name:"Ganesh",
         email:"ganesh@gmail.com",
         mobile:"9797666333",
         dob:"1999-03-25"
      },
      {
        name:"Gokul",
        email:"gokul@gmail.com",
        mobile:"9109105555",
        dob:"1997-05-21"
      }
    ])
    
  return <>
  <UsersContext.Provider value={{users,setUsers}}>
    {children}
  </UsersContext.Provider>
  </>
}

export default UserContextComponent