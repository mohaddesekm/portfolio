import type { SkillCategory } from '../locals';
import { FaCode } from 'react-icons/fa6';
import { LuLibrary } from 'react-icons/lu';
import { AiOutlineFormatPainter } from 'react-icons/ai';
import { GoWorkflow } from 'react-icons/go';
import { RiToolsFill } from 'react-icons/ri';

export const skillCategories: SkillCategory[] = [
    {
        id: 'frontendCore',
        titleKey: 'Frontend Core',
        skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
        icon: <FaCode />,
    },
    {
        id: 'librarieFrameworks',
        titleKey: 'Libraries / Frameworks',
        skills: ['React', 'React Router', 'React Hooks Form'],
        icon: <LuLibrary />,
    },
    {
        id: 'styling',
        titleKey: 'Styling',
        skills: [
            'Tailwind CSS',
            'CSS',
            'Responsive Design & Mobile-First',
            'RTL',
        ],
        icon: <AiOutlineFormatPainter />,
    },
    {
        id: 'concepts',
        titleKey: 'Concepts',
        skills: [
            'React Hooks',
            'Component-Based Architecture',
            'Data Fetching & Catching',
            'REST API',
        ],
        icon: <GoWorkflow />,
    },
    {
        id: 'toolsWorkflow',
        titleKey: 'Tools & Workflow',
        skills: [
            'Git',
            'GitHub',
            'Version Control Workflow (Branches, commits, ...)',
            'VS Code',
            'Chrome DevTools',
            'pnpm',
            'Vercel',
            'Figma',
        ],
        icon: <RiToolsFill />,
    },
];
