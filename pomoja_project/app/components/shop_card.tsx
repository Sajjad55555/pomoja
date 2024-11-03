
import { BsFilterLeft } from "react-icons/bs";

export default function ShopCard({ imageUrl, title, showIcon = false }:any) {
  return (
    <div className="relative w-full h-[600px]">
      {showIcon && (
        <BsFilterLeft className="absolute top-2 left-2 text-white text-4xl z-10" />
      )}
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex justify-center items-center">
        <span className="text-white text-xl">{title}</span>
      </div>
    </div>
  );
}
