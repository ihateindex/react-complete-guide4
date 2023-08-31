import { React, useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import UsersList from './components/UsersList/UsersList';
import ErrorModal from './components/ErrorModal/ErrorModal';

function App() {
    const [userList, setUserList] = useState([]);
    const [error, setError] = useState('');
    const addUserHandler = (userData) => {
        console.log(userData);
        setUserList((prevData) => {
            return [...prevData, userData];
        });
        console.log(userList);
    };
    const errorHandler = (error) => {
        console.log(error);
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
