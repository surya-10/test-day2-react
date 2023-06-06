import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faStar, faLaptop, faArrowLeft, faTablet, faMobileScreen, faCaretDown, faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Component({data, count, setCount}){
  let [cart, setCart] = useState(true);
  let [type, setType] = useState("add");
  let [show, setShow] = useState(false)
    // console.log(data);
    function addTo(){
        setCart(!cart);
       setCount(count+1);
      
       
     }
     function removeFrom(){
       setCart(!cart);
       setCount(count-1);
     }
    return (
        <div className="App">
      
      <div className='products'>
       
  
          <div className='prod'>
            <div className='prod-img'>
              <img src={data.img}/>
              <h5>{data.name}</h5>
              <p>{data.rate}</p>
              
              
                {data.type=="strike" ? <p> <del style={{textDecoration:"line-through"}}>{data.price1}</del>{" "+data.price2} </p>: data.type=="join" ? <p>{data.price1}-{data.price2} </p>:<p>{data.price2} </p>}
              </div>
             
              <div className='btn-div'>
                {data.btn == "View options" ?<button>View options</button>: (data.btn=="Add to cart" && cart==true) ? <button onClick={addTo}>Add to cart</button>:<button onClick={removeFrom}>Remove</button>}
                
                
          </div>
          {data.sale ? <p className='sale'>Sale</p>:""}
          
          </div>
          
          
      </div>
      
    </div>
    )
}
export default Component;