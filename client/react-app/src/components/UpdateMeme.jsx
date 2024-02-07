import React, { useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const UpdateMeme = () => {

    const {id} = useParams()
    let [Serial,setSerail] = useState()
    const [Memes,setMeme] = useState("")
    const [Like, setLike] = useState()
    const [Dislike, setDislike] = useState()
    const navigate = useNavigate()


    useEffect(()=>{
        axios.get('http://localhost:4200/getUser/'+id)
        .then(result=> {
            console.log(result);
            setMeme(result.data.Memes)
            setSerail(result.data.Serial)
            setLike(result.data.LIke)
            setDislike(result.data.Dislike)
        })
        .catch(err => console.log(err))
    },[])

    const Update = (e) =>{
        e.preventDefault()
        axios.put('http://localhost:4200/UpdateMeme/'+id,{Serial,Memes,Like,Dislike})
        .then(result=> {console.log(result)
            navigate('/')
        })
    
        .catch(err => console.log(err))
    }


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Update}>
            <h2>Update User</h2>
            <div className='mb-2'>
                <label htmlFor="">Serial</label>
                <input type="text" placeholder='Enter Serial' className='form-control' value={Serial} 
                onChange={(e)=>{setSerail(e.target.value)}}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="">Meme</label>
                <input type="text" placeholder='Enter Memes' className='form-control' value={Memes}
                onChange={(e)=> setMeme(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="">Like</label>
                <input type="text" placeholder='Enter Like' className='form-control' value={Like}
                onChange={(e)=> setLike(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="">Dislike</label>
                <input type="text" placeholder='Enter Dislike' className='form-control' value={Dislike}
                onChange={(e)=> setDislike(e.target.value)}/>
            </div>
            <button className='btn btn-success'>Update</button>
        </form>
    </div>

</div>
  )
}

export default UpdateMeme