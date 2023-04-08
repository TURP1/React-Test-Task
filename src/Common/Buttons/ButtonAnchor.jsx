import s from "./Button.module.css"



function ButtonYellowAnchor(props) {

    return (
        <a href={`#${props.anchor}`}>
            <button className={s.yellow_button}>
                <span className={s.typography}>
                    {props.buttonName}
                </span>
            </button>
        </a>
    );

}

export default ButtonYellowAnchor;

