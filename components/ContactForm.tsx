'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/lib/send-email';

import styles from '../styles/contactform.module.css';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.divMarginBottom}>
        <label
          htmlFor='name'
          className={styles.label}
        >
          Full Name
        </label>
        <input
          type='text'
          placeholder='Full Name'
          className={styles.nameAndEmail}
          {...register('name', { required: true })}
        />
      </div>
      <div className={styles.divMarginBottom}>
        <label
          htmlFor='email'
          className={styles.label}
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className={styles.nameAndEmail}
          {...register('email', { required: true })}
        />
      </div>
      <div className={styles.divMarginBottom}>
        <label
          htmlFor='message'
          className={styles.label}
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className={styles.message}
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className={styles.submit}>
          Submit
        </button>
      </div>
    </form>
  );
};
export default ContactForm;