'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { sendEmail } from '@/lib/send-email';
import { userInfo } from '@/public/js/userInfo';
import styles from '../styles/contactform.module.css';

export type FormData = {
  name: string;
  email: string;
  message: string;
  phone: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.divMarginBottom}>
        <label
          htmlFor={userInfo.contact.name.htmlFor}
          className={styles.label}
        >
          {userInfo.contact.name.label}
        </label>
        <input
          type='text'
          placeholder={userInfo.contact.name.placeholder}
          className={styles.nameAndEmail}
          {...register('name', { required: true })}
        />
      </div>
      <div className={styles.divMarginBottom}>
        <label
          htmlFor={userInfo.contact.email.htmlFor}
          className={styles.label}
        >
          {userInfo.contact.email.label}
        </label>
        <input
          type={userInfo.contact.email.htmlFor}
          placeholder={userInfo.contact.email.placeholder}
          className={styles.nameAndEmail}
          {...register('email', { required: true })}
        />
      </div>
      <div className={styles.divMarginBottom}>
        <label
          htmlFor={userInfo.contact.phone.htmlFor}
          className={styles.label}
        >
          {userInfo.contact.phone.label}
        </label>
        <input
          type='tel'
          placeholder={userInfo.contact.phone.placeholder}
          className={styles.nameAndEmail}
          {...register('phone', { required: true })}
        />
      </div>
      <div className={styles.divMarginBottom}>
        <label
          htmlFor={userInfo.contact.message.htmlFor}
          className={styles.label}
        >
          {userInfo.contact.message.label}
        </label>
        <textarea
          rows={4}
          placeholder={userInfo.contact.message.placeholder}
          className={styles.message}
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className={styles.submit}>
          {userInfo.contact.submit}
        </button>
      </div>
    </form>
  );
};
export default ContactForm;