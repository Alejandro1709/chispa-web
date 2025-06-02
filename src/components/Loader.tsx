import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'

function Loader() {
  return (
    <div>
      <Ring size="20" stroke="5" bgOpacity="0" speed="2" color="white" />
    </div>
  )
}

export default Loader
