import { FaChevronUp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            dir="ltr"
            className="relative max-w-7xl mx-auto px-6 py-8 font-thin text-sm"
        >
            <a
                href="#home"
                className="absolute scale-200 p-2 -top-4 right-10 text-primary dark:text-accent bg-accent/80 dark:bg-primary/70 border border-primary/20 dark:border-accent/30 rounded-full cursor-pointer z-50 transition-all duration-300 hover:-translate-y-1"
            >
                <FaChevronUp />
            </a>

            <div className="text-xl text-center mb-6">WE LOOK UP</div>

            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4">
                <div className="flex items-center justify-center gap-2">
                    <span> Built pixel by pixel by Mohaddese</span>
                    {/* <span className="scale-120">
                        <FaRegFaceGrinWink />
                    </span> */}
                </div>
                <div>© 2026 Built with TypeScript & Tailwind CSS.</div>
            </div>
        </footer>
    );
}
