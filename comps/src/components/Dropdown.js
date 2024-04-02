import { useState } from 'react';

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handelOptionClick = (option) => {
        // CLOSE DROPDOWN
        setIsOpen(false);
        // WHAT OPTION DID THE USER CLICK ON???
        onChange(option);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div onClick={() => handelOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        );
    });

    return (
        <div>
            <div onClick={handleClick}>
                {value?.label || 'Select...'}
            </div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    );
}

export default Dropdown;