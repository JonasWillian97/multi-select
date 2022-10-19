import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import '../style.css'

const animatedComponents = makeAnimated();

const options = [
  {value: 'Produto 01', label : 'Produto 01'},
  {value: 'Produto 02', label : 'Produto 02'},
  {value: 'Produto 03', label : 'Produto 03'},
  {value: 'Produto 04', label : 'Produto 04'},
  {value: 'Produto 05', label : 'Produto 05'},
  {value: 'Produto 06', label : 'Produto 06'},
  {value: 'Produto 07', label : 'Produto 07'},
  {value: 'Produto 08', label : 'Produto 08'},
  {value: 'Produto 09', label : 'Produto 09'},
  {value: 'Produto 10', label : 'Produto 10'}
];

export const MultiSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = () => {
    console.log(selectedOptions);
  };

  return (
    <>
      <Select
        defaultValue={[options[0], options[2]]}
        components={animatedComponents}
      isMulti
        options={options}
        onChange={(item) => setSelectedOptions(item)}
        className="select"
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        isLoading={false}
        isRtl={false}
        closeMenuOnSelect={false}
      />

      <button className="btn btn-primary" onClick={handleSelect}>Imprimir itens</button>
    </>
  );
};