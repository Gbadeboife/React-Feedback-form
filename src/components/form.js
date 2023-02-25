import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import { supabase } from './supabaseclient'
import logo from '../images/logo.png'

function Form(){

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [company,setCompany]=useState('')
    const [role,setRole]=useState('')

    const history=useHistory()


    async function handleSubmit(e){
        e.preventDefault()

        await supabase.from('feedback form').insert([
            {name: {name},
            email:{email},
            company:{company},
            role:{role}} 
          ]).then((res)=>{
            console.log('success');
            console.log(res)
            history.push('/success')}
            ,function(err){
                history.push('/failure')
                console.log(err)
                console.log('error')
    
            })
    }


    return(
        <div className='form'>
            <img src={logo}/>
            <h1>Sign up for Feedback</h1>
            <form onSubmit={handleSubmit}>
              <input type='text' name='name' placeholder='Full Name' onChange={(e)=>{setName(e.target.value)}}/> 
              <input type='email' name='email' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
              <input type='text' name='company' placeholder='Company' onChange={(e)=>{setCompany(e.target.value)}}/>
              <input type='text' name='role' placeholder='Role' onChange={(e)=>{setRole(e.target.value)}}/>
              <input type='submit' value='Submit' className='submit'/>
            </form>
        </div>
    )
}

export default Form
