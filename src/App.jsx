import Header from './header'
import Footer from './footer'
import Food from './food'

import Card from './card'
import Student from './student'
function App() {
  return (
    <>
    {/* <Header/> 
    <Food/>
    <Footer/> */}
    {/* <Card/> */}
    <Student name='Maxwell' age={18} isstudent={true}/>
    <Student name= 'Ndungu' age={19} isstudent={false}/>
    <Student name= 'Njoki' age= {39} isstudent={false}/>
    <Student/>
    </>
  )
}

export default App
