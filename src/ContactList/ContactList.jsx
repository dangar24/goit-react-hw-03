import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"

export default function ContackList({ contacts, removeContact }) {
    return <ul className={css.list}>
        {contacts.map((contact) => (<li className={css.item} key={contact.id}>
            <Contact
                removeContact={removeContact}
                contact={contact} />
        </li>))}
    </ul>
}