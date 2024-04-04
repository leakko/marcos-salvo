export interface Section {
  id: number;
  path: SectionPathEnum;
  name: string;
  description: string;
}

export enum SectionPathEnum {
  home = '/#home',
  aboutMe = '/#about',
  workExperience = 'work-experience',
  education = 'education',
  skills = 'skills',
  contactMe = 'contact-me',
}
