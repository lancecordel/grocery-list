import { useState } from "react";
import Main from "./Main";
import items from '../data/items.json';
// import list from "../data/list";


function Item(props){
    const [item, setItem] = useState(items);
    

    return(
        <>
        {
            // props.item.isPurchased ? 
        <div className="item">
            <p>item: {props.item.item}</p>
            <p>brand: {props.item.brand}</p>
            <p>units: {props.item.units}</p>
            <p>quantity: {props.item.units}</p>

            {/* { props.item.isPurchased ? <p>status: Purchased</p> : <p>status: not purchased</p>} */}
        </div>
        // :null
        }
    
        </>
    )
}

export default Item;