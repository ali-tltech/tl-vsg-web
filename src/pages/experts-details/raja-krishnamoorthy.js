import React from 'react'

import { teamMember2 } from "@/data/teamSection";
import TeamMemberDetails2 from '@/components/TeamSection/TeamMemberDetails2';
import HeaderTwo from '@/components/Header/HeaderTwo';

export default function TeamMemberPage2() {
  return (
    <div>
          <Layout pageTitle="VS GenX Solutions " metaDescription="" metaKeywords="" footerClassName="site-footer-three">
          <HeaderTwo />
      <TeamPageHeader page="Person Details" title="" bgImage={""}/>
      <TeamMemberDetails2 teamMember2={teamMember2}/>
      </Layout>

 </div>
  )
}

