import React from "react";
import { SpecialOffer } from "../types";
import styles from "./SpecialOffers.module.css";

type SpecialOffersProps = {
  offers: SpecialOffer[];
  contact: {
    phone: string;
    email?: string;
  };
};

export const SpecialOffers = ({ offers, contact }: SpecialOffersProps) => {
  return (
    <section className={styles.specialOffers}>
      <div className="container">
        <h2 className={styles.title}>Special Offers</h2>
        <div className={styles.grid}>
          {offers.map((offer, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.discount}>{offer.discount}</div>
              <div className={styles.offerTitle}>{offer.title}</div>
              <p>{offer.description}</p>
              <a href={`tel:${contact.phone}`} className={styles.ctaBtn}>
                {`Call Now! | ${contact.phone}`}
              </a>
              {offer.conditions && (
                <div className={styles.conditions}>{offer.conditions}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
