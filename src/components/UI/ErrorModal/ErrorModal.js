import style from './ErrorModal.module.css';
import Button from '../Button/Button';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';

const ErrorModal = (props) => {
    const errorType = props.error;
    const [error, setError] = useState({
        title: 'Invalid input',
        massage: 'Please enter a valid name and age (non-empty values).',
    });
    useEffect(() => {
        console.log(errorType);
        if (errorType === 'empty values') {
            setError({
                title: 'Invalid input',
                massage: 'Please enter a valid name and age (non-empty values).',
            });
        }
        if (errorType === 'valid age') {
            setError({
                title: 'Invalid age',
                massage: 'Please enter a valid age (>0).',
            });
        }
    }, [errorType]);

    const modalCloseHandler = () => {
        props.errorHandler(null);
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
            <Card className={`${style['modal']}`}>
                <div className={`${style['header']}`}>
                    <h2>{error.title}</h2>
                </div>
                <div className={`${style['content']}`}>{error.massage}</div>
                <div className={`${style['actions']}`}>
                    <Button onClick={modalCloseHandler}>Okay</Button>
                </div>
            </Card>
        </div>
    );
};

export default ErrorModal;
