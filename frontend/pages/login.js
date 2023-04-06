import { useRouter } from 'next/router'
import React from 'react'

function login() {
  const router = useRouter();
  
  const handleLogin = (e)=>{
    e.preventDefault();
    router.push("/dashboard")
  }

  return (
    <div>
        <div onClick={handleLogin}>
            this is the login
        </div>
      
    </div>
  )
}

export default login
