//Task 2: Dynamic Routes for Character Details
import { Link } from 'react-router-dom';

const BrowseCharacters = () => {
    const characters = [{ id: 1, name: 'Spider-Man' }, { id: 2, name: 'Iron Man' }];
    return (
        <div>
            <h2>Browse Characters</h2>
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                        <Link to={`/character-details/${character.id}`}>{character.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrowseCharacters;