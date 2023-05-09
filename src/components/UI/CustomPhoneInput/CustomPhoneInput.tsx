import React, { FC } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import styles from "./PhoneInput.module.scss";

type CustomPhoneInput = {
  value: string;
  onChange: () => void;
};

const CustomPhoneInput: FC<CustomPhoneInput> = ({ value, onChange }) => {
  return (
    <PhoneInput
      inputClass={styles.inputClass}
      containerClass={styles.containerClass}
      buttonClass={styles.buttonClass}
      dropdownClass={styles.dropdownClass}
      searchStyle={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      onlyCountries={["us"]}
      country={"us"}
      value={value}
      onChange={onChange}
    />
  );
};

export default CustomPhoneInput;
