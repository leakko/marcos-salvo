import { StaticImageData } from 'next/image';
import geogramaLogo from '@/assets/img/geograma-logo.webp';
import vodafoneLogo from '@/assets/img/vodafone-logo.webp';
import guadaltechLogo from '@/assets/img/guadaltech-logo.webp';

interface IExperience {
  title: string;
  institution: string;
  dates: string;
  description: string;
  image: StaticImageData;
}

export const experiences: IExperience[] = [
  {
    title: 'Front-end developer',
    institution: 'Vodafone',
    dates: 'aug 2022 - Present',
    description: "Maintenance and development of features for Vodafone's website, using Angular 15+ and Stencil.js as main",
    image: vodafoneLogo,
  },
  {
    title: 'Front-end developer',
    institution: 'Geograma',
    dates: 'jan 2022 - jun 2022',
    description: 'Develop the frontend side of GIS (Geographic Information Systems), mainly through Angular',
    image: geogramaLogo,
  },
  {
    title: 'Front-end developer',
    institution: 'GuadalTech',
    dates: 'oct 2021 - jan 2022',
    description: 'Develop features for cross-platform applications using Ionic and Angular',
    image: guadaltechLogo,
  },
];
