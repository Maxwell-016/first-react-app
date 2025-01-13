import propTypes from 'prop-types'

// using props to pass data to components
function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isstudent ? 'Yes' : 'No'}</p>
        </div>
    );
}

//setting up prop types for the different props passed to the student component
Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isstudent: propTypes.bool
}

//setting up default props for the different props passed to the student component
Student.defaultProps = {
    name: 'Guest',
    age: 0,
    isstudent: false
}

export default Student