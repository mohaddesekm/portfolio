import { useState } from 'react';
import { Menu, X } from 'lucide-react';

type NavItem = {
    label: string;
    href: string;
};

const navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <>
            <header className="fixed top-0 left-0 z-50 w-full border-b border-primary/30 bg-primary-dark/90 backdrop-blur-md">
                <nav className="mx-auto flex items-center justify-between px-4 sm:px-6 h-20 max-w-7xl lg:px-8">
                    {/* LOGO */}
                    <a
                        href="#home"
                        className="text-2xl font-bold text-accent transition-colors hover:text-secondary"
                    >
                        KM.
                    </a>

                    {/* Navigation */}

                    <ul className="hidden items-center gap-8 md:flex">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="text-sm font-medium text-accent transition-colors duration-300 hover:text-secondary"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center justify-center gap-5">
                        <button
                            type="button"
                            className="rounded-lg border border-secondary/50 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-primary"
                        >
                            Theme
                        </button>

                        <button
                            type="button"
                            className="md:hidden cursor-pointer transition-colors hover:text-secondary"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>
            </header>
            <div
                className={`fixed w-full overflow-hidden transition-all duration-300 md:hidden bg-primary-dark shadow-lg shadow-black/40 rounded-b-2xl z-40 ${isMenuOpen ? 'max-h-96 opacity-100 top-20' : 'max-h-0 opacity-0 -top-full'}`}
            >
                <nav className="flex flex-col my-3">
                    <ul>
                        {navItems.map((item) => (
                            <li
                                key={item.href}
                                className="h-10 transition-all duration-200 hover:bg-primary/30 text-accent hover:text-secondary"
                            >
                                <a
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block text-sm font-medium px-6 h-full content-center"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
}
