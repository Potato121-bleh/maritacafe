import { drink } from "../database"
import Image from "next/image"
import './../globals.css'
import pic from './../picture/frappe/Passion_Frappe.png'
//import { drink } from "./database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faChevronCircleLeft, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function test(){
    
    return(<>
    <div className={`cart-section-test-zin`}>
      <div className="header-cart" >
        <button id="checkout-reset-btn" >Reset</button>
          <h1 className="header-cart-title" >Check out</h1>  
      </div>
      <div className="body-cart">
        <section className="body-head">
          <h2 id="bodyhead-text1" >Marita Cafe</h2>
          <h3 id="bodyhead-text2" >Sangkat Ta Kdol, Ta Khmau, Cambodia</h3>
        </section>
      <br/>
        <section className="title-receipt-con" >
          <div className="title-receipt">
            <h3 id="title-receipt-text1" >Item Name</h3>
            <h3 id="title-receipt-text2" >Qty</h3>
            <h3 id="title-receipt-text3" >Price</h3>
          </div>
        </section>
      <section>
        <ul className="checkout-ul-test-con" >
        
          <li className="checkout-li-test-con"> 
          <div className="newdelete-btn"><button id="newdelete-btn-id">Delete</button></div>
          <div className="checkout-li-test">
                <h4 id="item-name" >Passsion Cream</h4>
                <h4 id="qty" >1</h4>
                <span className="price-con" >
                    <h4 id="price" >5000៛</h4>
                </span>
            </div>
{            /*<div className="test-text" ><p id="checkout-delete-test">Delete</p></div>*/
}          </li>
<li className="checkout-li-test-con"> 
          <div className="newdelete-btn"><button id="newdelete-btn-id">Delete</button></div>
          <div className="checkout-li-test">
                <h4 id="item-name" >Passsion Cream</h4>
                <h4 id="qty" >1</h4>
                <span className="price-con" >
                    <h4 id="price" >5000៛</h4>
                </span>
            </div>
{            /*<div className="test-text" ><p id="checkout-delete-test">Delete</p></div>*/
}          </li>
<li className="checkout-li-test-con"> 
          <div className="newdelete-btn"><button id="newdelete-btn-id">Delete</button></div>
          <div className="checkout-li-test">
                <h4 id="item-name" >Passsion Cream</h4>
                <h4 id="qty" >1</h4>
                <span className="price-con" >
                    <h4 id="price" >5000៛</h4>
                </span>
            </div>
{            /*<div className="test-text" ><p id="checkout-delete-test">Delete</p></div>*/
}          </li>
<li className="checkout-li-test-con"> 
          <div className="newdelete-btn"><button id="newdelete-btn-id">Delete</button></div>
          <div className="checkout-li-test">
                <h4 id="item-name" >Passsion Cream</h4>
                <h4 id="qty" >1</h4>
                <span className="price-con" >
                    <h4 id="price" >5000៛</h4>
                </span>
            </div>
{            /*<div className="test-text" ><p id="checkout-delete-test">Delete</p></div>*/
}          </li>
        </ul>
      </section>
      <br/>
        <div className="seperate-line"></div>
      <br/>
        <section className="checkout-total-con">
            <div className="checkout-total">
                <div className="checkout-total-left" >
                    <h3 className="checkout-sub-text" >Total</h3>
                    <h3 className="checkout-sub-text" >Discount</h3>
                    <h3 >{`Sub Total (USD)`}</h3>
                    <h3 >{`Sub Total (KHR)`}</h3>
                </div>
                <div className="checkout-total-right" >
                    <h3 className="checkout-sub-text total-text-right">15000៛</h3>
                    <h3 className="checkout-sub-text total-text-right" >0៛</h3>
                    <h3 className="total-text-right">3.75$</h3>
                    <h3 className="total-text-right">15000៛</h3>
                </div>
            </div>
        </section>
      </div>
      <br/>
      <div className="checkout-thankyou" >
        <h4>Thank you for choosing us! See you again soon</h4>
      </div>
    </div>
    </>)
}