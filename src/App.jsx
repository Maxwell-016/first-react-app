import Header from './header'
import Footer from './footer'
import Food from './food'

import Card from './card'
import Student from './student'
import List from './list'
import Button from './button'
function App() {

  // const fruits = [  {id: 1,name: 'Orange',calories: 25},
  //                   {id: 2,name: 'Banana',calories: 50},
  //                   {id: 3,name: 'Apple',calories: 100},
  //                   {id: 4,name: 'Pineapple',calories: 200},
  //                   {id: 5,name: 'Watermelon',calories: 300},
  //                 ]
  // const vegetables = [  {id: 6,name: 'Potato',calories: 25},
  //                       {id: 7,name: 'Onion',calories: 50},
  //                       {id: 8,name: 'Tomato',calories: 13},
  //                       {id: 9,name: 'Cabbage',calories: 15},
  //                       {id: 10,name: 'Carrot',calories: 45},
  //                     ]
  return (
    <>
    {/* <Header/> 
    <Food/>
    <Footer/>
    <Card/>
    <Student name='Maxwell' age={18} isstudent={true}/>
    <Student name= 'Ndungu' age={19} isstudent={false}/>
    <Student name= 'Njoki' age= {39} isstudent={false}/>
    <Student/> */}

    {/* checking that the list is not empty */}
    
    {/* checking that the fruits list is not empty using ternary operator */}
    {/* {fruits.length > 0 ?<List items={fruits} category='Fruits'/> : null} */}

    {/* checking that the vegetables list is not empty using short circuit */}
    {/* {vegetables.length > 0 &&<List items={vegetables} category='Vegatables'/>} */}

    <Button/>
    </>
  )
}

export default App
