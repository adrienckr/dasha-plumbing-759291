import React from "react";
import Image from "next/image";
import { TemplateProps } from "../types";
import styles from "./Services.module.css";

type ServicesProps = {
  services: TemplateProps["data"]["content"]["services"];
  contact: TemplateProps["data"]["content"]["contact"];
};

export const Services = ({ services, contact }: ServicesProps) => {
  return (
    <section className={styles.services}>
      <div className="container">
        <h2 className={styles.title}>Our Services</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              {service.imageUrl && (
                <div className={styles.imageWrapper}>
                  <Image
                    src={service.imageUrl}
                    alt={service.name}
                    width={400}
                    height={250}
                    className={styles.image}
                  />
                </div>
              )}
              <div className={styles.cardContent}>
                <h3>{service.name}</h3>
                {service.description && <p>{service.description}</p>}
                <button className={styles.callBtn}>{contact.phone}</button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Why Wait to Call? We really can&apos;t think of a good reason
            either.
          </p>
          <button className={styles.ctaBtn}>
            {`Call Now! | ${contact.phone}`}
          </button>
        </div>
      </div>
    </section>
  );
};
