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
    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-primary/30 bg-primary-dark/90 backdrop-blur-md">
            <nav className="mx-auto flex items-center justify-between px-6 h-20 max-w-7xl lg:px-8">
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
                                className="text-sm font-medium text-accent transition-colors hover:text-secondary"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Theme Button */}
                <button
                    type="button"
                    className="rounded-lg border border-secondary/50 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-primary"
                >
                    Theme
                </button>
            </nav>
        </header>
    );
}
