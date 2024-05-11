import { useState, useRef, useEffect } from 'react';

const SearchDropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownMenuRef = useRef(null);
  const [SelectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleClick = (e) => {
    const value =  e.target.textContent;
    setSelectedValue(value);
    setIsOpen(false);
    onSelect(value);
  }

  const handleClickOutside = (event) => {
    if (dropdownMenuRef && !dropdownMenuRef.contains(event.target)) {
      setIsOpen(false);
    }
  };

  

  return (
    <div >
      <div className="">
        <button
          id="dropdown-button"
          className="inline-flex w-52 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          onClick={toggleDropdown}
        >
          <span className="mr-2">{SelectedValue ? SelectedValue : "Select"}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <div id="dropdown-menu" ref={dropdownMenuRef} className={isOpen ? 'absolute bg-white' : 'hidden '} >
          <input
            id="search-input"
            className="block  px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
            type="text"
            placeholder="Search items"
            autoComplete="off"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <div className="space-y-1">
            {options.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                style={{ display: searchTerm === '' || item.Name.toLowerCase().includes(searchTerm) ? 'block' : 'none' }}
                onClick={handleClick}
              >
                {item.Name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDropdown;
