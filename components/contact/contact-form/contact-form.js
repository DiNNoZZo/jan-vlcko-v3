import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Button from '../../ui/button/button';
import Input from '../../ui/input/input';
import Alert from '../../messAlert/alert';

import classes from './contact-form.module.scss';

function ContactForm(props) {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Meno má mať 15 a menej znakov.')
        .required('Meno je potrebné.'),
      email: Yup.string()
        .email('Emailová adresa neexistuje.')
        .required('Email je potrebný.'),
      subject: Yup.string().max(20, 'Predmet má maximálne 20 znakov.'),
      message: Yup.string().required('Správa je potrebná.'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <ul className={classes.form}>
        <li className={`${classes['form-item']} ${classes['form--name']}`}>
          <Input
            styles={classes.input}
            type="text"
            name="name"
            placeholder="Meno"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          <label className={classes.label} htmlFor="name"></label>
          {formik.touched.name && formik.errors.name && (
            <Alert time="7" type="error">
              {formik.errors.name}
            </Alert>
          )}
        </li>
        <li className={`${classes['form-item']} ${classes['form--email']}`}>
          <Input
            styles={classes.input}
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <label className={classes.label} htmlFor="email"></label>
          {formik.touched.email && formik.errors.email && (
            <Alert time="7" type="error">
              {formik.errors.email}
            </Alert>
          )}
        </li>
        <li className={`${classes['form-item']} ${classes['form--subject']}`}>
          <Input
            styles={classes.input}
            type="text"
            name="subject"
            placeholder="Predmet"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
          />
          <label className={classes.label} htmlFor="subject"></label>
          {formik.touched.subject && formik.errors.subject && (
            <Alert time="7" type="error">
              {formik.errors.subject}
            </Alert>
          )}
        </li>
        <li className={`${classes['form-item']} ${classes['form--mess']}`}>
          <textarea
            className={`${classes.input} ${classes['input--area']}`}
            id="messege"
            name="message"
            spellCheck="false"
            cols="30"
            rows="10"
            placeholder="Správa"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          ></textarea>
          <label className={classes.label} htmlFor="message"></label>
          {formik.touched.message && formik.errors.message && (
            <Alert time="7" type="error">
              {formik.errors.message}
            </Alert>
          )}
        </li>
        <li className={`${classes['form-item']} ${classes['form--btn']}`}>
          <Button
            className={`${classes.btn} ${classes['btn--contact']}`}
            name="submit"
            type="submit"
          >
            Odošli ma
          </Button>
        </li>
      </ul>
    </form>
  );
}

export default ContactForm;
