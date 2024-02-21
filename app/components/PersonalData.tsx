const PersonalData: React.FC = () => {
    return (
        <header className="container mx-auto flex flex-col items-center justify-center mb-8">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">DANIEL GARCÍA ROJAS</h1>
            <h2 className="text-2xl font-medium text-gray-600 mb-4">FULL STACK DEVELOPER</h2>
            <div className="flex flex-row justify-center gap-4">
                <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-700 hover:text-gray-900 transition duration-300"
                    >
                        <path d="M9 19c-4.3 0-8-3.7-8-8 0-3.3 2.7-6 6-6 1.3 0 2.4.7 3 1.7 0.6-1 1.7-1.7 3-1.7 3.3 0 6 3.7 6 8 0 4.3-2.7 8-6 8zm0-12c-2.2 0-4 1.8-4 4 0 2.2 1.8 4 4 4 2.2 0 4-1.8 4-4 0-2.2-1.8-4-4-4z" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-700 hover:text-gray-900 transition duration-300"
                    >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7c-2.4 0-4.1-1.7-4.9-4.1S17.6 8 16 8zM19 16v-5c0-2.8-1.7-5-4.5-5S10 8.2 10 11v5h4v-3s1.5-1.3 3-1.3s2.5 1 3 1.3V16z" />
                    </svg>
                </a>
                <a href="https://www.instagram.com/username" target="_blank" rel="noopener noreferrer">
                    {/* Aquí continúa el código para el icono de Instagram */}
                </a>
            </div>
        </header>
    );
};

export default PersonalData;
