import errorPage from "@/data/errorPage";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import NotFound from "./NotFound";

const { title, tagline, text } = errorPage;

const ErrorPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("search"));
  };

  return (
   <>
   <NotFound/>
   </>
  );
};

export default ErrorPage;
