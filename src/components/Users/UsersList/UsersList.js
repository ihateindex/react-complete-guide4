import style from './UsersList.module.css';
import Card from '../../UI/Card/Card';

const UsersList = (props) => {
    const userList = props.userList;
    return (
        userList.length !== 0 && (
            <Card className={`${style['users']}`}>
                <ul>
                    {userList.map((value, index) => {
                        return (
                            <li key={index}>
                                {value.name} ({value.age} years old)
                            </li>
                        );
                    })}
                </ul>
            </Card>
        )
    );
};

export default UsersList;
