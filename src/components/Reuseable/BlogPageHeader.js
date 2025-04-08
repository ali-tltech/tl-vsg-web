import React from "react";
import { Container } from "react-bootstrap";
import Link from "./Link";

const BlogPageHeader = (
    {
        page = "",
        title = "",
        bgImage="",
        parent = "",
        parentHref = "/",
      }) => {
        return (
          <section className="team-page-header">
            <div
              className="team-page-header-bg"
              style={{ backgroundImage: `url(${bgImage.src})` }}
            ></div>
            <div className="team-page-header-shape-1 float-bob-x-6"></div>
            <div className="team-page-header-shape-2 float-bob-x-7"></div>
            <Container>
              <div className="team-page-header__inner">
                <ul className="thm-breadcrumb list-unstyled">
                  <li>
                    <Link href="/">Home</Link>
                  </li>{" "}
                  <li>
                    <span>/</span>
                  </li>{" "}
                  <li>
                  <Link href="/blog">Blogs</Link>
                  </li>{" "}
                  <li>
                    <span>/</span>
                  </li>{" "}
                  {parent && (
                    <>
                      <li>
                        <Link href={parentHref}>{parent}</Link>
                      </li>{" "}
                      <li>
                        <span>/</span>
                      </li>{" "}
                    </>
                  )}
                  <li>{page || title}</li>
                </ul>
                <h2>{title}</h2>
              </div>
            </Container>
          </section>
  )
}

export default BlogPageHeader