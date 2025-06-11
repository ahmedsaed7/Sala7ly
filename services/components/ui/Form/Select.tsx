import React from 'react';
import Select from 'next-select';

const CustomSelect = ({ options, onChange }) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      styles={{
        control: (base, state) => ({
          ...base,
          borderColor: state.isFocused ? 'var(--primary)' : 'var(--secondary)',
        }),
        option: (base, { isFocused }) => ({
          ...base,
          backgroundColor: isFocused ? 'var(--primary)' : 'var(--light)',
          color: isFocused ? 'var(--light)' : 'var(--primary)',
        }),
      }}
    />
  );
};

export default CustomSelect;