import propTypes, { number } from 'prop-types'
function List(props){
    const itemList = props.items;
    const category = props.category;
    console.log(category);

    //sorting the itemList alphabetically
    //itemList.sort((a,b)=> a.name.localeCompare(b.name));
    //to sort the list in reverse alphabetical order you just interchange the values a and b
    //itemList.sort((a,b)=> b.name.localeCompare(a.name));
    
    //sorting the list by calories in desceding order
    //itemList.sort((a,b)=> b.calories - a.calories);
    //to sort in ascsending order you just change the values of a and b
    //itemList.sort((a,b)=> a.calories - b.calories);

    //filtering the list according to the level of calories
    //const highCalories = itemList.filter(item => item.calories >= 100);

    const listItem = itemList.map(item => <li key={item.id}>{item.name}: &nbsp;<b>{item.calories}</b></li>);
    return(<><h3 className='list-title'>{category}</h3><ol className='list-body'>{listItem}</ol></>);
}
List.propTypes ={
    items: propTypes.array,
    category: propTypes.string
}
List.defaultProps = {
    items: [],
    category: 'Category'
}
export default List