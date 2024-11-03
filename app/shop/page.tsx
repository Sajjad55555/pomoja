import ShopCard from "../components/shop_card";

export default function Shop() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <ShopCard imageUrl="/New folder/bag1.png" title="Hello World 1" showIcon={true} />
        <ShopCard imageUrl="/New folder/bag2.png" title="Hello World 2" />
        <ShopCard imageUrl="/New folder/couple 2.svg" title="Hello World 3" />
        <ShopCard imageUrl="/New folder/IMG_0199 2.svg" title="Hello World 4" />
      </div>
    </div>
  );
}







 
