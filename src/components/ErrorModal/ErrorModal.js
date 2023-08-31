import style from './ErrorModal.module.css';
import Button from '../Button/Button';

const ErrorModal = (props) => {
    const error = props.error;
    console.log(props);
    let errorMsg;
    if (error === 'empty values') {
        errorMsg = 'Please enter a valid name and age (non-empty values).';
    }
    if (error === 'valid age') {
        errorMsg = 'Please enter a valid age (>0).';
    }
    const modalCloseHandler = () => {
        props.errorHandler('');
    };
    return (
        <div
            className={`${style['backdrop']}`}
            onClick={(event) => {
                if (event.target === event.currentTarget) {
                    modalCloseHandler();
                }
            }}
        >
            <div className={`${style['modal']}`}>
                <div className={`${style['header']}`}>
                    <h2>Invalid input</h2>
                </div>
                <div className={`${style['content']}`}>{errorMsg}</div>
                <div className={`${style['actions']}`}>
                    <Button onClick={modalCloseHandler}>Okay</Button>
                </div>
            </div>
        </div>
    );
};

export default ErrorModal;
