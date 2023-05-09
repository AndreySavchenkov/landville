import React, { FC } from "react";
import classnames from "classnames";

import styles from "./InputField.module.scss";

type InputFieldProps = {
  label?: string;
  isRequired?: boolean;
  errorText?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField: FC<InputFieldProps> = ({
  label,
  isRequired,
  errorText,
  ...props
}) => {
  const inputClasses = classnames(styles.input, {
    [styles.input_error]: errorText,
  });

  return (
    <div className={styles.container}>
      {label && (
        <div className={styles.label}>
          <span className={styles.label_text}>{label}</span>
          {isRequired && <span className={styles.label_required}>*</span>}
        </div>
      )}
      <input className={inputClasses} {...props} />
      {errorText && <span className={styles.helper}>{errorText}</span>}
    </div>
  );
};

export default InputField;
