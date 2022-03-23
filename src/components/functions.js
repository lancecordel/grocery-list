import items from '../data/items.json';


    const addItem = (e) => {
        
        if(e.target.previousSibling.value !== ''
        && e.target.previousSibling.previousSibling.value !== ''
        && e.target.previousSibling.previousSibling.previousSibling.value !== ''
        && e.target.previousSibling.previousSibling.previousSibling.previousSibling.value !== ''){
            items.push(
                {
                'item': e.target.previousSibling.value, 
                'brand': e.target.previousSibling.previousSibling.value,
                'units': e.target.previousSibling.previousSibling.previousSibling.value,
                'quantity': e.target.previousSibling.previousSibling.previousSibling.previousSibling.value
            }) 
            console.log(items)  
        }   
    }  

export default addItem;