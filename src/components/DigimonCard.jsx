function DigimonCard({ digimon }) {
    return (
        <div className="digimon-card">
            <img src={digimon.image} alt={digimon.name} />
            <h3>{digimon.name}</h3>
            {/* Mostramos dos atributos extra requeridos por el taller: Nivel y ID */}
            <p><strong>Nivel:</strong> {digimon.levels?.[0]?.level || 'Desconocido'}</p>
            <p><strong>ID:</strong> {digimon.id}</p>
        </div>
    );
}

export default DigimonCard