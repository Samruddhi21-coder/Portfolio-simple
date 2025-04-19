import React from "react";


import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          
          <a href="mailto:samruddhi.shrawagi@gmail.com">samruddhi.shrawagi@gmail.com</a>
        </li>
        <li className={styles.link}>
          
          <a href="https://www.linkedin.com/in/samruddhi-shrawagi-83674b316/">linkedin.com/Samruddhi-Shrawagi</a>
        </li>
        <li className={styles.link}>
          
          <a href="https://github.com/Samruddhi21-coder">github.com/Samruddhi21-coder</a>
        </li>
      </ul>
    </footer>
  );
};
