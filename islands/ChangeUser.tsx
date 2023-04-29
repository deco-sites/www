import { useState } from 'preact/hooks';

function Switcher() {
    const options = ['Para negócios', 'Para desenvolvedores'];
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);
     
    const handleOptionClick = (option:string, index:number) => {
      setSelectedOption(option);

      setShowOptions(false);
    };
  
    return (
      <div className="relative w-[240px]">
        <a
          className="ml-2 mt-6 px-2 py-2 text-white border-[transparent] rounded-full cursor-pointer border-1 md:hover:(border-[#2FD180] border-1 rounded-full) focus:outline-none md:transition md:ease-in-out md:duration-300"
          onClick={() => setShowOptions(!showOptions)}
        >
          {selectedOption}
          <svg
            className={`w-4 h-4 ml-2 inline transition-transform duration-300 ease-in-out ${
              showOptions ? 'transform rotate-180 duration-300 ease-in-out' : ''
            }`}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        <div className={`absolute w-full left-0 mt-2 ${showOptions ? 'block pt-[40px] z-10' : 'hidden'}`}>
          <div className="shadow-lg">
            <div className="py-4 bg-black absolute gap-5 w-[220px]">
              {options.map((option, index) => (
                <button
                  key={option}
                  className={`w-full text-left px-4 py-2 text-[16px]  text-[#2FD180] ${
                    selectedOption === option ? 'bg-black' : ''
                  }`}
                  onClick={() => handleOptionClick(option, index)}
                >
                  {option}
                  {selectedOption === option && (
                    <svg
                      className="w-4 h-4 ml-2 inline"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Switcher;
