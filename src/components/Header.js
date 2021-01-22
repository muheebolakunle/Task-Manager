import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {
    const buttonClicked = () =>{
        console.log("clicked");
    }
    return (
        <header className="d-flex justify-content-between m-2 align-items-center p-auto">
            <h1>{title}</h1>
            <Button title='Add' color='green' buttonClicked={buttonClicked}/>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
