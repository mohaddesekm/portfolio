import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';

type Theme = 'light' | 'dark';

export default function App() {
    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    return (
        <main className="min-h-screen bg-light-bg text-primary dark:bg-primary-dark dark:text-accent">
            <Navbar theme={theme} setTheme={setTheme} />

            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                <section
                    id="home"
                    className="flex min-h-screen items-center justify-center"
                >
                    <h1 className="text-5xl font-bold">My Portfolio</h1>
                </section>
            </div>
        </main>
    );
}
