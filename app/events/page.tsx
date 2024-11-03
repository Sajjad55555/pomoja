import { BsFilterLeft } from "react-icons/bs";
import Member_div from "../components/member";
import { MdArrowOutward } from "react-icons/md";
import Event_navbar from "../components/event_navbar";


export default function Event() {
  return (
    // main div
    <div>
      {/* logo div */}
      <div className="flex flex-row justify-between items-center sm:flex-row sm:justify-center">
        <div className="text-4xl font-bold mx-4"><BsFilterLeft /></div>
        <div className="flex-1 text-center text-2xl font-bold">PAMOJA</div>
      </div>

      {/* event div */}
      <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:mx-10 lg:mx-48 mt-10">
        <div className="text-center sm:text-left">
          <span className="text-3xl sm:text-5xl font-bold">EVENTS</span>
          <p className="text-orange-700 font-semibold text-lg sm:text-xl">UPCOMING EVENTS</p>
        </div>
        <div className="font-semibold text-slate-500 text-lg sm:text-xl mt-4 flex items-center sm:mt-0">OUR MAILING LIST<MdArrowOutward /></div>
      </div>
      {/* navbar div */}
      <div>
        <Event_navbar/>
      </div>
      {/* member div */}
      <div className=" mt-8">
        <Member_div title='Sun, Oct 6'/>
        <Member_div />
        <Member_div title='Mon, Oct 6' />
        <Member_div />
      </div>
    </div>
  );
}
