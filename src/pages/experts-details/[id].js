import React, { useEffect, useState } from 'react'

import { teamMember2 } from "@/data/teamSection";
import TeamMemberDetails2 from '@/components/TeamSection/TeamMemberDetails2';
import HeaderTwo from '@/components/Header/HeaderTwo';
import Layout from '@/components/Layout/Layout';
import TeamPageHeader from '@/components/Reuseable/TeamPageHeader';
import { useRouter } from 'next/router';
import { team } from 'src/api/api';

export default function TeamMemberPage2() {
    const router = useRouter();
    const { id } = router.query;
    const [teamData,setTeamData]=useState([])
    useEffect(() => {
      if (id) {
        const fetchData = async () => {
          try {
            const teamData = await team(id);
            console.log(teamData.data);
            setTeamData(teamData.data.data)
        
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }
    }, [id]);
  return (
    <div>
          <Layout pageTitle="VS GenX Solutions " metaDescription="" metaKeywords="" footerClassName="site-footer-three">
          <HeaderTwo />
      <TeamPageHeader page={teamData.name}title="" bgImage={""}/>
      <TeamMemberDetails2 teamMember2={teamData}/>
      </Layout>

 </div>
  )
}

