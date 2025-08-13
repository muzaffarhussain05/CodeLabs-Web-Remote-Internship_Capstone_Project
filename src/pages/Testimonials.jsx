import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
const Testimonials = () => {
  const [speed, setSpeed] = useState(50);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
      
        setSpeed(35); 
      } else {
        setSpeed(50); 
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const testimonials = [
    {
      title: "A frontend developer who transforms visions into reality",
      text: "Aayush has an exceptional ability to bring our design concepts to life. His attention to detail and dedication to creating seamless user experiences have greatly enhanced our projects. His skills in frontend development are truly impressive, and he’s always ready to tackle any challenge that comes his way.",
      author: "Lena Torres",
      position: "Product Lead • Creatify",
      bgGradient: "bg-gradient-to-b from-pink-200 to-pink-400",
      textColor: "text-black",
      imgSrc: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      title: "Efficient, innovative, and a pleasure to work with",
      text: "Working with Aayush has been a fantastic experience. He’s not only highly skilled in frontend technologies but also brings a refreshing creativity to every project. His ability to solve complex problems quickly and effectively makes him a key asset to our team. Plus, he’s a great collaborator who makes the work environment better for everyone.",
      author: "Emma Thompson",
      position: "Senior Designer • PixelCraft",
      bgGradient: "bg-gradient-to-b from-blue-500 to-blue-900",
      textColor: "text-white",
      imgSrc: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      title: "A reliable developer with a keen eye for detail",
      text: "Aayush delivered exceptional work on our project. His meticulous approach and strong communication skills greatly enhanced the quality of our web applications. He’s a dependable developer who collaborates seamlessly with the team.",
      author: "Ethan Parker",
      position: "Manager • TechFusion",
      bgGradient: "bg-gradient-to-b from-purple-700 to-purple-900",
      textColor: "text-white",
      imgSrc: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      title: "Consistent excellence in every project",
      text: "Aayush is a standout frontend developer. His ability to deliver high-quality code and engaging user interfaces consistently makes him a valuable team member. He’s proactive, reliable, and always willing to go the extra mile to ensure the success of our projects. It’s been a pleasure working with him, and I look forward to future collaborations.",
      author: "Ryan Mitchell",
      position: "CTO • Innovate Solutions",
      bgGradient: "bg-gradient-to-b from-cyan-700 to-blue-900",
      textColor: "text-white",
      imgSrc: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      title: "A master of frontend development with a keen design sensibility",
      text: "Aayush is a fantastic frontend developer! He took our requirements and turned them into something amazing. His attention to detail, creativity, and clear communication made the whole process smooth. We’re extremely happy with the results and would highly recommend him!",
      author: "Emily Thompson",
      position: "Creative Director • H. Studios",
      bgGradient: "bg-gradient-to-b from-green-700 to-green-900",
      textColor: "text-white",
      imgSrc: "https://randomuser.me/api/portraits/women/22.jpg",
    },
  ];
  return (
    <>
      <div className="md:mt-48 mt-24 ">
        <div>
          <div className="flex flex-col justify-center gap-3 items-center">
            <p className="text-black/70 text-sm">TESTIMONIALS</p>
            <h3 className="md:font-medium max-sm:text-center font-semibold  text-3xl md:text-6xl">
              Word on the street{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-x font-nyght tracking-wide">
                about me
              </span>
            </h3>
          </div>

          <div>
            <div className=" md:w-full overflow-hidden md:mt-8 mt-4 roundex-xl ">
              <Marquee speed={speed} pauseOnHover={true}>
                <div className="flex md:gap-6 overflow-x-auto md:px-4  px-1 gap-2  py-2 md:py-6">
                  {testimonials.map((t, i) => (
                    <div
                      key={i}
                      className={`relative flex flex-col justify-between rounded-2xl p-2 md:p-7   md:h-[360px] md:w-[350px] max-sm:w-[300px] md:rounded-3xl lg:px-6 lg:py-7 select-none ${t.bgGradient} ${t.textColor}`}
                      style={{ minWidth: 200, maxWidth: 600, height: 390 }}
                    >
                      <div>
                        <h4 className="mb-5 md:text-md font-medium md:tracking-wide md:text-xl">
                          {t.title}
                        </h4>
                        <p className="mb-3 font-light line-clamp-4 md:text-base md:tralight md:tracking-tight md:line-clamp-10 text-sm">
                          {t.text}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 lg:gap-4">
                        <img
                          alt={`${t.author}'s photo`}
                          loading="lazy"
                          width={56}
                          height={56}
                          className="rounded-full lg:w-14 lg:h-14"
                          src={t.imgSrc}
                          decoding="async"
                          style={{ color: "transparent" }}
                        />
                        <div>
                          <span className="text-base font-semifont tracking-wide md:text-lg">
                            {t.author}
                          </span>
                          <p className="text-sm opacity-80 md:text-base">
                            {t.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
