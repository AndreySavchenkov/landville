"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";

import { regExp } from "@/helpers/regExp";
import { ButtonSizeEnum } from "@/components/UI/Button/Button";
import {
  Button,
  InputField,
  TextareaField,
  CustomPhoneInput,
} from "@/components/UI";

import styles from "./ContactUs.module.scss";

type FormType = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactUs = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormType>();

  const onSubmit = (data: FormType) => console.log(data);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Controller
          name="name"
          control={control}
          rules={{
            required: { value: true, message: "Required field" },
            maxLength: { value: 50, message: "No more than 50 characters" },
            pattern: { value: regExp.nameRegExp, message: "Incorrect name" },
          }}
          render={({ field }) => (
            <InputField
              label={"Your Name"}
              placeholder="Your Name"
              isRequired
              errorText={errors?.name?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          rules={{
            required: { value: true, message: "Required field" },
            pattern: { value: regExp.emailRegExp, message: "Incorrect email" },
          }}
          render={({ field }) => (
            <InputField
              label={"Your Email"}
              placeholder="Your Email"
              isRequired
              errorText={errors?.email?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          rules={{
            required: { value: true, message: "Required field" },
          }}
          render={({ field }) => (
            <div>
              <p className={styles.label}>Phone Number</p>
              <CustomPhoneInput {...field} />
            </div>
          )}
        />

        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <TextareaField
              className={styles.textarea}
              label={"Your Message"}
              placeholder="Your Message"
              {...field}
            />
          )}
        />

        <Button
          className={styles.button}
          size={ButtonSizeEnum.MEDIUM}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;
