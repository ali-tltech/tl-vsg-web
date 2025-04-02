import React, { useEffect, useState } from 'react';
import styles from '../../styles/CareerPage.module.css';
import axiosInstance from 'src/axios/AxiosInstance';

const CareerPageWithOpenings = () => {
  const [careers, setCareers] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get('/career/get-all-career');      
        const result = response.data;
        console.log(response.data);
        
        if (result.success) {
          setCareers(result.data);
        }
      } catch (err) {
        console.error('Error fetching Careers:', err);
        toast.error('Failed to load Careers');
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.contentWrapper}>
        <div className={styles.heroSection}>
          <h1 className={styles.mainHeading}>Join Our Team</h1>
          <p className={styles.subHeading}>
            VS GenX Solutions was founded with a clear mission—to empower businesses and individuals through purpose-driven, scalable HR solutions. We're looking for talented individuals who are passionate about transforming HR practices and making a meaningful impact.
          </p>
        </div>

        {/* Job Listings */}
        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>Open Positions</h2>
          
          <div className={styles.jobListings}>
            <div className={styles.jobList}>
              {careers.map(job => (
                <div key={job.id} className={styles.jobItem}>
                  <div className={styles.jobItemContent}>
                    <div className={styles.jobMainContent}>
                      <div className={styles.jobHeader}>
                        <h3 className={styles.jobTitle}>{job.position}</h3>
                        <div className={styles.jobMeta}>
                          <span>{job.location}</span>
                          <span className={styles.metaDivider}>•</span>
                          <span>{job.jobType}</span>
                        </div>
                      </div>
                      <p className={styles.jobDescription}>{job.shortdescription}</p>
                    </div>
                    <div className={styles.jobBadgeContainer}>
                      <div className={styles.openingBadge}>
                        <span className={styles.openingIcon}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        </span>
                        <span className={styles.openingText}>{job.positionCount} Openings</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Simple Application Instructions */}
        <div className={`${styles.section} ${styles.applicationSection}`}>
          <h2 className={styles.sectionHeading}>Ready to Apply?</h2>
          
          <div className={styles.applicationContent}>
            <p className={styles.applicationText}>
              Email your resume, cover letter, and portfolio links with the position name in the subject line to:
            </p>
            
            <div className={styles.emailContainer}>
              <a href="mailto:careers@vsgenxsolutions.com" className={styles.emailLink}>
                careers@vsgenxsolutions.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPageWithOpenings;