import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    let [Serial,setSerail] = useState(0)
    const [Memes,setMeme] = useState("")
    const [Like, setLike] = useState(0)
    const [Dislike, setDislike] = useState(0)
    const [created_by,setCreated] = useState("")
    const navigation = useNavigate()

    const Submit = (e) =>{
      e.preventDefault()
      axios.post("http://localhost:4200/createMeme",{Serial,Memes,Like,Dislike,created_by})
      .then(result=> {
        console.log(result)
        navigation('/')
      })
      .catch(err=> console.log(err))  
    }

  return (
    <div>
         <form onSubmit={Submit}>
            <h2>Add Entity</h2>
            <div>
                <label>Enter Serial Number</label>
                <input type="number" placeholder='Enter number of your choice' 
                onChange={(e)=>setSerail(e.target.value)}/>
            </div>
            <div>
                <label>Meme</label>
                <input type="text"
                 placeholder='Enter you Meme' 
                onChange={(e)=>setMeme(e.target.value)} />
            </div>
            <div>
                <label>Initial Likes</label>
                <input type="number" 
                defaultValue={Like} 
                placeholder='0 (Not changeable)'
                onChange={(e)=>setLike(e.target.value)} />
            </div>
            <div>
                <label>Initial Dislikes</label>
                <input type="number" 
                defaultValue={Dislike}
                placeholder='0(Not changeable)' 
                onChange={(e)=>setDislike(e.target.value)} />
            </div>
            <div>
              <label>Created_by</label>
              <input type="text" 
              defaultValue={created_by}
              placeholder='add your name'
              onChange={(e)=>setCreated(e.target.value)}
              />
            </div>
            <button type='submit'>
                Submit
            </button>
         </form>
    </div>
  )
}

export default Form