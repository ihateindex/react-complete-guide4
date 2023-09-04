import style from './Button.module.css';

const Button = (props) => {
    // const onClickHandler = (value) => {
    //     if (props.onClick) {
    //         props.onClick(value);
    //     }
    // };
    return (
        <button
            className={`${style['button']}`}
            type={props.type ? props.type : 'button'}
            onClick={(event) => {
                if (props.onClick) {
                    props.onClick(event.target.value);
                }
            }}
        >
            {props.children}
        </button>
    );
};

export default Button;
