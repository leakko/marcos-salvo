export interface Section {
  id: number;
  path: SectionPathEnum;
  name: string;
  description: string;
}

export enum SectionPathEnum {
  aboutMe = 'about-me',
  workExperience = 'work-experience',
  education = 'education',
  skills = 'skills',
}
