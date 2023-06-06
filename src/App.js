import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faStar, faLaptop, faArrowLeft, faTablet, faMobileScreen, faCaretDown, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { useRef, useState } from 'react';
import Component from './comp/comp';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let navRef = useRef()
  let flag=true;
  function showAll(){
    let btns = document.querySelector(".btns");
    let cartBtn = document.querySelector(".cart-btn");
    console.log(btns.className);
    console.log(cartBtn.className);
    if((btns.className==="btns") && (cartBtn.className==="cart-btn")){
      btns.className+=" btns1";
      cartBtn.className+=" cart-btn1";
    }
    else{
      btns.className="btns";
      cartBtn.className="cart-btn";
    }
  }

  let [count, setCount] = useState(0);
  let [cart, setCart] = useState(true);
  let [type, setType] = useState("add");
  console.log(count)
  let data=[
    {
      img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sale:"",
      name:"Fancy Product",
      rate:"",
      type:"join",
      price1:"$40.00",
      price2:"$80.00",
      btnType:"",
      btnOpt:"not btn",
      btn:"View options",
      btn2:""
    },
    {
      img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sale:"sale",
      name:"Special Item",
      rate:"⭐⭐⭐⭐⭐",
      type:"strike",
      price1:"$20.00",
      price2:" $18.00",
      btnType:"add",
      btn:"Add to cart",
      btn2:"Remove"
    },
    {
      img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sale:"sale",
      name:"Sale Item",
      rate:"",
      type:"strike",
      price1:"$50.00",
      price2:"$25.00",
      btnType:"add",
      btn:"Add to cart",
      btn2:"Remove"
    },
    {
      img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sale:"",
      name:"Popular item",
      rate:"⭐⭐⭐⭐⭐",
      type:"one",
      price1:"",
      price2:"$40.00",
      btnType:"add",
      btn:"Add to cart",
      btn2:"Remove"
    },
    {
      img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sale:"sale",
      name:"Sale Item",
      rate:"",
      type:"strike",
      price1:"$50.00",
      price2:"$25.00",
      btnType:"add",
      btn:"Add to cart",
      btn2:"Remove"
    },
    {
      img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sale:"",
      name:"Fancy Product",
      rate:"",
      type:"join",
      price1:"$120.00",
      price2:"$280.00",
      btnOpt:"not btn",
      btn:"View options",
      btn2:""
    },
    {
      img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sale:"sale",
      name:"Special Item",
      rate:"⭐⭐⭐⭐⭐",
      type:"strike",
      price1:"$20.00",
      price2:"$18.00",
      btnType:"add",
      btn:"Add to cart",
      btn2:"Remove"
    },
    {
      img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sale:"",
      name:"Popular item",
      rate:"⭐⭐⭐⭐⭐",
      type:"one",
      price1:"",
      price2:"$40.00",
      btn:"Add to cart",
      btn2:"Remove"
    }
  ]
let [show, setShow] = useState(false);
console.log(count)
  return (
    <div className='app-div'>
      <div className='inside-app'>
      <div className='nav'>
        <h4>Start Bootstrap</h4>
        <div className='btns'>
          <div>
          <button>Home</button>
          </div>
          <div>
          <button className='light'>About</button>
          </div>
          <div className='dropdown'>
            <div className='dropdown-btn light' onClick={()=>setShow(!show)}>Shop<FontAwesomeIcon icon={faCaretDown}/></div>
            {show  && (
            <div className='dropdown-content'>
              <div className='dropdown-item first'>
                Popular Items
              </div>
              <div className='dropdown-item second'>
                All Products
              </div>
              <div className='dropdown-item third'>
                New Arrivals
              </div>
            </div>
            )}
          </div>
          </div>
          </div>
      <div className='cart-btn'>
        <button><FontAwesomeIcon className='icon' icon={faCartShopping}/>  Cart
        <span>{count}</span></button>
      </div>
      <div className='menu-bar'>
        <button onClick={showAll}>
      <FontAwesomeIcon className='icon' icon={faBars}/>
      </button>
      </div>

      </div>
      <div className='img'>
        <p className='img-header'>Shop in style</p>
        <p className='normal'>With this shop hompeage template</p>
      </div>
      <div className='data-comp'>
      <Component
      data={data[0]}
      count={count}
      setCount={setCount}
      />
       <Component
      data={data[1]}
      count={count}
      setCount={setCount}
      />
       <Component
      data={data[2]}
      count={count}
      setCount={setCount}
      />
       <Component
      data={data[3]}
      count={count}
      setCount={setCount}
      />
       <Component
      data={data[4]}
      count={count}
      setCount={setCount}
      />
       <Component
      data={data[5]}
      count={count}
      setCount={setCount}
      />
       <Component
      data={data[6]}
      count={count}
      setCount={setCount}
      />
       <Component
      data={data[7]}
      count={count}
      setCount={setCount}
      />
      </div>
      <div className='footer'>
        <p>Copyright &copy; Your Website 2023</p>
      </div>
      
          

       
    </div>
  );
}

export default App;
