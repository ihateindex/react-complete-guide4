import { React, useState } from 'react';
import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';
import ErrorModal from './components/UI/ErrorModal/ErrorModal';

function App() {
    const [userList, setUserList] = useState([]);
    const [error, setError] = useState('');
    const addUserHandler = (userData) => {
        setUserList((prevData) => {
            return [...prevData, userData];
        });
    };
    const errorHandler = (error) => {
        setError(error);
    };

    return (
        <div>
            <AddUser addUserHandler={addUserHandler} errorHandler={errorHandler}></AddUser>
            <UsersList userList={userList}></UsersList>
            {error && <ErrorModal error={error} errorHandler={errorHandler}></ErrorModal>}
        </div>
    );
}

export default App;
