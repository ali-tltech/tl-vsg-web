

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ContactForm = ({
  inputs = [],
  formClassName = 'comment-one__form',
  inputClassName = 'comment-form__input-box',
  messageClassName = 'text-message-box',
  btnBoxClassName = 'btn-box',
  btnClassName = 'comment-form__btn',
  btnText = 'Send a message',
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle successful form submission (e.g., display a success message)
        console.log('Form submitted successfully.');
      } else {
        // Handle form submission error
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${formClassName} contact-form-validated`}
    >
      <Row>
        {inputs.map(({ name, placeholder, type, required }) => (
          <Col key={name} xl={6}>
            <div className={inputClassName}>
              <input
                type={type}
                placeholder={placeholder}
                name={name}
                id={name}
                {...register(name, { required })}
              />
              {required && errors[name] && (
                <label htmlFor={name} className="error">
                  This field is required.
                </label>
              )}
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <Col xl={12}>
          <div className={`${inputClassName} ${messageClassName}`}>
            <textarea
              name="message"
              placeholder="Write a Message"
              {...register('message', { required: true })}
            ></textarea>
            {errors.message && (
              <label htmlFor="message" className="error">
                This field is required.
              </label>
            )}
          </div>
          <div className={btnBoxClassName}>
            <button type="submit" className={`thm-btn ${btnClassName}`}>
              {btnText}
            </button>
          </div>
        </Col>
      </Row>
    </form>
  );
};

export default ContactForm;
