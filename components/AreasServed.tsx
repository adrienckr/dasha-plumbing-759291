import React from "react";
import { ServiceArea } from "../types";
import styles from "./AreasServed.module.css";

type AreasServedProps = {
  serviceAreas: ServiceArea[];
};

export const AreasServed = ({ serviceAreas }: AreasServedProps) => {
  return (
    <section className={styles.areasServed}>
      <div className="container">
        <h2 className={styles.title}>Areas We Serve</h2>
        <div className={styles.grid}>
          {serviceAreas.map((area, index) => (
            <div
              key={index}
              className={`${styles.item} ${area.isMain ? styles.main : ""}`}
            >
              {area.name}
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <button className={styles.btn}>Call Your Local Plumber</button>
        </div>
      </div>
    </section>
  );
};
