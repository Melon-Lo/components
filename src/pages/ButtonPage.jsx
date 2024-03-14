import Button from "../components/Button"
import { GrAction } from "react-icons/gr";

function ButtonPage() {
  const handleClick = () => {
  }

  const handleMouseEnter = () => {
  }

  return (
    <div>
      <div>
        <Button 
          primary 
          onClick={handleClick} 
          onMouseEnter={handleMouseEnter}
          className="mb-5"
        >
          <GrAction />
          Go
        </Button>
      </div>
      <div>
        <Button secondary onMouseEnter={handleMouseEnter}>Hi</Button>
      </div>
      <div>
        <Button success>Hi</Button>
      </div>
      <div>
        <Button warning>Hi</Button>
      </div>
      <div>
        <Button danger outline>Hi</Button>
      </div>
    </div>
  )
}

export default ButtonPage