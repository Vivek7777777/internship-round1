import React, { useState } from "react";
import Top from "./Top";
import Price from "./Price";
import clock from "./../assets/timer.png";
import razorpay from "./../assets/Razorpay Icon.png";




function Payment() {
    const [finalCost, setFinalCost] = useState(149);
    
    let box1 = document.getElementById("mon12");
    let box2 = document.getElementById("mon6");
    let box3 = document.getElementById("mon3");
    
    let pay1 = document.getElementById("pay1");
    let pay2 = document.getElementById("pay2");
    let pay3 = document.getElementById("pay3");

    function allFalse(){
        box1.checked = false;
        box2.checked = false;
        box3.checked = false;
        pay1.classList.remove("active_subs");
        pay2.classList.remove("active_subs");
        pay3.classList.remove("active_subs");
    }
    
    function func1(x){
        setFinalCost(x);
        allFalse();
        box1.checked = true;
        pay1.classList.add("active_subs");
    }
    
    function func2(x){
        setFinalCost(x);
        allFalse();
        box2.checked = true;
        pay2.classList.add("active_subs");
    }
    
    function func3(x){
        setFinalCost(x);
        allFalse();     
        box3.checked = true;
        pay3.classList.add("active_subs");
    }
    
    return (
        <>
            <Top />

            <h3 className="select_subs">Select your subscription plan</h3>

            <div className="subs expired">
                <input type="radio" checked />        
                <Price 
                    content = "12 Months Subscription"
                    yearly_cost = "99"
                    monthly_cost = "8"
                />
            </div>

            <div onClick={() => { func1(179) }} className="subs expired offer " id="pay1">
                <input id="mon12" type="checkbox" />  
                <Price 
                    content = "12 Months Subscription"
                    yearly_cost = "179"
                    monthly_cost = "15"
                />
            </div>

            <div onClick={() => { func2(149) }} className="subs " id="pay2">
                <input id="mon6" type="checkbox" />        
                <Price 
                    content = "6 Months Subscription"
                    yearly_cost = "149"
                    monthly_cost = "25"
                />
            </div>

            <div onClick={() => { func3(99) }} className="subs " id="pay3">
                <input id="mon3" type="checkbox" />        
                <Price 
                    content = "3 Months Subscription"
                    yearly_cost = "99"
                    monthly_cost = "33"
                />
            </div>

            <hr />

            <div className="total_fee">
                <div className="total_fee_content">Subscription Fee</div>
                <div className="total_fee_amount">₹{finalCost + 18401}</div>
            </div>

            <div className="discount">
                <div className="total_fee discount_box1">
                    <div className="total_fee_content">Limited time offer</div>
                    <div className="total_fee_amount">- ₹18401</div>
                </div>
                <div className="discount_validity">
                    <img src={clock} alt="this" />
                    <div className="end_time">Offer valid till 25th March 2023</div>
                </div>
            </div>

            <div className="total_fee">
                <div className="total_fee_content final_content"> <span>Total</span> (Incl. of 18% GST)</div>
                <div className="total_fee_amount final_price"><span>₹{finalCost}</span></div>
            </div>

            <div className="pay_btn">
                <button className="btn1">CANCEL</button>
                <button className="btn2">PROCEED TO PAY</button>
            </div>

            <img className="razorpay" src={razorpay} alt="" />
        </>
    )
}

export default Payment;