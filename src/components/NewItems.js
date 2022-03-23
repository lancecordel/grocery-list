import AddItem from "./AddItem";

function NewItem(props){


    return(
        <>
        <div>
            {
                
                    
                    <div className="item">
                    <p>item: {props.item.item}</p>
                    <p>brand: {props.item.brand}</p>
                    <p>units: {props.item.units}</p>
                    <p>quantity: {props.item.quantity}</p>
        
                    {/* { props.added.isPurchased ? <p>status: Purchased</p> : <p>status: not purchased</p>} */}
                    </div>

            }
        </div>
        </>
    )
}

export default NewItem;