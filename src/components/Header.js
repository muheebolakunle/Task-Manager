import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import Button from './Button';

const Header = ({title, onAddClick, showAddTask}) => {
    const location = useLocation()
    return (
        <header className="d-flex justify-content-between m-4 align-items-center p-auto mt-4">
            <h1>{title}</h1>
            { location.pathname ==='/' &&  
                <Button 
                    title={showAddTask ? 'Close' : 'Add'} 
                    color={showAddTask ? 'red' : 'green'} 
                    buttonClicked={onAddClick}/> 
            }
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
