import { useEffect } from "react";
import { connect } from "react-redux";
import { getUserCards, getNewUserCards } from "../../../Redux/profile_reducer";
import photoCover from "../../../assets/photo-cover.svg"
import s from "./Cards.module.css";
import ButtonShowMore from "../../../Common/Buttons/ButtonShowMore";

function Cards(props) {

    
    useEffect(() => {
        props.getUserCards(1, 6)
    }, []);

    function onShowMore(url) {
        props.getNewUserCards(url)

    }

    function UserPhoneChanger(phone) {
        if (!phone.includes("+")) {
            phone = "+" + phone
        }
        return (

            phone.replace(/^(\+38)(\d{3})(\d{3})(\d{2})(\d{2})$/, '$1 ($2) $3 $4 $5')
        )
    }

    let mapUserList = "";
    if (props.userList) {
        mapUserList = props.userList.map((user => {
            return (
                <div className={s.card} key={user.id}>
                    <div className={s.padding_20}>
                        {user.photo !== "https://frontend-test-assignment-api.abz.agency/images/placeholders/placeholder.png"
                            ? <img className={s.card_image} src={user.photo} alt="users_img" />
                            : <img className={s.card_image} src={photoCover} alt="users_img" />}

                        <div className={s.card_name}>
                            {user.name.length > 30 ? user.name.slice(0, 30) + "..." : user.name}
                        </div>
                        <div>{user.position}</div>
                        <div>{user.email.length > 30 ? user.email.slice(0, 30) + "..." : user.email}</div>
                        <div>{UserPhoneChanger(user.phone)}</div>
                    </div>

                </div>


            )
        }))
    }

    function showMoreButton() {
        if (props.nextUrl !== "Done") {
            return (
                <div onClick={() => { onShowMore(props.nextUrl) }}>
                    <ButtonShowMore buttonName="Show more"></ButtonShowMore>
                </div>
            )
        } else {
            return "";
        }
    }

    return (<div className={s.cards_container}>
        <div className={s.cards}>
            {mapUserList}
        </div>
        {showMoreButton()}
        <div id="scrollTO"></div>

    </div>

    );
}


let mapStateToProps = (state) => {
    return ({
        userList: state.profilePage.userCards,
        nextUrl: state.profilePage.nextUrl
    }
    );
};

const CardsContainer = connect(mapStateToProps, { getUserCards, getNewUserCards })(Cards)
export default CardsContainer;



