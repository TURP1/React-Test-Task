import s from "./Button.module.css"
// buttonName="Sign up" type="submit" state="disabled"
function ButtonYellow(props) {
    if (props.type === "submit" && props.state === "disabled") {
        return (
            <button className={s.yellow_button_disabled + " " + props.className} type={props.type} disabled>
                <span className={s.typography}>
                    {props.buttonName}
                </span>
            </button>

        );
    }

    else if (props.type === "submit" && props.state !== "disabled") {
        return (
            <button className={s.yellow_button + " " + props.className} type={props.type}>
                <span className={s.typography}>
                    {props.buttonName}
                </span>
            </button>

        );
    }

    else return (
        <button className={s.yellow_button}>
            <span className={s.typography}>
                {props.buttonName}
            </span>
        </button>

    );

}

export default ButtonYellow;

