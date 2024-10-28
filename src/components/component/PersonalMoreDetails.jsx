import { ButtonIDCard } from "../component/Button";

export const PersonalMoreDetails = () => {
  return (
    <div className=" border-b border-gray-400 pb-3">
      <div className="flex  items-center justify-between    gap-16">
        <div >
          <h1 className="text-sm text-gray-400 my-1">Mobile Number</h1>
          <h5>+91 098765432</h5>
        </div>
        <div>
          <h1 className="text-sm text-gray-400 my-1 ">Whatsapp Number</h1>
          <h5>+91 098765432</h5>
        </div>
      </div>
      <div className="flex  items-center  justify-between  py-2 gap-16">
        <div>
          <h1 className="text-sm text-gray-400 my-1">Parant Details</h1>
          <h5>Seamano</h5>
          <h5>Engeer</h5>
        </div>
        <div>
        <h1 className="text-sm text-gray-400 my-2">Apr 2024 - March 2025</h1>
          <h5>243 hr</h5>
          <ButtonIDCard title='Generate ID Card' bgColor='bg-gray-400'/>
        </div>
      </div>
    </div>
  );
};


export const PersonalMentorDetails = () => {
  return (
    <div className="my-2">
    <h2 className="text-gray-500 mb-2">Mentor</h2>
    <div className="flex items-center gap-4">
      <div className="relative ">
        <img
          src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Mr. Thomson"
          className="rounded w-12 "
        />
      </div>
      <div>
        <h3 className="font-normal text-sm">Mr. Thomson</h3>
        <p className="text-sm text-gray-500">234678</p>
      </div>
    </div>
  </div>
  )
}
