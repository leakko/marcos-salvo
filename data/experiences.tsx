import { StaticImageData } from 'next/image';

import geogramaLogo from '@/assets/img/geograma-logo.webp';
import vodafoneLogo from '@/assets/img/vodafone-logo.webp';
import guadaltechLogo from '@/assets/img/guadaltech-logo.webp';

interface IExperience {
  title: string;
  institution: string;
  dates: string;
  image: StaticImageData;
  description: string;
  mainItems: string[];
  secondaryItems?: string[];
}

export const experiences: IExperience[] = [
  {
    title: 'Front-end developer',
    institution: 'Vodafone',
    dates: 'aug 2022 - Present',
    image: vodafoneLogo,
    description: "Maintenance and development of features for Vodafone's website, using Angular 15+ and Stencil.js as main technologies",
    mainItems: [
      "Maintain and develop features for Vodafone's website,using Angular 15+ and TypeScript as main technologies",
      'Manage big sets of customers and products data using Redux (NgRx)',
      'Intensive use of Promises, Observables and RxJs to create reactive asynchronous architectures',
      'Develop the architecture to send information and events from Vodafone.es to Tealium (data analytics software)',
      'Optimize analytics delivery architecture using Custom Directives, RxJS, and NgRX',
      'Implement Angular good practices as: lazy loading, OnPush change detection, View Manipulation, etc. to make an application that handles big amounts of data properly',
    ],
    secondaryItems: [
      "Develop React componentes for specific pages like Vodafone's rate configurator",
      'Attend and actively participate in training sessions and masterclasses about React, which cover topics such as Next.js, HOC (Higher-Order Components), Redux, React-Query, Context, Hooks, Custom Hooks, etc',
      'Conduct Angular workshops for colleagues (f.ex. about Virtual DOM manipulation)',
      "Maintain and develop Vodafone's Configurator website using Stencil.js (until 10/2023, when it became legacy)",
    ],
  },
  {
    title: 'Front-end developer',
    institution: 'Geograma',
    dates: 'jan 2022 - jun 2022',
    image: geogramaLogo,
    description: 'Develop the frontend side of GIS (Geographic Information Systems), mainly using Angular framework',
    mainItems: [
      'Main frontend developer of the Álava (province of Spain) public map visualizer (Angular).',
      'Develop the frontend side of GIS (Geographic Information Systems), mainly using Angular framework.',
      'Use OpenLayers to transform Geographic Information into maps.',
    ],
  },
  {
    title: 'Front-end developer',
    institution: 'GuadalTech',
    dates: 'oct 2021 - jan 2022',
    image: guadaltechLogo,
    description: 'Develop features for cross-platform applications using Ionic and Angular',
    mainItems: [
      'Develop features for cross-platform applications using Ionic and Angular',
    ],
  },
];
