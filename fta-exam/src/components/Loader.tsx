import { CgOpenCollective } from "react-icons/cg";

const Loader = () => {
  return (
    <div className='absolute top-1/2 left-1/2 animate-spin'>
      <div className=''><CgOpenCollective size={70} className="text-neutral-700"/></div>
    </div>
  )
}

export default Loader