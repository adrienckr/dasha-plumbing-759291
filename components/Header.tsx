import React from "react";
import Image from "next/image";
import { TemplateProps } from "../types";
import styles from "./Header.module.css";

type HeaderProps = {
  logoUrl?: string;
  company: TemplateProps["data"]["content"]["company"];
};

export const Header = ({ logoUrl, company }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt={`${company.name} logo`}
                width={150}
                height={50}
                style={{ objectFit: "contain" }}
                priority
              />
            ) : (
              <div>
                <div className={styles.companyName}>{company.name}</div>
                {company.slogan && (
                  <div className={styles.headerSlogan}>{company.slogan}</div>
                )}
              </div>
            )}
          </div>
          {company.phone && (
            <div className={styles.headerPhone}>
              <a href={`tel:${company.phone}`} className={styles.callNowBtn}>
                {company.phone}
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
