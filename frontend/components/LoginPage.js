import React from 'react'
import LoginForm from './LoginForm'

function LoginPage() {
  return (
    <div className="w-full h-screen flex items-start">
    <div className="relative w-1/2 h-full sm:flex flex-col hidden">
        <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1623910270913-3e0294a1c765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        />
    </div>
    <div className="sm:relative w-full sm:w-1/2 h-full flex flex-col">
        <LoginForm/>
    </div>
</div>
  )
}

export default LoginPage
