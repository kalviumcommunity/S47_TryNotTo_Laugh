import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import data from '../assets/data.json'


const Main = () => {


//   useEffect(()=>{
//     async function getMovies(){
//         try{
//             const res = await axios.get('http://localhost:3000/')
//             console.log(res);
//         } catch(error){
//             console.log(error);
//         }
//     }

//     getMovies()
// },[])  


  return (
    <div>
        <h1>Try Not To Laugh</h1>
        {
          data.map((item,index)=>{
            return(
              <div key={index}>
                <div>
                  {
                    item.Memes
                  }
                </div>
                <div className=''>
                  <div>
                    {item.Like}
                  </div>
                  <div>
                    {item.Dislike}
                  </div>
                </div>
              </div>
            )
          })
        }
    </div>
  )
}

export default Main