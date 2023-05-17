import Spinner from 'react-bootstrap/Spinner';
import './Loader.css';

function Loader() {
    return (
        <div className='position-absolute top-50 start-50 backDrop'>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default Loader;