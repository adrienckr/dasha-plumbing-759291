"use client";

import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import { ContactForm } from "./ContactForm";

type HeroProps = {
  hero: {
    title: string;
    subtitle: string;
    ctaText?: string;
    formTitle?: string;
    imageUrl?: string;
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email?: string;
    emergencyPhone?: string;
  };
  companyName: string;
};

export const Hero = ({ hero, contact, companyName }: HeroProps) => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        {/* Left Column: Text Content & Image */}
        <div className={styles.textColumn}>
          <h1 className={styles.title}>{hero.title}</h1>
          <p className={styles.subtitle}>{hero.subtitle}</p>

          {hero.imageUrl && (
            <div className={styles.imageWrapper}>
              <Image
                src={hero.imageUrl}
                alt="A professional plumber at work"
                width={500}
                height={350}
                className={styles.heroImage}
                priority
              />
            </div>
          )}
        </div>

        {/* Right Column: Form */}
        <div className={styles.formColumn}>
          {hero.formTitle && (
            <h2 className={styles.formTitle}>{hero.formTitle}</h2>
          )}
          <ContactForm />
          <div className={styles.callCta}>
            {hero.ctaText || `Call ${companyName} Today!`}
            <a href={`tel:${contact.phone}`} className={styles.phoneBtn}>
              {contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
