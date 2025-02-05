import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const ContactForm = ({
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
    reset,
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

      const responseData = await response.json();

      if (response.ok) {
        reset(); // Reset form after submission
        toast.success('Submitted Successfully!');
      } else {
        toast.error(responseData.message || 'Form submission failed.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${formClassName} contact-form-validated`}
    >
      <Row>
        {/* Name Field */}
        <Col xl={6}>
          <div className={inputClassName}>
            <input
              type="text"
              placeholder="Your Name"
              {...register('name', { required: 'This field is required.' })}
            />
            {errors.name && <label className="error">{errors.name.message}</label>}
          </div>
        </Col>

        {/* Subject Field */}
        <Col xl={6}>
          <div className={inputClassName}>
            <input
              type="text"
              placeholder="Subject"
              {...register('subject', { required: 'This field is required.' })}
            />
            {errors.subject && <label className="error">{errors.subject.message}</label>}
          </div>
        </Col>
      </Row>

      <Row>
        {/* Email Field */}
        <Col xl={6}>
          <div className={inputClassName}>
            <input
              type="email"
              placeholder="Your Email"
              {...register('email', {
                required: 'This field is required.',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Enter a valid email.',
                },
              })}
            />
            {errors.email && <label className="error">{errors.email.message}</label>}
          </div>
        </Col>

        {/* Phone Number Field */}
        <Col xl={6}>
          <div className={inputClassName}>
            <input
              type="tel"
              placeholder="Phone Number"
              {...register('phoneNumber', {
                required: 'This field is required.',
                pattern: {
                  value: /^\+1 \(\d{3}\) \d{3}-\d{4}$/, // Matches +1 (XXX) XXX-XXXX
                  message: 'Enter a valid phone number.',
                },
              })}
            />
            {errors.phoneNumber && <label className="error">{errors.phoneNumber.message}</label>}
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12}>
          {/* Message Field */}
          <div className={`${inputClassName} ${messageClassName}`}>
            <textarea
              placeholder="Write a Message"
              {...register('message', { required: 'This field is required.' })}
            ></textarea>
            {errors.message && <label className="error">{errors.message.message}</label>}
          </div>

          {/* Submit Button */}
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
