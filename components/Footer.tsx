import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

type FooterProps = {
  logoUrl?: string;
  companyName: string;
  footer?: {
    copyright?: string;
    links?: { text: string; url: string }[];
    license?: string;
    insurance?: string;
  };
};

export const Footer = ({ logoUrl, companyName, footer }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.logo}>
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt={`${companyName} logo`}
              width={150}
              height={50}
              style={{ objectFit: "contain" }}
            />
          ) : (
            <div className={styles.companyName}>{companyName}</div>
          )}
        </div>
        <div className={styles.footerLinks}>
          {footer?.links?.map(
            (link: { url: string; text: string }, index: number) => (
              <a key={index} href={link.url}>
                {link.text}
              </a>
            )
          )}
        </div>
        <p>
          {footer?.copyright ||
            `© ${new Date().getFullYear()} ${companyName}. All Rights Reserved.`}
        </p>
        {footer?.license && <p>{footer.license}</p>}
        {footer?.insurance && <p>{footer.insurance}</p>}
      </div>
    </footer>
  );
};
