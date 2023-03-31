import s from "./SectionHeader.module.css"

function SectionHeader(props) {
    return (
        <div className={s.section_header}>
            {props.section_name}
        </div>

    );
}

export default SectionHeader;

