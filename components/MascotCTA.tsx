import React from "react";
import Image from "next/image";
import { TemplateProps } from "../types";
import styles from "./MascotCTA.module.css";

type MascotProps = {
  logoUrl?: string;
  mascot: TemplateProps["data"]["content"]["mascot"];
  message: string;
  buttonText: string;
  isReversed?: boolean;
};

export const MascotCTA = ({
  logoUrl,
  mascot,
  message,
  buttonText,
  isReversed = false,
}: MascotProps) => {
  const ctaClasses = `${styles.mascotCta} ${
    isReversed ? styles.mascotCta2 : ""
  }`;
  const mascotContentClasses = `${styles.mascotContent} ${
    isReversed ? styles.reversed : ""
  }`;

  const mascotImageUrl = mascot?.imageUrl || logoUrl;

  return (
    <section className={ctaClasses}>
      <div className="container">
        <div className={mascotContentClasses}>
          <div className={styles.mascotImage}>
            {mascotImageUrl ? (
              <Image
                src={mascotImageUrl}
                alt="Plumber mascot"
                width={120}
                height={120}
                loading="lazy"
              />
            ) : (
              "🔧"
            )}
          </div>
          <div className={styles.mascotMessage}>
            <h2 className={styles.mascotTitle}>{message}</h2>
            <button className={styles.emergencyBtn}>{buttonText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};
