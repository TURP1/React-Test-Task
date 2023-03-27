import ButtonYellow from "../../Common/Button";
import img from "../../assets/mainPhoto.png"
import s from "./MainContent.module.css"


function MainContent() {
    return (
        <section className={s.main}>
            <div className={s.image_container}>
                <img className={s.main_img} src={img} alt="Main bg" />
                <div className={s.image_text}>
                    <div className={s.image_text_header}>Test assignment for 
                     front-end developer</div>
                    <div className={s.image_text_section}>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</div>
                    <ButtonYellow buttonName="Sign up"></ButtonYellow>
                </div>
            </div>
        </section>

    );
}

export default MainContent;

