import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ 
  placeholder = 'Select option',
  options = [],
  value,
  onChange,
  disabled = false,
  fullWidth = false,
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');

  const handleSelect = (option) => {
    setSelectedValue(option?.value);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const displayValue = selectedValue 
    ? options?.find(opt => opt?.value === selectedValue)?.label || placeholder
    : placeholder;

  return (
    <div className={`relative ${fullWidth ? 'w-full' : 'w-auto'}`}>
      <button
        type="button"
        onClick={toggleDropdown}
        disabled={disabled}
        className={`
          flex items-center justify-between gap-[4px] 
          px-[8px] sm:px-[12px] py-[3px] sm:py-[4px] 
          mx-[6px] sm:mx-[8px]
          border border-[#cdcdcd] rounded-[12px] 
          text-[12px] sm:text-[14px] font-segoe font-normal 
          leading-[16px] sm:leading-[19px] text-center text-primary
          bg-secondary hover:bg-gray-50 
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-500
          ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
          ${fullWidth ? 'w-full' : 'flex-1'}
        `}
        {...props}
      >
        <span className="truncate">{displayValue}</span>
        <img 
          src="/images/img_nrkarrowdropdown.svg" 
          alt="Dropdown arrow" 
          className={`w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-secondary border border-[#cdcdcd] rounded-[12px] shadow-lg z-50 max-h-60 overflow-y-auto">
          {options?.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelect(option)}
              className="w-full px-[8px] sm:px-[12px] py-[6px] sm:py-[8px] text-left text-[12px] sm:text-[14px] font-segoe font-normal text-primary hover:bg-gray-100 transition-colors duration-200 first:rounded-t-[12px] last:rounded-b-[12px]"
            >
              {option?.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  placeholder: PropTypes?.string,
  options: PropTypes?.arrayOf(
    PropTypes?.shape({
      label: PropTypes?.string?.isRequired,
      value: PropTypes?.oneOfType([PropTypes?.string, PropTypes?.number])?.isRequired,
    })
  ),
  value: PropTypes?.oneOfType([PropTypes?.string, PropTypes?.number]),
  onChange: PropTypes?.func,
  disabled: PropTypes?.bool,
  fullWidth: PropTypes?.bool,
};

export default Dropdown;