import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Main = () => {

  const data = useState('')

  useEffect(()=>{
    async function getMovies(){
        try{
            const res = await axios.get('http://localhost:3000/')
            console.log(res);
        } catch(error){
            console.log(error);
        }
    }

    getMovies()
},[])  


  return (
    <div>
        <h1>Try Not To Laugh</h1>
        <div className="bg-blue-800">
            <div className='bg-red-200'>Serial No.</div>
            <div>The Meme</div>
            {
              data
            }
        </div>
    </div>
  )
}

export default Main