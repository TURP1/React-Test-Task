import { connect } from "react-redux";
import SectionHeader from "../../Common/SectionHeader";
import CardsContainer from "./Cards/Cards";
import s from "./Content.module.css"
import NewUserFormContainerConnected from "./Form/NewUserForm_Container";





function Content(props) {

    return (
        <div className={s.content}>
            <section>
                <SectionHeader section_name="Working with GET request"></SectionHeader>
                <CardsContainer></CardsContainer>
            </section>
            <section>
                <SectionHeader section_name={props.section_name}></SectionHeader>
                <NewUserFormContainerConnected></NewUserFormContainerConnected>
            </section>
        </div>



    );
}

let mapStateToProps = (state) => {
    return {
        section_name: state.profilePage.sectionName,

    };
};

let ContentContainer = connect(
    mapStateToProps, null)
    (Content)



export default ContentContainer;

