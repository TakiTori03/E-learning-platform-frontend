import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconClock, IconEye, IconStar } from "../icons";

const CourseItem = () => {
  const cousreInfo = [
    {
      title: "1000",
      icon: (className?: string) => <IconEye className={className}></IconEye>,
    },
    {
      title: "5.0",
      icon: (className?: string) => <IconStar className={className}></IconStar>,
    },
    {
      title: "30h25",
      icon: (className?: string) => (
        <IconClock className={className}></IconClock>
      ),
    },
  ];
  return (
    <div className="bg-white border-gray-200 dark:bg-grayDarker dark:border-opacity-10 p-4 rounded-2xl ">
      <Link href="#" className="block h-[200px] relative">
        <Image
          src="https://images.unsplash.com/photo-1726137065565-2c088892ee76?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={300}
          height={200}
          className="w-full h-full object-cover rounded"
          sizes="@media{min-width: 640px} 300px, 100vw"
          priority
        />
        <span className="inline-block px-3 py-1 rounded-full absolute top-3 right-3 z-10 text-white font-medium bg-green-500 text-xs">
          New
        </span>
      </Link>
      <div className="pt-4">
        <h3 className="font-bold text-lg mb-5">Khoá học Nextjs14 tutorial</h3>
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-5 dark:text-grayDark">
          {cousreInfo.map((item, index) => {
            return (
              <div className="flex items-center gap-2" key={index}>
                {item.icon("size-5")}
                <span>{item.title}</span>
              </div>
            );
          })}

          <span className="font-bold ml-auto text-base text-primary">
            799.000
          </span>
        </div>

        <Link
          href="#"
          className="flex items-center justify-center w-full mt-10 rounded-lg text-white  font-semibold bg-primary h-10"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default CourseItem;
