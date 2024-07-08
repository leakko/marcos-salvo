import { StaticImageData } from 'next/image';
import uocLogo from '@/assets/img/uoc-logo.webp';
import ironhackLogo from '@/assets/img/ironhack-logo.webp';
import sevilleUniversityLogo from '@/assets/img/seville-university-logo.webp';

interface IEducation {
  title: string;
  institution: string;
  institutionUrl: string;
  initialDate: Date;
  finalDate?: Date;
  description: string;
  image: StaticImageData;
  mainItems: string[];
  secondaryItems?: string[];
}

export const educations: IEducation[] = [
  {
    title: "Software Engineering Bachelor's Degree",
    institution: 'Catalonia Open University',
    institutionUrl: 'https://www.uoc.edu/portal/en/index.html',
    initialDate: new Date(2021, 8, 1),
    description: 'The programme of study covers the full software lifecycle: design, implementation, testing and maintenance',
    image: uocLogo,
    mainItems: [
      "This bachelor's degree provides the necessary skills to develop web, mobile, and multiplatform apps with the sector's most popular programming languages, techniques and methods.",
      'Technologies 👉 JavaScript, TypeScript, Vue, Figma, C, assembler, Java, Kotlin, Oracle, MySQL, PostgreSQL, Eclipse, AWS...',
    ],
  },
  {
    title: 'Web Development Bootcamp',
    institution: 'Ironhack',
    institutionUrl: 'https://www.ironhack.com/en',
    initialDate: new Date(2021, 0, 1),
    finalDate: new Date(2021, 8, 1),
    description: 'Main technologies:  NodeJS | ExpressJS | MongoDB | ReactJS',
    image: ironhackLogo,
    mainItems: [
      'Responsive web design 👉 HTML / CSS / JavaScript',
      'Back-end 👉 NodeJS / ExpressJS / MongoDB /Axios',
      'Front-end 👉 ReactJS',
      'Version Control 👉 Git / GitHub',
    ],
  },
  {
    title: 'Joint Degree in Business Administration and Law',
    institution: 'Seville University',
    institutionUrl: 'https://www.us.es/',
    initialDate: new Date(2014, 8, 1),
    finalDate: new Date(2024, 6, 1),
    description: 'Joint degree of 408 ECTS credits (10.200 hours)',
    image: sevilleUniversityLogo,
    mainItems: [
      `The Dual Degree in Business Administration & Laws is a challenging program that prepares students to 
      deeply comprehend the relation between business and law. This program will prepare students to understand 
      and experience the international business from both a management and a legal perspective.`,
    ],
  },
];
