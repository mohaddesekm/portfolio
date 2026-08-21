import type { Language } from '../locals';
import { en, fa } from '../locals';
import { IdCard, GraduationCap,Download } from 'lucide-react';

type AboutProps = {
    language: Language;
};

export default function About({ language }: AboutProps) {
    const translations = language === 'en' ? en : fa;

    return (
        <section className="grid md:grid-cols-2 items-center justify-between gap-12 pb-30">
            <div>
                <div className="grid grid-cols-1 gap-12 mb-8">
                    <div>
                        <p className="text-3xl font-bold text-primary dark:text-accent sm:text-4xl mb-4">
                            {translations.about.title}
                        </p>

                        <h2 className="flex items-center gap-2 mb-3 text-lg font-medium text-secondary">
                            <IdCard size={30} />
                            {translations.about.heading}
                        </h2>
                    </div>

                    <div>
                        <p className="text-base leading-8 text-justify text-primary/70 dark:text-accent/70 sm:text-lg">
                            {translations.about.description}
                        </p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-2">
                    <div className="px-6 py-7 rounded-md hover:scale-105 border border-accent/10">
                        <p className="flex gap-2 mb-4">
                            <GraduationCap size={30} />
                            <span className="font-bold text-xl">
                                {translations.about.Education}
                            </span>
                        </p>
                        <p className=" mb-2">{translations.about.course}</p>
                        <p className="opacity-70">
                            {translations.about.university}
                        </p>
                    </div>
                </div>
            </div>

            {/* {MY PICTURE} */}
            <div className="flex flex-col gap-6 items-center justify-center">
                <div className="w-45 rounded-full overflow-hidden border-2 border-accent">
                    <img src="/img/mohaddese.jpg" alt="mohaddese" />
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold text-3xl text-secondary'>{translations.about.name}</span>
                    <span className='opacity-80'>{translations.about.stack}</span>
                </div>
                <div dir='ltr' className='flex justify-between gap-2'>
                    <span className=" bg-accent dark:bg-primary rounded-full px-2 py-1">JavaScript</span>
                    <span className=" bg-accent dark:bg-primary rounded-full px-2 py-1">TypeScript</span>
                    <span className=" bg-accent dark:bg-primary rounded-full px-2 py-1">Next.js</span>
                </div>
                <div className='flex gap-2 items-center bg-primary text-accent rounded-lg px-5 py-3 cursor-pointer hover:scale-105 transition-all shadow-md shadow-primary'>
                    <Download size={30}/>
                    <span>{translations.about.resume}</span>
                </div>
            </div>
        </section>
    );
}
