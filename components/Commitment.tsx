import React from "react";
import Image from "next/image";
import { AboutBlock } from "../types";
import styles from "./Commitment.module.css";

type CommitmentProps = {
  aboutBlock: AboutBlock;
};

export const Commitment = ({ aboutBlock }: CommitmentProps) => {
  return (
    <section className={styles.commitment}>
      <div className={`container ${styles.container}`}>
        <div className={styles.imageWrapper}>
          <Image
            src={aboutBlock.imageUrl}
            alt="Company owner or representative"
            width={500}
            height={500}
            className={styles.image}
          />
        </div>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>{aboutBlock.title}</h2>
          <p className={styles.text}>{aboutBlock.text}</p>
          <button className={styles.ctaBtn}>{aboutBlock.ctaText}</button>
        </div>
      </div>
    </section>
  );
};
