import ButtonYellowAnchor from "../../Common/Buttons/ButtonAnchor";
import s from "./MainContent.module.css";
import { useInView } from 'react-intersection-observer';


function MainContent() {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    return (
        <section className={s.main}>
            <link rel="preload" as="image" href="https://res.cloudinary.com/dv0xwgzeo/image/upload/v1681225035/React-Test/lodka_gory_ozero_135258_1920x1080_vasfvu.jpg" type="image/jpeg" />

            <div className={s.image_container}>
                <img
                    ref={ref}
                    className={s.main_img}
                    srcSet="
            https://res.cloudinary.com/dv0xwgzeo/image/upload/w_400,c_scale,q_auto,f_auto/v1681122146/React-Test/lodka_gory_ozero_135258_1920x1080_vasfvu.jpg 400w,
            https://res.cloudinary.com/dv0xwgzeo/image/upload/w_600,c_scale,q_auto,f_auto/v1681122146/React-Test/lodka_gory_ozero_135258_1920x1080_vasfvu.jpg 600w,
            https://res.cloudinary.com/dv0xwgzeo/image/upload/w_800,c_scale,q_auto,f_auto/v1681122146/React-Test/lodka_gory_ozero_135258_1920x1080_vasfvu.jpg 800w,
            https://res.cloudinary.com/dv0xwgzeo/image/upload/w_1200,c_scale,q_auto,f_auto/v1681122146/React-Test/lodka_gory_ozero_135258_1920x1080_vasfvu.jpg 1200w,
            https://res.cloudinary.com/dv0xwgzeo/image/upload/w_1600,c_scale,q_auto,f_auto/v1681122146/React-Test/lodka_gory_ozero_135258_1920x1080_vasfvu.jpg 1600w
          "
                    sizes="(max-width: 800px) 50vw, 100vw"
                    src="https://res.cloudinary.com/dv0xwgzeo/image/upload/v1681225035/React-Test/lodka_gory_ozero_135258_1920x1080_vasfvu.jpg"
                    alt="Main bg"
                    style={{ opacity: inView ? 1 : 0, transition: "opacity 0.5s" }}
                />
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

