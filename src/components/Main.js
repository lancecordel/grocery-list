import Item from './Item';
import items from '../data/items.json';

function Main(){

    return(
        <div>
            {
                items.map((item, index) => {
                    return <Item item={item} key={index}/>
                })
            }
        </div>
    )
}

export default Main;