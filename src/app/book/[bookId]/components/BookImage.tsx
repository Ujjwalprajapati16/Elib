import Image from "next/image";
import React from "react";

const BookImage = ({ coverImage, title }: { coverImage: string; title: string }) => {
  return (
    <div className="sticky top-10 w-1/3 flex-shrink-0">
      <div className="relative w-full h-[600px]">
        <Image
          src={coverImage}
          alt={title}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default BookImage;
