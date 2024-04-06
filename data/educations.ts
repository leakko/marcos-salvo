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
}

export const educations: IEducation[] = [
  {
    title: "Software Engineering Bachelor's Degree",
    institution: 'Catalonia Open University',
    dates: 'sept 2021 - Present',
    description: 'The programme of study covers the full software lifecycle: design, implementation, testing and maintenance',
    image: uocLogo,
  },
  {
    title: 'Web Development Bootcamp',
    institution: 'Ironhack',
    dates: 'jan 2021 - sept 2021',
    description: 'Main technologies:  NodeJS | ExpressJS | MongoDB | ReactJS',
    image: ironhackLogo,
  },
  {
    title: 'Joint Degree in Business Administration and Law',
    institution: 'Seville University',
    dates: 'jul 2014 - Sept 2024',
    description: '',
    image: sevilleUniversityLogo,
  },
];
