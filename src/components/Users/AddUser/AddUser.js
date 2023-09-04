import { useState } from 'react';
import style from './AddUser.module.css';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

const INITIAL_FORM_DATA = {
    name: '',
    age: '',
};

const AddUser = (props) => {
    // TODO: 여기서 발생한 데이터를 App에게 콜백함수로 전달해야함
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (!formData.name || !formData.age) {
            // console.log('empty values');
            props.errorHandler('empty values');
            return false;
        }
        if (+formData.age <= 0) {
            // console.log('valid age');
            props.errorHandler('valid age');
            return false;
        }
        props.addUserHandler(formData);
        setFormData(INITIAL_FORM_DATA);
    };

    const inputChangeHandler = (input, value) => {
        setFormData((prevData) => {
            return {
                ...prevData,
                [input]: value,
            };
        });
    };

    return (
        <form onSubmit={onSubmitHandler} className={`${style['addUser']}`}>
            <Card>
                <div className={`${style['input']}`}>
                    <label htmlFor="userName">Username</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(event) => {
                            inputChangeHandler(event.target.id, event.target.value);
                        }}
                    />
                    <label htmlFor="userAge">Age (Years)</label>
                    <input
                        type="number"
                        id="age"
                        value={formData.age}
                        onChange={(event) => {
                            inputChangeHandler(event.target.id, event.target.value);
                        }}
                    />
                    <Button type="submit">Add User</Button>
                </div>
            </Card>
        </form>
    );
};

export default AddUser;
