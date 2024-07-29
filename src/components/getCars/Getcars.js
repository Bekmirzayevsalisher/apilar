import { useEffect, useState } from "react";
import axios from 'axios'
import './Getcars.css'
import { Link } from "react-router-dom";
// import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import{FaStar} from'react-icons/fa';




function Getcars({setData, data}) {
  
  const [deleteMathod, setDeleteMathod] = useState("")

  


 
//   const [data,setData]= useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/cars')
    .then((res)=>{
     
      setData(res.data)
      
    })

  },[])

  const handleDelete = (id)=>{
    axios.delete('http://localhost:3000/cars/'+id)
    .then((res)=>{
      axios.get('http://localhost:3000/cars')
      .then((res)=>{
       
        setData(res.data)
        
      })
     
      
      
    })

  }
  
 
  return (
    <>



    <div className="Getcars">

<div className="soxta">
<div className="product-img">
           <img className="product-item-img" ></img>
          </div>
      <div className="yozuv">
      <div className="product-name">
          <h3>Name:</h3>
          <h2>damas</h2>
          </div>
          <div className="product-price">
          <h3>price:</h3>
          <h3>9000$</h3>
          </div>
          <div className="product-year">
            <h3>year:</h3>
          <h3>2024</h3>
          </div>
          <div className="product-color">
            <h3>color:</h3>
          <p></p>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>  
          <FaStar className="star"/>
         
          </div>
          <div className="dale">
             <MdDelete  className="md"/>
          </div>
        </div>    
</div>
<div className="soxta">
<div className="product-img">
           <img className="product-item-img" ></img>
          </div>
      <div className="yozuv">
      <div className="product-name">
          <h3>Name:</h3>
          <h2>damas</h2>
          </div>
          <div className="product-price">
          <h3>price:</h3>
          <h3>9000$</h3>
          </div>
          <div className="product-year">
            <h3>year:</h3>
          <h3>2024</h3>
          </div>
          <div className="product-color">
            <h3>color:</h3>
          <p></p>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>  
          <FaStar className="star"/>
         
          </div>
          <div className="dale">
             <MdDelete  className="md"/>
          </div>
        </div>    
</div>
<div className="soxta">
<div className="product-img">
           <img className="product-item-img" ></img>
          </div>
      <div className="yozuv">
      <div className="product-name">
          <h3>Name:</h3>
          <h2>damas</h2>
          </div>
          <div className="product-price">
          <h3>price:</h3>
          <h3>9000$</h3>
          </div>
          <div className="product-year">
            <h3>year:</h3>
          <h3>2024</h3>
          </div>
          <div className="product-color">
            <h3>color:</h3>
          <p></p>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>  
          <FaStar className="star"/>
         
          </div>
          <div className="dale">
             <MdDelete  className="md"/>
          </div>
        </div>    
</div>
<div className="soxta">
<div className="product-img">
           <img className="product-item-img" ></img>
          </div>
      <div className="yozuv">
      <div className="product-name">
          <h3>Name:</h3>
          <h2>damas</h2>
          </div>
          <div className="product-price">
          <h3>price:</h3>
          <h3>9000$</h3>
          </div>
          <div className="product-year">
            <h3>year:</h3>
          <h3>2024</h3>
          </div>
          <div className="product-color">
            <h3>color:</h3>
          <p></p>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>  
          <FaStar className="star"/>
         
          </div>
          <div className="dale">
             <MdDelete  className="md"/>
          </div>
        </div>    
</div>
<div className="soxta">
<div className="product-img">
           <img className="product-item-img" ></img>
          </div>
      <div className="yozuv">
      <div className="product-name">
          <h3>Name:</h3>
          <h2>damas</h2>
          </div>
          <div className="product-price">
          <h3>price:</h3>
          <h3>9000$</h3>
          </div>
          <div className="product-year">
            <h3>year:</h3>
          <h3>2024</h3>
          </div>
          <div className="product-color">
            <h3>color:</h3>
          <p></p>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>  
          <FaStar className="star"/>
         
          </div>
          <div className="dale">
             <MdDelete  className="md"/>
          </div>
        </div>    
</div>



       
     
    {
      data.map((item, index)=>{
        return(
           
      

        
      
        <div className="product" >
          <div className="product-img">
           <img className="product-item-img" src={item.url}></img>
          </div>
          <div className="product-second">
          <div className="product-name">
          <h3>Name:</h3>
          <h1>{item.name}</h1>
          </div>
          <div className="product-price">
          <h3>price:</h3>
          <p>{item.price}$</p>
          </div>
          <div className="product-year">
            <h3>year:</h3>
          <p>{item.year}</p>
          </div>
          <div className="product-color">
            <h3>color:</h3>
          <p>{item.color}</p>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          <FaStar className="star"/>
          </div>
          <div className="product-delete">
            <button onClick={()=>handleDelete(item.id)}>
                <MdDelete />
            </button>
          </div>
          </div>

        </div>
        
        
        
        
        )

      })
    }
    
   
    </div></>
    
  );
}

export default Getcars;