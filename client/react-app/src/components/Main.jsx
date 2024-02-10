import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Main = () => {

    const [data,setData] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        async function getai(){
            try{
                const res = await axios.get('http://localhost:4200/')
                console.log(res)
                setData(res.data)
            }catch(err){
                console.log(err)
            }
        }
        getai()
    },[])

    console.log(data)

    const handleDelete=(id)=>{
        console.log(id);
        axios.delete('http://localhost:4200/deleteUser/'+id)
        .then(res=>{
            console.log(res);
            window.location.reload()
        })
        .catch(err=> console.log(err))
    }

  return (
    <div>
        <div>
            <Link to='/form'>
                <button>Add your own meme</button>
            </Link>
            <Link to='/loginForm'>
                <button>Login</button>
            </Link>
        </div>
        {
            data.map((item)=>{
                return(
                    <div>
                        {item.Serial} <br/>
                        {item.Memes}
                        <div>
                            Like:{item.Like} <br/>
                            Dislike:{item.Dislike}
                        </div>
                        <button onClick={(e)=>handleDelete(item._id)}>Delete</button>
                        <button onClick={()=> navigate(`/update/${item._id}`,{state:{item}})}>Edit</button>
                        <br/>
                    </div>
                    
                )
            })
        }
    </div>
  )
}

export default Main