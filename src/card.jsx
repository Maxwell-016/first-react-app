import profilePic from './assets/Dashatars.png'
/*A function component that returns a JSX element representing
 * a profile card containing a profile picture, name, and short
 * description.
 */
function Card(){
    return(
        <div className="card">
            <img className ="profilePic" src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Maxwell Ndungu</h2>
            <p>I study computer science and love coding</p>
        </div>
    );
}
export default Card