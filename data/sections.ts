import { Section, SectionPathEnum } from '@/models/section';

export const sections: Section[] = [
  {
    id: 1, path: SectionPathEnum.aboutMe, name: 'About Me', description: 'About Me',
  },
  {
    id: 2, path: SectionPathEnum.workExperience, name: 'Experience', description: 'Work Experience',
  },
  {
    id: 3, path: SectionPathEnum.education, name: 'Education', description: 'Education',
  },
  {
    id: 4, path: SectionPathEnum.skills, name: 'Skills', description: 'Skills',
  },
  {
    id: 5, path: SectionPathEnum.contactMe, name: 'Contact me', description: 'Contact me',
  },
];
