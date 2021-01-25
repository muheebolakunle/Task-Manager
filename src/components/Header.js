import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, onAddClick, showAddTask}) => {
    return (
        <header className="d-flex justify-content-between m-2 align-items-center p-auto">
            <h1>{title}</h1>
            {showAddTask ? 
                <Button title='Close' color='red' buttonClicked={onAddClick}/> :
                <Button title='Add' color='green' buttonClicked={onAddClick}/>
            }
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
