import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from 'nanoid';
import css from './ContackForm.module.css'
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too short!')
        .max(30, 'Too long!')
        .required('Required'),
    number: Yup.string()
        .min(3, 'Too short!')
        .max(30, 'Too long!')
        .required('Required'),
        });

export default function ContackForm({addContact}) {
    const handleSubmit = (values, actions) => {
        values.id = nanoid();
        addContact(values);
        actions.resetForm();
    } 


    return <Formik
        initialValues={{
        name: '',
        number:'',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
    >
        <Form className={css.form}>
            <div className={css.container}>
                <label className={css.label}>Name</label>
                <Field className={css.input} type='text' name='name' />
                <ErrorMessage name='name'/>
            </div>
            <div className={css.container}>
                <label className={css.label}>Number</label>
                <Field className={css.input} type='number' name='number' />
                <ErrorMessage name='number'/>
            </div>
            <button className={css.btn} type="submit">Add contact</button>
        </Form> 
    </Formik>
}