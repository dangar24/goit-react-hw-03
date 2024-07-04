import css from './Contact.module.css'
import { FaUser, FaPhoneAlt } from "react-icons/fa";

export default function Contact({ contact: { name, number, id }, removeContact }) {

    return <div className={css.element}>
        <div className={css.container}>
            <p className={css.text}><FaUser size='18' />{name}</p>
            <p className={css.text}><FaPhoneAlt size='18'/>{number}</p>
        </div>
        <button
            className={css.btn}
            type="button"
            onClick={() => removeContact(id)}>Delete</button>
    </div>
}