import ButtonYellowAnchor from "../../Common/Buttons/ButtonAnchor";
import img from "../../assets/mainPhoto.jpeg"
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
                    <ButtonYellowAnchor buttonName="Sign up" anchor="register"></ButtonYellowAnchor>
                </div>
            </div>
        </section>

    );
}

export default MainContent;

