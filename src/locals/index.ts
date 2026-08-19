export type Language = 'en' | 'fa';

export { en } from './en';
export { fa } from './fa';

export type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    demoUrl?: string;
    githubUrl: string;
    skills: string[];
};
