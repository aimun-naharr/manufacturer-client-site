import { useEffect, useState } from "react"

const useAllUser=user=>{
    const [allUser, setAllUser]=useState('')
    
    useEffect(()=>{
        const email=user?.user?.email
        const currentUser={email:email}
        if(email){
            fetch(`http://localhost:5000/user/${email}`,{
            method: 'PUT',
            
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            body:JSON.stringify(currentUser)
          })
          .then(res=>res.json())
          .then(data=>{
              if(data.token){
                  console.log(data.token)
                  const accessToken=data.token
                  localStorage.setItem('accessToken', accessToken)
                  setAllUser(accessToken)
              }
          })
        }
    },[user])
    return [allUser]
}
export default useAllUser