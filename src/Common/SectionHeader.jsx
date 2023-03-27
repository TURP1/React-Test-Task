import s from "./SectionHeader.module.css"

function SectionHeader(props) {
    return (
        <h2 className={s.section_header}>
            {props.section_name}
        </h2>

    );
}

export default SectionHeader;

