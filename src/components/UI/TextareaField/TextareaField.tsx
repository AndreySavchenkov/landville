import React, { FC } from "react";

import styles from "./TextareaField.module.scss";

type InputFieldProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;

const TextareaField: FC<InputFieldProps> = ({ label, ...props }) => {
  return (
    <div className={styles.container}>
      {label && (
        <div className={styles.label}>
          <span className={styles.label_text}>{label}</span>
        </div>
      )}
      <textarea {...props} />
    </div>
  );
};

export default TextareaField;
