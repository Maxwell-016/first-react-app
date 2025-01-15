
function Button(){
    const handleClick = (e) => {
        e.target.textContent = 'Clicked';
    };
    const handleClick2 = (e) => {
        e.target.style.backgroundColor = 'red';
        e.target.style.color = 'white';
       // e.target.style.display = 'none';
    }
    return(
        // if you want to do something with the event handler, you can pass it as a parameter to the onClick attribute of the button element.
        // you can also do onDoubleClick instead of onClick
        <button onClick={handleClick2}>Click Me 😁</button>
    );
}
export default Button