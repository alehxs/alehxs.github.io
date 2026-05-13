import pythonIcon from '../svgs/python.svg';
import javaIcon from '../svgs/java.svg';
import swiftIcon from '../svgs/swift.svg';
import cplusplusIcon from '../svgs/cplusplus.svg';
import bashIcon from '../svgs/bash.svg';
import reactIcon from '../svgs/react.svg';
import nextjsIcon from '../svgs/nextjs.svg';
import djangoIcon from '../svgs/django.svg';
import springbootIcon from '../svgs/springboot.svg';
import linuxIcon from '../svgs/linux.svg';
import awsIcon from '../svgs/aws.svg';
import dockerIcon from '../svgs/docker.svg';
import jenkinsIcon from '../svgs/jenkins.svg';
import mysqlIcon from '../svgs/mysql.svg';
import postgresqlIcon from '../svgs/postgresql.svg';
import supabaseIcon from '../svgs/supabase.svg';
import mongodbIcon from '../svgs/mongodb.svg';

export const skillCategories = [
  {
    heading: 'PROGRAMMING LANGUAGES',
    modifier: 'left',
    skills: [
      { icon: pythonIcon, name: 'Python' },
      { icon: javaIcon, name: 'Java' },
      { icon: swiftIcon, name: 'Swift' },
      { icon: cplusplusIcon, name: 'C++' },
      { icon: bashIcon, name: 'Bash' },
    ],
  },
  {
    heading: 'FRAMEWORKS & LIBRARIES',
    modifier: 'center',
    skills: [
      { icon: reactIcon, name: 'React' },
      { icon: nextjsIcon, name: 'Next.js' },
      { icon: djangoIcon, name: 'Django' },
      { icon: springbootIcon, name: 'Spring Boot' },
    ],
  },
  {
    heading: 'TOOLS & PLATFORMS',
    modifier: 'right',
    skills: [
      { icon: linuxIcon, name: 'Linux' },
      { icon: awsIcon, name: 'AWS' },
      { icon: dockerIcon, name: 'Docker' },
      { icon: jenkinsIcon, name: 'Jenkins' },
      { icon: mysqlIcon, name: 'MySQL' },
      { icon: postgresqlIcon, name: 'PostgreSQL' },
      { icon: supabaseIcon, name: 'Supabase' },
      { icon: mongodbIcon, name: 'MongoDB' },
    ],
  },
];
