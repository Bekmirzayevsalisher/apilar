import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Getpors.css'


function Getpors({setData}) {
    const [value, setValue] = useState({name:'', year:'', price:'', url:'', color:""})
    const [validateName, setValidateName]=useState(false)
    const [validatePrice, setValidatePrice]=useState(false)
    const [validateYear, setValidateYear]=useState(false)
    const [validateColor, setValidateColor]=useState(false)
    const [validateUrl, setValidateUrl]=useState(false)


   

    const handleSubmit=(e)=>{
        // e.prventDefault()
        if(value.name === ""){
          setValidateName(true)
        }
         else if(value.price === ""){
          setValidatePrice(true)
        }
         else if(value.year === ""){
          setValidateYear(true)
        }
        else if(value.color === ""){
          setValidateColor(true)
        }
        else if(value.url === ""){
          setValidateUrl(true)
        }
        else(
          axios.post("http://localhost:3000/cars" ,{
            "name": value.name,
            "year": value.year,
            "price": value.price,
            "color": value.color,
            "url":value.url
            
            

        }).then((res)=>{
          setValue({name:'', year:'', price:'', color:'',url:''})
          axios.get('http://localhost:3000/cars')
          .then((res)=>{
           
            setData(res.data)
            
          })
          
        })

        )
        


        

    }
    console.log(value)
  return (
    <div className='Getpors' >

        <form onSubmit={handleSubmit}>
         

          <h3>Admin</h3>
            <div>
                <p>Marka</p>
                <input value={value.name} onChange={(e) => setValue({...value, name: e.target.value})} type="text" />
                {validateName&&<h2 className='tex'>empty</h2>}
            </div>
            <div>
                <p>price</p>
                <input value={value.price}  onChange={(e) => setValue({...value, price: e.target.value})} type="number" />
                {validatePrice&&<h2 className='tex'>null</h2>}
            </div>

            <div>
              <p>img url</p>
              <input  value={value.url} onChange={e=> setValue( { ...value, url: e.target.value } )} type="text" placeholder='Image URL' />
              {validateUrl&&<h2 className='tex'>no img!</h2>}
            </div>
            <div>
                <p>year</p>
                <input value={value.year}  onChange={(e) => setValue({...value, year: e.target.value})} type="number" />
                {validateYear&&<h2 className='tex'>null</h2>}
            </div>
            <div>
                <p>color</p>
                <input type= 'color' value={value.color}  onChange={(e) => setValue({...value, color: e.target.value})} type="text" />
                {validateColor&&<h2 className='tex'>null</h2>}
            </div>
           
            <div >
                 <button  className='Admin-Addbtn'>submit</button> 
            </div>
        </form>
    </div>
  )
}

export default Getpors