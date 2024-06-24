import { Section, SectionPathEnum } from '@/models/section';

export const sections: Section[] = [
  {
    id: 1, path: SectionPathEnum.home, name: '🏠 Home', description: 'Home',
  },
  {
    id: 2, path: SectionPathEnum.aboutMe, name: '❔ About', description: 'About Me',
  },
  {
    id: 3, path: SectionPathEnum.workExperience, name: '👔 Experience', description: 'Work Experience',
  },
  {
    id: 4, path: SectionPathEnum.education, name: '✍️ Education', description: 'Education',
  },
  {
    id: 5, path: SectionPathEnum.contactMe, name: '📱 Contact', description: 'Contact form',
  },
];
