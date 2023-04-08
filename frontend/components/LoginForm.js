import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router';
import { useState } from 'react';
import Swal from 'sweetalert2';
import axios from '@/libs/axios';
import Cookies from 'js-cookie';

 function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const form = new FormData();
  
  
    const handleLogin = (e)=>{
      e.preventDefault();
      form.append('username', username);
      form.append('password', password);
      axios.post('/api/login',form).then(function(response){
       Cookies.set("username",response.data.username);
        Cookies.set("loggedIn", true);
        Swal.fire({
          icon: 'success',
          title:  "Welcome " + response.data.username,
          showConfirmButton: false,
          timer: 1500
        }).then(function(){
          router.push('/dashboard');
        });
      }).catch(function(error) {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500
        })
      });
    }
  return (
    <>
      <div className="flex min-h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="logo.png"
              alt="Your Company"
            />
          </div>
          <form onSubmit={handleLogin} className="mt-8 space-y-6" action="#" method="POST">
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <input
                  id="user"
                  type="text"
                  required
                  autoComplete="off"
                  onChange={(e) => setUsername(e.target.value)}
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="User"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="off"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-orange-400 px-3 py-2 text-sm font-semibold text-white hover:bg-orange-500 transition duration-300 "
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-orange-500 group-hover:text-orange-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default LoginForm;