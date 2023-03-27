import SectionHeader from "../../Common/SectionHeader";
import Cards from "./Cards/Cards";
import s from "./Content.module.css"
import NewUserForm from "./Form/NewUserForm";


function Content() {
    return (
        <div className={s.content}>
            <section>
                <SectionHeader section_name="Working with GET request"></SectionHeader>
                <Cards></Cards>
            </section>
            <section>
                <SectionHeader section_name="Working with POST request"></SectionHeader>
                <NewUserForm></NewUserForm>
            </section>
        </div>



    );
}

export default Content;

