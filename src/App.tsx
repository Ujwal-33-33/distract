import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Popup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    // Add action logic here (e.g., chrome.tabs.create)
  };

  return (
    <div className="popup-container">
      <button 
        className="dropdown-toggle" 
        type = "button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || 'Select an option'}
      </button>
      
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li 
              key={option}
              className="menu-item"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Popup;
