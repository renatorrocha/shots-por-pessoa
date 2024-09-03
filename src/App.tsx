import React, { useState } from "react";
import "./global.css";

function App() {
    const [pessoasQueChegaramAntes, setPessoasQueChegaramAntes] = useState(0);
    const [shotsPerPerson, setShotsPerPerson] = useState(1);

    function calcularshot(
        pessoasQueChegaramAntes: number,
        shotsPerPerson: number
    ) {
        const totalShots = shotsPerPerson * pessoasQueChegaramAntes;
        return totalShots;
    }

    const handlePessoasChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = parseInt(event.target.value, 10) || 0;
        setPessoasQueChegaramAntes(value);
    };

    const handleShotsPerPersonChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = parseInt(event.target.value, 10) || 1;
        setShotsPerPerson(value);
    };

    return (
        <div className="m-auto flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="shotsPerPerson">Shots por pessoa</label>
                    <input
                        id="shotsPerPerson"
                        type="number"
                        value={shotsPerPerson}
                        onChange={handleShotsPerPersonChange}
                        className="p-2 rounded-md border border-gray-200 shadow-md"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="pessoasQueChegaramAntes">
                        Número de pessoas que chegaram antes
                    </label>
                    <input
                        id="pessoasQueChegaramAntes"
                        type="number"
                        value={pessoasQueChegaramAntes}
                        onChange={handlePessoasChange}
                        className="p-2 rounded-md border border-gray-200 shadow-md"
                    />
                </div>
            </div>
            <p className="text-2xl font-bold mt-4">
                Total de shots:{" "}
                {calcularshot(pessoasQueChegaramAntes, shotsPerPerson)}
            </p>
        </div>
    );
}

export default App;
