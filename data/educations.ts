import { StaticImageData } from 'next/image';
import uocLogo from '@/assets/img/uoc-logo.webp';
import ironhackLogo from '@/assets/img/ironhack-logo.webp';
import sevilleUniversityLogo from '@/assets/img/seville-university-logo.webp';

interface IEducation {
  title: string;
  institution: string;
  dates: string;
  description: string;
  image: StaticImageData;
  mainItems: string[];
  secondaryItems?: string[];
}

export const educations: IEducation[] = [
  {
    title: "Software Engineering Bachelor's Degree",
    institution: 'Catalonia Open University',
    dates: 'sept 2021 - Present',
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
    dates: 'jan 2021 - sept 2021',
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
    dates: 'jul 2014 - Sept 2024',
    description: '408 ECTS credits',
    image: sevilleUniversityLogo,
    mainItems: [
      `With the Double Degree in Business Administration and Law, you'll earn two official degrees and define a multifaceted 
      and differentiating professional profile for yourself: Mastering both the legal and business fields will enable you to provide a lawyer's 
      perspective to business projects and, at the same time, apply your business acumen to legal matters`,
    ],
  },
];
