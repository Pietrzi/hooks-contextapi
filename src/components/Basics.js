import React, { useState } from 'react';
import NewCity from './NewCity';
import uuid from 'uuid/v1';

const Basics = () => {

        const [cities, setCities] = useState([
            {name: 'Wrocław', id: uuid},
            {name: 'Gdynia', id: uuid}
        ]);

        const [description, setDescription] = useState('');

        const [weather, setWeather] = useState('');

        // const [atractions, setAtractions] = useState({
        //     circus: false,
        //     church: false,
        //     library: false
        // })

        const [museums, setMuseums] = useState(0);

        let [petsFriendly, setPetsFriendly] = useState(false);


    const addCity = name => {
        setCities([...cities, {name, id: uuid}]);
    };

    const addDescription = description => {
        setDescription(description);
    }

    const chooseWeather = weather => {
        setWeather(weather);
    }

    // const pickAtractions = (circus, church, library) => {
    //     setAtractions({
    //         circus: circus,
    //         church: church,
    //         library: library
    //     })
    // }

    const museumsNumber = museums => {
        setMuseums(museums);
    }

    const pickPetsFriendly = e => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        setPetsFriendly(petsFriendly = value)
    }

    return (
        <div>
            <ul>
                {cities.map(city => <li key={city.id}>{city.name}</li>)}
            </ul>
            {description ? <p>{description}</p> : null }
            {weather ? <p>{weather}</p> : null }
            {museums ? <p>{museums}</p> : null }
            {/* {atractions.circus ? <span>{atractions.circus}</span> : null }
            {atractions.church ? <span>{atractions.church}</span> : null }
            {atractions.library ? <span>{atractions.library}</span> : null } */}
            <p>It is{petsFriendly ? null : <span> not</span>}</p>
            <NewCity addCity={addCity} addDescription={addDescription} chooseWeather={chooseWeather} museumsNumber={museumsNumber} pickPetsFriendly={pickPetsFriendly} />
        </div>
    )
}

export default Basics;