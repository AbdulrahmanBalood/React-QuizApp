import { useState } from 'react';
import { Select } from '@chakra-ui/react';
export const OptionsComponent = ({ List, placeholder, onChange }) => {
  
  let placeHolderValue = 'Select ' + placeholder;
  return (
    <Select
      onChange={onChange}
      width={['55%','35%','20%','15%']}
      variant="filled"
    >
         <option selected hidden disabled value={"notSelected"}>{placeHolderValue}</option>
      {List?.map((options, index) => {
        return (
        
            <option key={index} value={options.value}>
              {options.lable}
            </option>
         
        );
      })}
    </Select>
  );
};
