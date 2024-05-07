'use client'
import Image from "next/image";
import styles from "./page.module.css";
import './globals.css';
//import { drink } from "./database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faChevronCircleLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { drink } from "./database";
let count = 0;
let cartarr = [];
export default function Home() {
      let [text4user, Settext4user] = useState();
      let [display4content, SetSetdisplay4content] = useState();
      let [display4cart, Setdisplay4cart] = useState();

      //Total price;
      let [total, Settotal] = useState(0);
      let [discount, Setdiscount] = useState(0);
      let [subtotalUSD, SetsubtotalUSD] = useState(0);
      let [subtotalKHR, SetsubtotalKHR] = useState(0)
      let totalarr = [];
      let total4USD;
      let totalKHR;

      //THIS ONE IS USE FOR THE SELECTION SECTION THAT WE HAVE TO 
      //FILTERED THE ARRAY BASE ON THE CATEGLORY
      function drinkready4select(fliteredarray){
        let drinkready4 = fliteredarray.map((element) => {
          return(
                    <li className="li-con">
                <div className="img-test-con">
                {/*<Image width={100} height={50} className="img-test" src='/../picture/frappe/Passion_Frappe.png'></Image>*/}
                <Image className="img-test" src={element.url} alt="this is an image of drink" ></Image>
                </div>
                <div>
                    <h2 className="li-text" id="khmername-test" >{element.khmername}</h2>
                    <h2 className="li-text" id="name-test" >{element.name}</h2>
                    <h2 className="li-text" id="price-test" >{`${element.price} ៛`}</h2>
                    <button onClick={() => handlepushid1(element.id)} className="add-cart-test" >Add Cart</button>
                </div>
            </li>
          )}
        )
        while(true){
          Setfliteredarr(drinkready4);
          break
        }
      }
      function handleselection(){
        let selection = document.getElementById("selection-id").value;
      console.log(selection)
        if(selection === "none"){
          drinkready4select(drink)
        }
        else if(selection === "frappe"){
          let fliteredarr4frappe = drink.filter((element) => {
            return element.name.includes("Frappe")
          })
          drinkready4select(fliteredarr4frappe);
          console.log("none displayed");
        }
        else if(selection === "ice"){
          let fliteredarr4ice = drink.filter((element) => {
            return element.name.includes("Ice")
          })
          drinkready4select(fliteredarr4ice);
          console.log("ice displayed");
        }
        else if(selection === "hot"){
          let fliteredarr4hot = drink.filter((element) => {
            return element.name.includes("Hot")
          })
          drinkready4select(fliteredarr4hot);
          console.log("hot displayed");
        }
        else if(selection === "cream"){
          let fliteredarr4cream = drink.filter((element) => {
            return element.name.includes("Cream")
          })
          drinkready4select(fliteredarr4cream);
          console.log("cream displayed");
        }

        console.log("it works");
        console.log(selection)
      }
      // THIS SECTION BEFORE OUR FUNCTION WE CREATE AN ANOTHER CONVERTER 
      // WHICH SIMILAR TO OUR MAIN SYSTEM BUT THE PURPOSE OF THIS IS TO 
      // USE AS DEFAULT FOR OUR USESTATE()
      let drinkready1st = drink.map((element) => {
          return(
                    <li className="li-con">
                <div className="img-test-con">
                {/*<Image width={100} height={50} className="img-test" src='/../picture/frappe/Passion_Frappe.png'></Image>*/}
                <Image className="img-test" src={element.url} alt="this is an image of drink" ></Image>
                </div>
                <div>
                    <h2 className="li-text" id="khmername-test" >{element.khmername}</h2>
                    <h2 className="li-text" id="name-test" >{element.name}</h2>
                    <h2 className="li-text" id="price-test" >{`${element.price} ៛`}</h2>
                    <button onClick={() => handlepushid1(element.id)} className="add-cart-test" >Add Cart</button>
                </div>
            </li>
          )}
      )
      let [fliteredarr, Setfliteredarr] = useState(drinkready1st);
      function flitereddrink(e){
    
        //THIS SECTION IS WHERE WE COLLECT INPUT FROM SEARCH BAR
        // IN REAL TIME AND ALSO CONVERTED INTO LOWER CASE WHICH EASIER
        // FOR USER TO TYPE IN THERE DRINK WITHOUT ANY UNEXPECTED ERROR.
        let drinkvalue = e.target.value;
        let lowercasedrinkvalue = drinkvalue.toLowerCase();
        console.log(lowercasedrinkvalue);
        let fliteredarr = drink.filter((element) => {
          let lowercaseelement = element.name.toLowerCase();
          return lowercaseelement.includes(lowercasedrinkvalue);
        })
        //THIS SECTION IS WHERE OUR SECOND SYSTEM START THAT WE HAVE 
        //TO CONVERT OUR FLITERED ARRAY INTO AN HTML ELEMENT SO THAT WE CAN DISPLAY
        if(fliteredarr.length === 0){
          while(true){
            Settext4user("Sorry:^( We don't have that drink");
            Setfliteredarr(false)
            break
          }
          console.log("it working")
        }
        else {
          while(true){
            Settext4user("");
            break
          }
        
        let drinkready = fliteredarr.map((element) => {
            return(
                      <li className="li-con">
                  <div className="img-test-con">
                  {/*<Image width={100} height={50} className="img-test" src='/../picture/frappe/Passion_Frappe.png'></Image>*/}
                  <Image className="img-test" src={element.url} alt="this is an image of drink" ></Image>
                  </div>
                  <div>
                      <h2 className="li-text" id="khmername-test" >{element.khmername}</h2>
                      <h2 className="li-text" id="name-test" >{element.name}</h2>
                      <h2 className="li-text" id="price-test" >{`${element.price} ៛`}</h2>
                      <button onClick={() => handlepushid1(element.id)} className="add-cart-test" >Add Cart</button>
                  </div>
              </li>
            )}
          )
          //This section is where we display our output to user 
          //and we using while loop to stop useState from infinite loop.
          while(true){
            Setfliteredarr(drinkready);
            break
          }
        }
          //This section below is old Method that doesn't work which cause
         // a ton of infinite loop of useState();

    //ul.innerHTML = drinkready;
    //fliteredarr2 = drinkready;
    //console.log(fliteredarr2)
    //useEffect(() => {
      //Setfliteredarr(drinkarr);
      //console.log("hello")
    //}, [trigger]);
      }
      //THIS SECTION IS WHERE THE CART SYSTEM WERE
      let [displaydrinkincart, Setdisplaydrinkincart] = useState();
      function handlepushid1(elementid){

        let selectedelementarr = drink.filter((element) => {
          console.log(elementid)
          return element.id === elementid
        })
        console.log(selectedelementarr)
        let selectedelement = selectedelementarr[0];
        cartarr.push(selectedelement)
        console.log(cartarr);
      }
      function handledelete(elementname){
        console.log(elementname)
        let findcartarr = cartarr.find((element) => {
          if(element.name === elementname){
            return cartarr.filter((element) => {
              return element.name === elementname
            })
          }
        })
        let findcartarrvalue = findcartarr.id
        console.log(findcartarrvalue)
        let cartarrindex = cartarr.findIndex((element) => {
          return element.id === findcartarrvalue
        });
        console.log(cartarrindex);
        //NOW WHEN WE GET INDEX OF SELECTED ARRAY WE CAN USE OLD METHOD TO REMOVE IT
        cartarr.splice(cartarrindex, 1)
        console.log(cartarr)
        //OUR SYSTEM ALREADY DELETED AN ELEMENT OF ARRAY

        //THIS SYSTEM BELOW WE HAVE TO MAKE IT RENDER SO THAT OUR NEW ARRAY CAN BE DISPLAY USING MAIN SYSTEM\
        handlecart();
        setTimeout(() => {
          handlecart();
        }, 100);
        
      }
      function handlecart(){
        count++;
        if(count % 2 === 0){
          SetSetdisplay4content("show");
          Setdisplay4cart("hide")
        }
        else{
          SetSetdisplay4content("hide");
          Setdisplay4cart("show")
          console.log(cartarr)

          let filtered4cart = cartarr.map((element) => {
            return(<>

        <li className="checkout-li-test-con"> 
          <div className="newdelete-btn"><button onClick={() => {handledelete(element.name)}} id="newdelete-btn-id">Delete</button></div>
          <div className="checkout-li-test">
                <h4 id="item-name" >{element.name}</h4>
                <h4 id="qty" >1</h4>
                <span className="price-con" >
                    <h4 id="price" >{`${element.price}​ ៛`}</h4>
                </span>
            </div>
        </li>
            
          
            </>)
          })
          //TOTAL PRICE SYSTEM WERE HERE
          
          let totalpricearr = cartarr.map((element) => {
            return element.price
          })
          console.log(totalpricearr);
          let totalprice;
          if(totalpricearr.length !== 0){
            totalprice = totalpricearr.reduce((a,b) => {
              return a + b
            })
          }
          
          console.log(totalprice);
          //DISCOUNT SYSTEM WERE ON FUNCTION CALLED handlediscount

          //SUB TOTAL SYSTEM WERE HERE 
          total4USD = (totalprice - discount) / 4000;
          totalKHR = Math.floor(totalprice - discount)
          console.log(total4USD)

          //DISPLAY SYSTEM WERE HERE
          while(true){
            Setdisplaydrinkincart(filtered4cart);
            if(cartarr.length === 0){
            Settotal("0");
            SetsubtotalUSD("0");
            SetsubtotalKHR("0"); 
            console.log("KILOZINB IS HERTE")
            }
            else {
            Settotal(totalprice);
            SetsubtotalUSD(total4USD);
            SetsubtotalKHR(totalKHR);
            }
            break
          }
        }
      }
      function handlediscount(totalprice){
        let ask4pass = window.prompt("Please enter a password")
        if(ask4pass === "maritacute"){
          let ask4dis = window.prompt("how many % you want to discount?")
          ask4dis = Number(ask4dis);
          if(isNaN(ask4dis)){
            window.alert("Please insert the amount in percentage %")
          }
          else{
            let discountvalue = Math.floor(ask4dis/100 * totalprice)
            console.log(discountvalue);
            let newtotal4USD = (totalprice - discountvalue) / 4000;

            let newtotal4KHR = Math.floor(totalprice - discountvalue)
            while(true){
              Setdiscount(discountvalue);
              SetsubtotalUSD(newtotal4USD);
              SetsubtotalKHR(newtotal4KHR);
              break
            }
          }
        }
        else {
          window.alert("Wrong password, Please try again")
        }
      }
      function handlereset(){
        cartarr.splice(0,cartarr.length);
        console.log('it working lol');
        while(true){
          Setdiscount("0");
          Settotal("0");
          SetsubtotalKHR("0");
          SetsubtotalUSD("0");
          handlecart();
          break
        }
      }
  
  return (<>
  <div className={`fromsearchbar-con ${display4content}`}>
  <div className="header-con" >
    <h1 className="header-title" >Marita Cafe</h1>
    <div className="header-icon-cart" >
      <FontAwesomeIcon onClick={handlecart} size="2x" id="cart-icon" icon={faCartShopping}></FontAwesomeIcon>
    </div>
  </div>
  
        <div className="searchbar-con">
          <input className="searchbar" onChange={flitereddrink} ></input>
          <div className="search-icon-con">
            <FontAwesomeIcon className="search-icon" icon={faSearch} size="fa-2x"></FontAwesomeIcon>
          </div>
        </div>
        <br/>
        <div className={`category-section`} >
          <label>Category</label>
          <div className="selection-con">
            <select id="selection-id" className="selection" onChange={handleselection} >
              <option value="none" id="none-opt" >None</option>
              <option value="frappe" id="Frappe-opt" >Frappe</option>
              <option value="ice" id="Ice-opt" >Ice</option>
              <option value="hot" id="Hot-opt" >Hot</option>
              <option value="cream" id="Cream-opt" >Cream</option>
            </select>
          </div>
        </div>
        <div className="main-ul-con">
          <div className="alert-user-404-insearch" >
            <p>{text4user}</p>
          </div>
            <ul className="ul-con" >
              {fliteredarr}
            </ul>
        </div>
  </div>
    <div className={`cart-section-test ${display4cart}`}>
    <div className="header-cart" >
      <div className="checkout-reset-property">
        <button onClick={handlereset} className="checkout-reset-btn"  >Reset</button>
      </div>
          <h1 className="header-cart-title" >Check out</h1>  
          <FontAwesomeIcon onClick={handlecart} size="2x" id="arrowback-icon" icon={faChevronCircleLeft}></FontAwesomeIcon>
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
          {displaydrinkincart}
        </ul>
      </section>
      <br/>
        <div className="seperate-line"></div>
      <br/>
        <div className="total-main-con">
          <div className="checkout-discount-btn-con" >
            <button onClick={() => {handlediscount(total)}} className="checkout-discount-btn" >Discount</button>
          </div>
          <div className="checkout-total">
              <div className="checkout-total-left" >
                    <h3 className="checkout-sub-text" >Total</h3>
                    <h3 className="checkout-sub-text" >Discount</h3>
                    <h3 >{`Sub Total (USD)`}</h3>
                    <h3 >{`Sub Total (KHR)`}</h3>
              </div>
              <div className="checkout-total-right" >
                    <h3 className="checkout-sub-text total-text-right">{`${total} ៛`}</h3>
                    <h3 className="checkout-sub-text total-text-right" >{`${discount} ៛`}</h3>
                    <h3 className="total-text-right">{`${subtotalUSD} $`}</h3>
                    <h3 className="total-text-right">{`${subtotalKHR} ៛`}</h3>
              </div>
            </div>
            </div>
      </div>
      <br/>
      <div className="checkout-thankyou" >
        <h4>Thank you for choosing us! See you again soon</h4>
      </div>
    </div>
  </>
  );
}
