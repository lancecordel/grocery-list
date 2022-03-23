import Item from './Item';
import items from '../data/items.json';
import NewItem from './NewItems';

function Main2(){

    return(
        <div>
            {
                items.map((item, index) => {
                    return <NewItem item={item} key={index}/>
                })
            }
        </div>
    )
}

export default Main2;