import { useState } from "react"
import Dropdown from "../components/Dropdown"

function DropdownPage() {
  const [selection, setSection] = useState(null)

  const handleSelect = (option) => {
    setSection(option)
  }

  const options = [
    { id: '123123', label: 'Red', value: 'red' },
    { id: 'asdvsa', label: 'Green', value: 'green' },
    { id: 'jeefcv', label: 'Blue', value: 'blue' },
  ]

  return (
    <div className="flex">
      <Dropdown 
        options={options} 
        value={selection} 
        onChange={handleSelect} 
      />
    </div>
  )
}

export default DropdownPage