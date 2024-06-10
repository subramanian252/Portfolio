import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex ">
      <Image
        src={"/avatar.png"}
        alt="avatar"
        width={737}
        height={900}
        className=" translate-z-0 w-full"
      />
    </div>
  );
};

export default Avatar;
