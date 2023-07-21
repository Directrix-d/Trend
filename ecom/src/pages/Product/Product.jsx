import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch"
import {useParams} from "react-router-dom"
import { envior } from '../../constant';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
const Product = () => {
  const id = useParams().id;

  const[selectedImg, setSelectedimg] = useState("img");
  const[quantity,setquantity] = useState(1);
  const dispatch = useDispatch();
  const {data, loading, error} = useFetch(
    `/products/${id}?populate=*`

  );

  return (
   <div className="product">
    {loading ? "loading" :(<><div className="left">
      <div className="images">
        <img src = {envior.REACT_APP_UP_URL +data?.attributes?.img?.data?.attributes?.url} onClick={e=>setSelectedimg("img")}/>

        <img src = {envior.REACT_APP_UP_URL+data?.attributes?.img2?.data?.attributes?.url} onClick={e=>setSelectedimg("img2")}/>
      </div>
      <div className="mainImg">
      <img src = {envior.REACT_APP_UP_URL+data?.attributes[selectedImg].data?.attributes?.url}/>
      </div>
    </div>
    <div className="right">
      <h1>{data?.attributes?.title}
      </h1>
      <span className='price'>RS. {data?.attributes?.price}</span>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quo iure ratione quod asperiores tempora minima facilis soluta officia autem commodi fuga tempore ea assumenda in, praesentium debitis saepe eum.</p>
      <div className="quantity">

      <button onClick={()=>setquantity((prev)=>prev===0?0:prev-1 )}>-</button>
      {quantity}
      <button onClick={()=>setquantity((prev)=>prev+1)}>+</button>
      </div>
      <button className="add"  onClick={()=>dispatch(addToCart({
        id: data.id,
        title: data.attributes.title,
        desc: data.attributes.desc,
        price: data.attributes.price,
        img: data.attributes.img.data.attributes.url,
        quantity,
      }))}> <AddShoppingCartIcon />ADD TO CART</button>
      <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
    </div></>)}
   </div>
  )
}

export default Product