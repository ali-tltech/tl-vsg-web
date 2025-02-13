import React from "react";
import { teamMember1 } from "@/data/teamSection";
import TeamMemberDetails1 from "@/components/TeamSection/TeamMemberDetails1";
import Layout from "@/components/Layout/Layout";
import HeaderTwo from "@/components/Header/HeaderTwo";
import TeamPageHeader from "@/components/Reuseable/TeamPageHeader";



export default function TeamMemberPage1() {
  return(
    <>
    <Layout pageTitle="VS GenX Solutions " metaDescription="" metaKeywords="" footerClassName="site-footer-three">
      <HeaderTwo />
      <TeamPageHeader page="Person Details" title="" bgImage={""}/>
      <TeamMemberDetails1 member={teamMember1} />;
      </Layout>

    </>
  ) }
