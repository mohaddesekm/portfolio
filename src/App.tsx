import './App.css';
import Navbar from './components/Navbar';

export default function App() {
    return (
        <main className="min-h-screen bg-primary-dark text-accent">
            <Navbar />

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
