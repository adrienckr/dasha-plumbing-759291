"use client";

import React, { useState } from "react";
import styles from "./ContactForm.module.css";

// A simple style to hide labels visually but keep them for screen readers
const visuallyHiddenStyle: React.CSSProperties = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  border: "0",
};

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    issue: "",
  });
  const [agreed, setAgreed] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Thank you for your submission!");
    setFormData({ name: "", phone: "", email: "", issue: "" });
    setAgreed(false);
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="footer-name" style={visuallyHiddenStyle}>
            Full Name*
          </label>
          <input
            type="text"
            id="footer-name"
            name="name"
            placeholder="Full Name*"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="footer-email" style={visuallyHiddenStyle}>
            Email*
          </label>
          <input
            type="email"
            id="footer-email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="footer-phone" style={visuallyHiddenStyle}>
            Phone*
          </label>
          <input
            type="tel"
            id="footer-phone"
            name="phone"
            placeholder="Phone*"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="footer-issue" style={visuallyHiddenStyle}>
            Anything you&apos;d like us to know?
          </label>
          <textarea
            id="footer-issue"
            name="issue"
            placeholder="Anything you'd like us to know?"
            value={formData.issue}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={styles.checkboxGroup}>
          <input
            type="checkbox"
            id="footer-agree"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label htmlFor="footer-agree">
            I agree to terms & conditions provided by the company. By providing
            my phone number, I agree to receive text messages from the business.
          </label>
        </div>
        <button type="submit" className={styles.submitBtn}>
          Get My Plumbing Fixed!
        </button>
      </form>
    </div>
  );
};
