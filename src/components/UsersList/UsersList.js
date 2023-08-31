import style from './UsersList.module.css';
import Card from '../Card/Card';

const UsersList = (props) => {
    const userList = props.userList;
    return (
        userList.length !== 0 && (
            <div className={`${style['users']}`}>
                <Card>
                    <ul>
                        {userList.map((value, index) => {
                            console.log(value.name);
                            return (
                                <li key={index}>
                                    {value.name} ({value.age} years old)
                                </li>
                            );
                        })}
                    </ul>
                </Card>
            </div>
        )
    );
};

export default UsersList;
