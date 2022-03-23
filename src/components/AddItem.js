import { useState } from "react";
import addItem from "./functions";
import Item from "./Item";
import items from '../data/items.json';


function AddItem(props){

    const [item, setitem] = useState(items)

 
    return(
        <div className="additem">
            <div>
            <p>item: </p> 
            <p>brand: </p> 
            <p>units: </p> 
            <p>quantity: </p> 
            </div>
            <div id='inputDiv'>
            <input className="addinput"  type='text' placeholder="...add item"/>
            <input className="addinput" type='text' placeholder="...add item"/>
            <input className="addinput" type='text' placeholder="...add item"/>
            <input className="addinput" type='text' placeholder="...add item"/>
            <button onClick={addItem}>add item</button>

            </div>
            <div>
            </div>
            
        </div>
    )
}

export default AddItem;