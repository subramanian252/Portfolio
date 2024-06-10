import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { CgLogIn } from "react-icons/cg";

import { CiDatabase } from "react-icons/ci";

import { FreeMode, Pagination } from "swiper";
// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Responsive Web Design",
    description:
      "Ensure websites are fully responsive and optimized for all devices, providing a seamless user experience",
  },
  {
    icon: <RxPencil2 />,
    title: "Custom API Development",
    description:
      "Design and implement RESTful and GraphQL APIs to support complex application functionalities",
  },
  {
    icon: <CiDatabase />,
    title: "Database Management",
    description:
      "Set up and manage databases (SQL, NoSQL) to ensure efficient data storage, retrieval, and manipulation",
  },
  {
    icon: <RxReader />,
    title: "Server-Side Rendering (SSR)",
    description:
      "Build dynamic websites with Next.js that render on the server for improved performance and SEO.",
  },
  {
    icon: <CgLogIn />,
    title: "User Authentication & Authorization",
    description:
      "implement secure user authentication and authorization systems using tools like JWT, OAuth, and Firebase",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-white/[.03] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-white/[.07] transition-all duration-300 h-[500px]">
            <div className="text-4xl text-accent mb-4 self-center">
              {item.icon}
            </div>
            <div className="mb-8">
              <div className="mb-2 text-lg text-center h-[60px]">
                {item.title}
              </div>
              <p className="max-w-[350px] text-center">{item.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
