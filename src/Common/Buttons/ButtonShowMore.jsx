import s from "./Button.module.css"


function ButtonShowMore(props) {
    const scrollTo = document.querySelector("#scrollTO")
    let buttonHandler = () => {
        setTimeout(() => {
            scrollTo.scrollIntoView({ block: "end", top: 300 });
        }, 500)
    }

    return (
        <button id="showMore" className={s.yellow_button + " " + s.mb50} onClick={buttonHandler}>
            <span className={s.typography}>
                {props.buttonName}
            </span>
        </button>
    );

}

export default ButtonShowMore;

