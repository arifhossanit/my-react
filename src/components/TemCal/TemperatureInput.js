import React from 'react';

const scaleName={
    c:'Celsius',
    f:'Fahrenheit'
};
export default function TemperatureInput ({scale,temperature,onTemChange})
{
    return (
        <form action="">
            <fieldset>
                <legend>Enter Temperature in {scaleName[scale]}</legend>
              <input type="text" value={temperature} onChange={(e)=>onTemChange(e, scale)}/>
            </fieldset>
        </form>
  )
}
