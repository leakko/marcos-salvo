export interface Section {
  id: number;
  name: string;
  publicName: string;
  description: string;
}

export enum SectionNameEnum {
  aboutMe = 'about-me',
  workExperience = 'work-experience',
  education = 'education',
  skills = 'skills',
}

export interface SectionProviderValue {
  section: Section;
  setSectionByName: (sectionName: string) => void;
  navigateToSectionByName: (sectionName: string) => void;
}
