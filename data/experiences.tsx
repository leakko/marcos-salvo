import { StaticImageData } from 'next/image';

import geogramaLogo from '@/assets/img/geograma-logo.webp';
import vodafoneLogo from '@/assets/img/vodafone-logo.webp';
import guadaltechLogo from '@/assets/img/guadaltech-logo.webp';

interface IExperience {
  title: string;
  institution: string;
  institutionUrl: string;
  initialDate: Date;
  finalDate?: Date;
  image: StaticImageData;
  description: string;
  mainItems: string[];
  secondaryItems?: string[];
}

export const experiences: IExperience[] = [
  {
    title: 'Frontend developer (React)',
    institution: 'Vodafone',
    institutionUrl: 'https://www.vodafone.es/',
    initialDate: new Date(2024, 3, 1),
    image: vodafoneLogo,
    description: "Development of Vodafone's apps for companies",
    mainItems: [
      "Development of <a href='https://www.vodafone.es/c/empresas/es/mi-vodafone-business/'>Vodafone's Website for companies</a> using React",
      "Development of <a href='https://play.google.com/store/apps/details?id=com.edc&hl=es&gl=US&pli=1'>Vodafone's mobile app for companies</a> using React Native.",
    ],
  },
  {
    title: 'Frontend developer (Angular)',
    institution: 'Vodafone',
    institutionUrl: 'https://www.vodafone.es/',
    initialDate: new Date(2022, 7, 1),
    finalDate: new Date(2024, 3, 1),
    image: vodafoneLogo,
    description: "Maintenance and development of features for Vodafone's website, using Angular 15+ and React.js as main technologies",
    mainItems: [
      "Maintain and develop features for <a href='https://www.vodafone.es/c/particulares/es/'>Vodafone's website</a>, using Angular 15+ and TypeScript as main technologies",
      'Manage big sets of customers and products data using Redux (NgRx)',
      'Intensive use of Promises, Observables and RxJs to create reactive asynchronous architectures',
      'Optimize analytics delivery architecture using Custom Directives, RxJS, and NgRX',
      'Implement Angular good practices as: lazy loading, OnPush change detection, View Manipulation, etc. to make an application that handles big amounts of data properly',
    ],
    secondaryItems: [
      "Develop React components for specific pages like Vodafone's rate configurator",
      "Conduct Angular workshops for colleagues (f.ex. about <a href='https://medium.com/@marcossalvo95/understanding-angular-view-dom-manipulation-in-depth-analysis-12c1c4f2f5de'>Virtual DOM manipulation</a>)",
      "Maintain and develop Vodafone's Configurator website using Stencil.js (until 10/2023, when it became legacy)",
    ],
  },
  {
    title: 'Frontend developer (Angular)',
    institution: 'Geograma',
    institutionUrl: 'https://www.geograma.com/',
    initialDate: new Date(2022, 0, 1),
    finalDate: new Date(2022, 6, 1),
    image: geogramaLogo,
    description: 'Develop the frontend side of GIS (Geographic Information Systems), mainly using Angular framework',
    mainItems: [
      "Main frontend developer of <a href='https://geo.araba.eus/geobisorea/'>GeoAraba</a>, the Álava's (province of Spain) public map visualizer (Angular).",
      'Develop the frontend side of GIS (Geographic Information Systems), mainly using Angular framework.',
      'Use <a href"https://openlayers.org/">OpenLayers</a> to transform Geographic Information into maps.',
    ],
  },
  {
    title: 'Frontend developer (Angular)',
    institution: 'GuadalTech',
    institutionUrl: 'https://www.guadaltech.es/',
    initialDate: new Date(2021, 9, 1),
    finalDate: new Date(2022, 1, 1),
    image: guadaltechLogo,
    description: 'Develop features for cross-platform applications using Ionic and Angular',
    mainItems: [
      'Develop features for cross-platform applications using Ionic and Angular',
    ],
  },
];
