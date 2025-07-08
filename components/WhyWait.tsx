import React from "react";
import styles from "./WhyWait.module.css";

type WhyWaitProps = {
  whyWait: {
    title: string;
    message: string;
    ctaText?: string;
  };
};

export const WhyWait = ({ whyWait }: WhyWaitProps) => {
  return (
    <section className={styles.whyWait}>
      <div className="container">
        <h2 className={styles.title}>{whyWait.title}</h2>
        <p className={styles.message}>{whyWait.message}</p>
        <button className={styles.btn}>{whyWait.ctaText || "Call Now!"}</button>
      </div>
    </section>
  );
};
