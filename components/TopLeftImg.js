import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute top-0 left-0 mix-blend-color-dodge z-10 w-[200px] lg:w-[400px] opacity-50">
      <Image
        src={"/top-left-img.png"}
        alt="top-left-img"
        width={300}
        height={300}
      />
    </div>
  );
};

export default TopLeftImg;
