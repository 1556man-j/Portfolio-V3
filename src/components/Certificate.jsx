import React from "react";
import User from "../assets/user.webp";
import User2 from "../assets/user2.webp";
import User3 from "../assets/user3.webp";
import User4 from "../assets/user4.webp";
import User5 from "../assets/user5.webp";
import User6 from "../assets/user6.webp";

const testimonials = [
  {
    name: "Elona Mosco",
    role: "Business Owner",
    image: User,
    feedback:
      "I needed a modern and responsive website for my business, and Emmanuel delivered beyond my expectations. From the first meeting, he understood exactly what I was aiming for. He was professional, easy to communicate with, and incredibly attentive to detail. The final product not only looked amazing but functioned smoothly across all devices. I’ve received so many compliments from my customers. I’ll definitely work with him again in the future!",
  },
  {
    name: "John Doe",
    role: "Startup Founder",
    image: User2,
    feedback:
      "We brought Emmanuel on board to help revamp our startup’s landing page. What we got was far more than a visual upgrade — it was a performance boost. His design sense is top-notch, and he knows how to convert ideas into clean, modern interfaces that just work. He also delivered everything ahead of schedule, and made every requested change with a smile. A true team player.",
  },
  {
    name: "Grace Daniels",
    role: "Fashion Brand Owner",
    image: User3,
    feedback:
      "As a fashion entrepreneur, aesthetics are everything to me — and Emmanuel completely understood that. He designed my online store to reflect elegance, simplicity, and class. The layout, the responsiveness, and even the checkout flow were all on point. It was clear he put in effort beyond just the visuals. The site has improved customer experience and my sales have gone up significantly.",
  },
  {
    name: "Musa Bello",
    role: "Digital Marketer",
    image: User4,
    feedback:
      "I’ve worked with many developers, but Emmanuel stands out for one simple reason: he listens. He understood our marketing goals and built a website that aligned with our brand message. His attention to SEO, mobile optimization, and UI/UX was impressive. Every section was built with intention. Our traffic has increased and bounce rate dropped significantly since the redesign.",
  },
  {
    name: "Anita Jones",
    role: "Photographer",
    image: User5,
    feedback:
      "Emmanuel built my photography portfolio from scratch, and it is nothing short of stunning. The way the gallery loads, the transitions, and how my photos are displayed — everything looks and feels high-end. I especially love how the dark mode works seamlessly with my images. I’ve already recommended him to two colleagues.",
  },
  {
    name: "Kelvin Wright",
    role: "App Developer",
    image: User6,
    feedback:
      "Emmanuel was brought in to design a frontend dashboard for one of our mobile applications. His knowledge of Tailwind CSS, responsiveness, and component structuring made our backend integration effortless. The UI was clean, minimal, and functional — just what we needed. He even documented reusable components for us!",
  },
  {
    name: "Fatima Ahmed",
    role: "NGO Coordinator",
    image: User,
    feedback:
      "Our NGO needed a new website that was easy to update, visually engaging, and accessible. Emmanuel understood our mission and translated it beautifully into a site that our donors, volunteers, and partners love. He also made sure the site loaded fast even with heavy media, and trained our staff on basic updates. That level of support meant a lot to us.",
  },
  {
    name: "Daniel Uche",
    role: "Freelancer",
    image: User,
    feedback:
      "I hired Emmanuel to help with my personal brand website, and he nailed it. The homepage is clean, the animations are subtle yet engaging, and the contact form works flawlessly. What stood out to me the most was how he prioritized accessibility and performance. The site loads incredibly fast and looks great on every device. I get client leads weekly now, all from the site he built.",
  },
];



const Certificate = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 2xl:grid-cols-3 gap-4">
      {testimonials.map((item, index) => (
        <div
          key={index}
          className="text-white border border-white/15 rounded-2xl p-10 w-full gap-5 flex flex-col"
        >
          <div className="flex justify-between">
            <div className="flex mt-auto">
              <div className="w-[40px] h-[40px] rotate-90 rounded-md bg-gradient-to-tr from-gray-500 to-transparent clip-triangle"></div>
              <div className="w-[40px] h-[40px] rotate-90 rounded-md bg-gradient-to-tr from-gray-500 to-transparent clip-triangle"></div>
            </div>
            <div>
              <div className="relative w-[150px] h-[150px] overflow-hidden">
                <div className="relative w-full h-full bg-gradient-to-tl from-gray-500 to-transparent rounded-bl-full origin-center overflow-hidden">
                  <img
                    src={item.image}
                    alt="testifier"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>{item.feedback}</div>

          <div className="flex flex-col">
            <h3>{item.name}</h3>
            <p className="opacity-60">{item.role}</p>
          </div>
        </div>
      ))}
    </div>
    );
};

export default Certificate;
