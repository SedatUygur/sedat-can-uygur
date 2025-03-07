'use client';

import Link from 'next/link';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { sendEmail } from '@/lib/send-email';
import { ctaTexts, userInfo } from '@/public/js/userInfo';
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
    <>
      <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.divMarginBottom}>
          <label htmlFor={userInfo.contact.name.htmlFor} className={styles.label}>
            {userInfo.contact.name.label}
          </label>
          <input
            type="text"
            placeholder={userInfo.contact.name.placeholder}
            className={styles.nameAndEmail}
            {...register('name', { required: true })}
          />
        </div>
        <div className={styles.divMarginBottom}>
          <label htmlFor={userInfo.contact.email.htmlFor} className={styles.label}>
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
          <label htmlFor={userInfo.contact.phone.htmlFor} className={styles.label}>
            {userInfo.contact.phone.label}
          </label>
          <input
            type="tel"
            placeholder={userInfo.contact.phone.placeholder}
            className={styles.nameAndEmail}
            {...register('phone', { required: true })}
          />
        </div>
        <div className={styles.divMarginBottom}>
          <label htmlFor={userInfo.contact.message.htmlFor} className={styles.label}>
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
          <button className={styles.submit}>{ctaTexts.submitBTN}</button>
        </div>
      </form>
      <div style={{ textAlign: 'center', paddingTop: '0.5rem' }}>
        <Link
          href={`mailto:${userInfo.contact.email ? userInfo.contact.email.placeholder : ''}`}
        >
          {userInfo.contact.email.placeholder}
        </Link>
      </div>
      {userInfo.contact.phone ? (
        <div className={styles.phone}>
          <Link
            href={`tel:${userInfo.contact.phone.countryCode} ${userInfo.contact.phone.placeholder}`}
          >{`${userInfo.contact.phone.countryCode} ${userInfo.contact.phone.placeholder}`}</Link>
        </div>
      ) : null}
      <div className={styles.socialIconDiv}>
        {userInfo.socials
          ? userInfo.socials.map((social, key) => {
              return (
                <div className={styles.socialIcon} key={key}>
                  <Link href={social.href}>
                    <FontAwesomeIcon icon={social.icon} />
                  </Link>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};
export default ContactForm;
