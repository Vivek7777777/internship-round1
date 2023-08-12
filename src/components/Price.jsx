import React from "react";

function Price(props) {
    return (
        <>
            <div className="duration">
                {props.content}
            </div>
            <div className="price">
                <div className="total">
                    Total <span>₹{props.yearly_cost}</span>
                </div>
                <div className="monthly">
                    <span>₹{props.monthly_cost}</span> /mo
                </div>
            </div>
        </>
    )
};

export default Price;