import React from 'react'

import { teamMember2 } from "@/data/teamSection";
import TeamMemberDetails2 from '@/components/TeamSection/TeamMemberDetails2';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Layout from '@/components/Layout/Layout';
import TeamPageHeader from '@/components/Reuseable/TeamPageHeader';

export default function TeamMemberPage2() {
  return (
    <div>
          <Layout pageTitle="VS GenX Solutions " metaDescription="" metaKeywords="" footerClassName="site-footer-three">
          <HeaderTwo />
      <TeamPageHeader page="Raja Krishnamoorthy" title="" bgImage={""}/>
      <TeamMemberDetails2 teamMember2={teamMember2}/>
      </Layout>

 </div>
  )
}

