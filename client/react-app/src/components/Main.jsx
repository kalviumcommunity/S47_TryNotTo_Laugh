import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Main = () => {

    const [data,setData] = useState([])

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

  return (
    <div>
        <div>
            <Link to='/form'>
                <button>Add your own meme</button>
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
                        <br/>
                    </div>
                    
                )
            })
        }
    </div>
  )
}

export default Main