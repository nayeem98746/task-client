import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './Home.css'
const Home = () => {

    const {register, handleSubmit, reset} = useForm()
    const onSubmit = data => {
        axios.post('http://localhost:5000/users' , data)
        .then(res => {
            console.log(res)
            if(res.data.insertedId){
                alert('added produst successfuly')
                reset()
            }
        })
    }


    return (
        <div className='main-div'>
<form onSubmit={handleSubmit(onSubmit)} className='shadow p-4'>
            <label style={{marginLeft:'50px'}} htmlFor="">Name :</label>
                <input  {...register("name", { required: true, maxLength: 20 })} placeholder="Name" className='input-apply' /> 


          <label  style={{marginLeft:'50px'}} htmlFor="">Check-in :</label>
          <input type="date" {...register("check-in")} placeholder="check-in" className='input-apply' />


              <label style={{marginLeft:'50px'}} htmlFor="">Check-out :</label>
                <input type="date" {...register("check-out")} placeholder="Check-out" className='input-apply' /> <br /><br />
               
                <input style={{backgroundColor:'#b4c7e7', color:'blue', marginTop:'20px', paddingLeft:'50px', paddingRight:'50px', paddingTop:'20px' , paddingBottom:'20px', cursor:'pointer' }}  type="submit" />
            </form>
        </div>
    );
};

export default Home;