import React, { useState } from 'react'

const NewCity = ({addCity, addDescription, chooseWeather, museumsNumber, pickPetsFriendly}) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [weather, setWeather] = useState('');
    const [museums, setMuseums] = useState('');
    const [petsFriendly, setPetsFirendly] = useState(false);
    // const [atractions, setAtractions] = useState({
    //     circus: false,
    //     church: false,
    //     library: false
    // })

    const handleSubmit = e => {
        e.preventDefault();
        addCity(name);
        addDescription(description);
        chooseWeather(weather);
        museumsNumber(museums);
        // pickAtractions(atractions.circus, atractions.church, atractions.library);
        pickPetsFriendly(e);
        setName('');
        setDescription('')
      }

      

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>City name:</label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <div>
                    <label>What is the weather?</label>
                    <select value={weather} onChange={e => setWeather(e.target.value)}>
                        <option value="Sun">Sun</option>
                        <option value="Cloudy">Cloudy</option>
                        <option value="Rain">Rain</option>
                        <option value="Windy">Windy</option>
                    </select>
                </div>
                <div>
                    <label>How many museums</label>
                    <input type="number" value={museums} onChange={e => setMuseums(e.target.value)}></input>
                </div>
                {/* <div>
                    <label>Is there Circus?</label>
                    <input name="Circus" type="checkbox" checked={atractions.circus} onChange={e => setAtractions(e.target.value)}></input>
                </div>
                <div>
                    <label>Is there Church?</label>
                    <input name="Church" type="checkbox" checked={atractions.church} onChange={e => setAtractions(e.target.value)}></input>
                </div>
                <div>
                    <label>Is there Library?</label>
                    <input name="Library" type="checkbox" checked={atractions.library} onChange={e => setAtractions(e.target.value)}></input>
                </div> */}
                <div>
                    <label>Is pets friendly?</label>
                    <input type="checkbox" name="petsFriendly" value={petsFriendly} onChange={e => setPetsFirendly(e.target.value)}></input>
                </div>
                <input type='submit' value='add' />
                
            </form>
        </div>
    )
}


export default NewCity;