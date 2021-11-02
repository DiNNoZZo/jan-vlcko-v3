import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Button from '../../ui/button/button';
import classes from './contact-form.module.scss';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Meno musí obsahovať minimálne 3 znaky')
    .max(15, 'Meno musí obsahovať maximálne 15 znakov.')
    .required('Meno je potrebné.'),
  email: Yup.string()
    .email('Emailová adresa neexistuje.')
    .required('Email je potrebný.'),
  subject: Yup.string().max(20, 'Predmet musí obsahovať maximálne 20 znakov.'),
  message: Yup.string().required('Sprava je potreban'),
});

function ContactForm(props) {
  const dataAos = props['data-aos'] ? props['data-aos'] : null;
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        subject: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        fetch('api/contact', {
          method: 'POST',
          header: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }).then((res) => {
          if (res.status === 200) {
            actions.resetForm({
              name: '',
              email: '',
              subject: '',
              message: '',
            });
          }
        });
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <ul className={classes.form}>
            <li
              data-aos={dataAos}
              className={`${classes['form-item']} ${classes['form--name']}`}
            >
              <Field
                className={classes.input}
                type="text"
                name="name"
                placeholder="Meno"
              />
              <label
                className={
                  errors.name && touched.name
                    ? `${classes.label} ${classes['label--warning']}`
                    : classes.label
                }
                htmlFor="name"
              ></label>
            </li>
            <li
              data-aos={dataAos}
              className={`${classes['form-item']} ${classes['form--email']}`}
            >
              <Field
                className={classes.input}
                type="email"
                name="email"
                placeholder="E-mail"
              />

              <label
                className={
                  errors.email && touched.email
                    ? `${classes.label} ${classes['label--warning']}`
                    : classes.label
                }
                htmlFor="email"
              ></label>
            </li>
            <li
              data-aos={dataAos}
              className={`${classes['form-item']} ${classes['form--subject']}`}
            >
              <Field
                className={classes.input}
                type="text"
                name="subject"
                placeholder="Predmet"
              />
              <label
                className={
                  errors.subject && touched.subject
                    ? `${classes.label} ${classes['label--warning']}`
                    : classes.label
                }
                htmlFor="subject"
              ></label>
            </li>
            <li
              data-aos={dataAos}
              className={`${classes['form-item']} ${classes['form--mess']}`}
            >
              <Field
                as="textarea"
                className={`${classes.input} ${classes['input--area']}`}
                id="message"
                name="message"
                spellCheck="false"
                cols="30"
                rows="10"
                placeholder="Správa"
              ></Field>
              <label
                className={
                  errors.message && touched.message
                    ? `${classes.label} ${classes['label--warning']}`
                    : classes.label
                }
                htmlFor="message"
              ></label>
            </li>
            <li
              data-aos={dataAos}
              className={`${classes['form-item']} ${classes['form--btn']}`}
            >
              <Button
                className={`${classes.btn} ${classes['btn--contact']}`}
                name="submit"
                type="submit"
              >
                Odošli ma
              </Button>
            </li>
          </ul>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
