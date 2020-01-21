import React, { useState } from 'react';
import NewCity from './NewCity';
import uuid from 'uuid/v1';

const Basics = () => {

        const [cities, setCities] = useState([
            {name: 'Wrocław', id: uuid},
            {name: 'Gdynia', id: uuid}
        ]);

    const addCity = name => {
        setCities([...cities, {name, id: uuid}]);
    };

    return (
        <div>
            <ul>
                {cities.map(city => <li key={city.id}>{city.name}</li>)}
            </ul>
            <NewCity addCity={addCity} />
        </div>
    )
}

export default Basics;