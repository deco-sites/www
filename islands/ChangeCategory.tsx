import { useState } from "preact/hooks";

type CategoryProps = {
    category: string;
}

function ChangeCategory({category}: CategoryProps) {
    const [showColor, setShowColor] = useState(false);
    
    const handleClick = () => {
        setShowColor(!showColor);
    }
  return (
    <button class={`bg-white uppercase border-none rounded-full px-3 ${
        showColor ? "bg-blue-900 rounded-full text-white px-3 border-none" : ""
      }`}
      onClick={handleClick}
      >
        {category}
    </button>
  )
}

export default ChangeCategory