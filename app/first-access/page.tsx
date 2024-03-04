"use client";
import { useGetAllInstitutions } from '@/hooks/useInstitution';
import { Button, Select } from 'antd';
import styles from "./styles.module.scss";

interface College {
  _id: string;
  name: string;
}

interface Program {
  code: string;
  collegeID: College;
  name: string;
  _id: string;
}

export default function firstAccess() {
  const { data: institutions } = useGetAllInstitutions();

  function getUniqueColleges(colleges: any[]): College[] {
    const uniqueCollegesMap: Map<string, College> = new Map();
  
    colleges?.forEach(college => {
      const collegeID = college.collegeID._id;
      if (!uniqueCollegesMap.has(collegeID)) {
        uniqueCollegesMap.set(collegeID, college.collegeID);
      }
    });
  
    return Array.from(uniqueCollegesMap.values());
  }
  
  const uniqueColleges: College[] = getUniqueColleges(institutions);
  
  const options = uniqueColleges.map(college => ({
    label: college.name,
    value: college._id,
  }));

  const programOptions = institutions?.map((item: Program) => ({
    label: item.name,
    value: item._id
  }));

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Let's Get Started!</h1>
        <p>First, tell me your Institution and Program</p>
        <div className={styles.input}>
          <span>Institution</span>
            <Select
            size='large'
            options={options}
            />
        </div>
        <div className={styles.input}>
          <span>Program</span>
          <Select
            size='large'
            options={programOptions}
          />
        </div>
      </div>
      <Button size='large' type="primary" block>Next</Button>
    </div>
  );
};