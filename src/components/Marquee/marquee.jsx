"use client";

const marqueeItems = [
  {
    author: "Damien Schneider",
    content: "The best listing company i know of",
    link: "#",
  },
  {
    author: "Winner James",
    content: "Their services was top notch, will recommend them",
    link: "#",
  },
  {
    author: "Mary Johnson",
    content: "Want to gain upperhand in the crypto industry.Try Fasttrack",
    link: "#",
  },
  {
    author: "John Mark",
    content: "They are transparent in their dealings.",
    link: "#",
  },
  {
    author: "Yu Hao",
    content: "I was impressed by their services.They took me through the process smoothly.",
    link: "#",
  },
];

export default function MarqueeVariant1() {
  return (
    <div className="-mt-[20rem] grid place-content-center absolute marquee">

    <div className="mt-10 mb-10 grid marquee_text place-content-center">
        <h1 className="text-white m-auto text-5xl text-center  ">
            Testimonials 
        </h1>
        <p className="text-red-500 text-center text-3xl ">
            What our clients say...
        </p>
    </div>
      <style>
        {`
          @keyframes marquee {
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
      <div
        className="overflow-hidden w-full mb-4"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          className="flex gap-4 pr-4 w-[200%]"
          style={{
            animation: "marquee 15s linear infinite",
          }}
        >
          {[0, 1].map((index) => (
            <div key={index} className="flex h-44 flex-1 gap-4 mb-20">
              {marqueeItems.map((item, index) => (
                <div key={item.content} className="flex-1 ">
                  <div className=" max-w-60 maq-width  bg-neutral-100 dark:bg-neutral-800 text-neutral-600 rounded-xl p-2 h-full">
                    <div className="flex landscape_marquee items-center gap-2 ">
                      <div className="size-8  bg-neutral-500/40 rounded-full" />
                      <p className=" text-neutral-600 dark:text-neutral-400 text-lg font-semibold">
                        {item.author}
                      </p>
                    </div>
                    <p className="text-lg mt-2 text-neutral-600 dark:text-neutral-300">
                      {item.content }
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
