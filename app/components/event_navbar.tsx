import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";




export default function Event_navbar() {
  return (
    <div className="w-full h-[100px] bg-red-500 flex items-center">
       <div className="flex flex-col sm:flex-row justify-between items-center sm:mx-[200px] w-[1000px]">
       <div>
       <input
            type="text"
            placeholder="ALL EVENTS"
            className="bg-red-500 placeholder:text-white w-[300px] border-white border"
          />
       </div>
       <div className=" flex items-center">
       <IoIosArrowBack className="text-white" />
       <input
            type="text"
            placeholder="SUN, OCT 6"
            className="bg-red-500  placeholder:text-white w-[300px] border-white border"
          />
          <IoIosArrowForward className="text-white" />
       </div>
       </div>
       
    </div>
  );
}














// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// export default function Navbar() {
//   return (
//     <div className="w-full h-[100px] bg-orange-600 flex items-center justify-center px-4">
//       <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-center w-full max-w-[600px]">
//         {/* All Events Input */}
//         <div className="border border-white w-full sm:w-auto">
//           <input
//             type="text"
//             placeholder="ALL EVENTS"
//             className="bg-orange-600 w-full sm:w-[300px] placeholder-white text-white border-white border px-4 py-2 focus:outline-none text-center"
//           />
//         </div>
//         {/* Date Selector */}
//         <div className="flex items-center w-full sm:w-auto justify-center">
//           <IoIosArrowBack className="text-white" />
//           <input
//             type="text"
//             placeholder="SUN, OCT 6"
//             className="bg-orange-600 w-full sm:w-[300px] placeholder-white text-white border-white border px-4 py-2 mx-2 focus:outline-none text-center"
//           />
//           <IoIosArrowForward className="text-white" />
//         </div>
//       </div>
//     </div>
//   );
// }
