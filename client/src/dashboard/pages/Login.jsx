import React, {useState} from 'react'

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: ''
  })

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  const submit = (e) => {
    e.preventDefault()
    console.log(state)
  }

  return (
    <div className='min-w-screen min-h-screen bg-slate-200 flex justify-center items-center'>
      <div className='w-[340px] text-slate-600 shadow-md'>
        <div className='bg-white h-full px-7 py-8 rounded-md'>
          <div className='w-full justify-center items-center flex'>
            <img className='w-[200px]' src='' alt='logo' />
          </div>
          <form onSubmit={submit} className='mt-8'>
          <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='email'>Email*</label>
              <input value={state.email} required onChange={inputHandle} type='email' placeholder='exmple@gmail.com' name='email' id='email' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='password'>Mot de Passe*</label>
              <input value={state.password} required onChange={inputHandle} type='password' placeholder='Password' name='password' id='password' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            <div className='mt-4'>
            <button className='px-3 py-[6px] bg-purple-500 w-full rounded-sm text-white hover:bg-purple-600'>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login