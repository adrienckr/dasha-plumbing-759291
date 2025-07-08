"use client";

import React from "react";
import styles from "./ContactFooter.module.css";
import { ContactForm } from "./ContactForm";

export const ContactFooter = () => {
  return (
    <section className={styles.contactFooter}>
      <div className="container">
        <h2 className={styles.title}>Need a Plumber? Just Send Us a Note!</h2>
        <p className={styles.subtitle}>We&apos;re always willing to help!</p>
        <div className={styles.formContainer}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
