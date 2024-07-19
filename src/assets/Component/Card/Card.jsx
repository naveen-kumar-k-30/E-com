import { LazyLoadImage } from "react-lazy-load-image-component";
import {an1, an10, an2, an3, an4, an5, an6, an7, an8, an9, aniversary,bf,fam,friend,gf,home,long,m1,m10,m2,m3,m4,m5,m6,m7,m8,m9,personal,prof,wedding,} from "../../Images/Images";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
const Card = () => {
  const cards = [
    {
      img: aniversary,
      title: "Anniversary gifts",
      para: "Anniversary gifts celebrate enduring love. Traditional themes like silver for the 25th year or modern personalized options like custom artwork or romantic getaways make these gifts special. Thoughtful presents reflect shared memories and future adventures, making them meaningful and memorable.",
      cardy: [
        { img: an1, title: "Wooden Gifts", rate: 200 },
        { img: an2, title: "Memorial frames", rate: 400 },
        { img: an3, title: "Glass frame", rate: 450 },
        { img: an4, title: "Rings", rate: 500 },
        { img: an5, title: "Dodge shield", rate: 600 },
        { img: an6, title: "wood frame", rate: 340 },
        { img: an7, title: "Frames", rate: 250 },
        { img: an8, title: "Lights", rate: 400 },
        { img: an9, title: "Rings", rate: 450 },
        { img: an10, title: "Holder", rate: 500 },
      ],
    },
    {
      img: bf,
      title: "Gifts for him",
      para: "Gifts for him should reflect his interests, from gadgets and sports gear to personalized items like engraved accessories. Whether it's a birthday, anniversary, or just because, choose gifts that resonate with his passions and show understanding of his individuality.",
      cardy: [
        { img: m1, title: "Tool kit", rate: 600 },
        { img: m2, title: "Watch", rate: 340 },
        { img: m3, title: "Frames", rate: 250 },
        { img: m4, title: "Wallets", rate: 400 },
        { img: m5, title: "Dollars", rate: 450 },
        { img: m6, title: "Cool sets", rate: 500 },
        { img: m7, title: "Clock", rate: 200 },
        { img: m8, title: "E-SETS", rate: 400 },
        { img: m9, title: "Purse", rate: 450 },
        { img: m10, title: "Holder", rate: 500 },
      ],
    },
    { img: gf, title: "Gifts for her", para: "Gifts for her should evoke joy and appreciation. Consider jewelry, spa treatments, fashionable accessories, or personalized items. Thoughtful experiences like romantic getaways or concerts celebrate her uniqueness and make her feel cherished and special." ,
      cardy: [
        { img: an1, title: "Wooden Gifts", rate: 200 },
        { img: an2, title: "Memorial frames", rate: 400 },
        { img: an3, title: "Glass frame", rate: 450 },
        { img: an4, title: "Rings", rate: 500 },
        { img: an5, title: "Dodge shield", rate: 600 },
        { img: an6, title: "wood frame", rate: 340 },
        { img: an7, title: "Frames", rate: 250 },
        { img: an8, title: "Lights", rate: 400 },
        { img: an9, title: "Rings", rate: 450 },
        { img: an10, title: "Holder", rate: 500 },
      ],
    },
    { img: wedding, title: "Wedding gifts", para: "Wedding gifts celebrate a couple's new journey. Traditional household items or modern personalized gifts like custom artwork and experiences make thoughtful presents. Consider the couple's tastes and registry to ensure your gift is both practical and meaningful.",cardy: [
      { img: m1, title: "Tool kit", rate: 600 },
      { img: m2, title: "Watch", rate: 340 },
      { img: m3, title: "Frames", rate: 250 },
      { img: m4, title: "Wallets", rate: 400 },
      { img: m5, title: "Dollars", rate: 450 },
      { img: m6, title: "Cool sets", rate: 500 },
      { img: m7, title: "Clock", rate: 200 },
      { img: m8, title: "E-SETS", rate: 400 },
      { img: m9, title: "Purse", rate: 450 },
      { img: m10, title: "Holder", rate: 500 },
    ], },
    { img: personal, title: "Personalised gift ideas", para: "Personalized gifts show thoughtfulness and care, tailored to reflect the recipient's personality and memorable moments. Custom jewelry, bespoke artwork, and personalized home decor make unique keepsakes, celebrating individuality and special memories.",cardy: [
      { img: an1, title: "Wooden Gifts", rate: 200 },
      { img: an2, title: "Memorial frames", rate: 400 },
      { img: an3, title: "Glass frame", rate: 450 },
      { img: an4, title: "Rings", rate: 500 },
      { img: an5, title: "Dodge shield", rate: 600 },
      { img: an6, title: "wood frame", rate: 340 },
      { img: an7, title: "Frames", rate: 250 },
      { img: an8, title: "Lights", rate: 400 },
      { img: an9, title: "Rings", rate: 450 },
      { img: an10, title: "Holder", rate: 500 },
    ], },
    
    { img: home, title: "Housewarming gifts", para: "Housewarming gifts congratulate someone on their new home. Practical yet stylish items like kitchen gadgets, cozy blankets, or personalized decor make great choices. Plants, candles, or custom doormats help transform a house into a welcoming home.",cardy: [
      { img: m1, title: "Tool kit", rate: 600 },
      { img: m2, title: "Watch", rate: 340 },
      { img: m3, title: "Frames", rate: 250 },
      { img: m4, title: "Wallets", rate: 400 },
      { img: m5, title: "Dollars", rate: 450 },
      { img: m6, title: "Cool sets", rate: 500 },
      { img: m7, title: "Clock", rate: 200 },
      { img: m8, title: "E-SETS", rate: 400 },
      { img: m9, title: "Purse", rate: 450 },
      { img: m10, title: "Holder", rate: 500 },
    ], },
    { img: friend, title: "Friendship gifts", para: "Friendship gifts celebrate the bond shared with a close friend. Personalized items like custom jewelry, photo books, or matching accessories are heartfelt choices. Fun gifts and shared experiences create lasting memories, showing appreciation and understanding.",cardy: [
      { img: an1, title: "Wooden Gifts", rate: 200 },
      { img: an2, title: "Memorial frames", rate: 400 },
      { img: an3, title: "Glass frame", rate: 450 },
      { img: an4, title: "Rings", rate: 500 },
      { img: an5, title: "Dodge shield", rate: 600 },
      { img: an6, title: "wood frame", rate: 340 },
      { img: an7, title: "Frames", rate: 250 },
      { img: an8, title: "Lights", rate: 400 },
      { img: an9, title: "Rings", rate: 450 },
      { img: an10, title: "Holder", rate: 500 },
    ], },
    { img: fam, title: "Family gifts", para: "Family gifts show love and appreciation, focusing on activities or items enjoyed together. Board games, personalized photo albums, or family vacations foster bonding. Practical gifts like home appliances or subscription boxes reflect shared moments and family dynamics.",cardy: [
      { img: m1, title: "Tool kit", rate: 600 },
      { img: m2, title: "Watch", rate: 340 },
      { img: m3, title: "Frames", rate: 250 },
      { img: m4, title: "Wallets", rate: 400 },
      { img: m5, title: "Dollars", rate: 450 },
      { img: m6, title: "Cool sets", rate: 500 },
      { img: m7, title: "Clock", rate: 200 },
      { img: m8, title: "E-SETS", rate: 400 },
      { img: m9, title: "Purse", rate: 450 },
      { img: m10, title: "Holder", rate: 500 },
    ], },
    { img: prof, title: "Professional gifts", para: "Professional gifts recognize colleagues or business associates. High-quality stationery, tech gadgets, gourmet baskets, or personalized desk accessories are thoughtful and appropriate. Consider the recipient's tastes and professional setting to convey appreciation and respect.",cardy: [
      { img: an1, title: "Wooden Gifts", rate: 200 },
      { img: an2, title: "Memorial frames", rate: 400 },
      { img: an3, title: "Glass frame", rate: 450 },
      { img: an4, title: "Rings", rate: 500 },
      { img: an5, title: "Dodge shield", rate: 600 },
      { img: an6, title: "wood frame", rate: 340 },
      { img: an7, title: "Frames", rate: 250 },
      { img: an8, title: "Lights", rate: 400 },
      { img: an9, title: "Rings", rate: 450 },
      { img: an10, title: "Holder", rate: 500 },
    ], },
    { img: long, title: "Long Distance gifts", para: "Long-distance gifts bridge the gap and maintain connections. Personalized items, subscription services, care packages, or virtual experiences make the distance feel smaller. Thoughtful gifts show effort and keep the bond strong despite the miles apart." },
  ];

  return (
    <div className="2xl:container mx-auto">
      <div className="w-[90%] mx-auto flex flex-col justify-center items-center gap-4 p-5">
        <div className="w-[90%] mx-auto grid grid-cols-1">
          <h1 className="playfair-display text-3xl text-center">Shop our popular gift categories</h1>
        </div>
        <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cards.map((card, index) => (
            <Link key={index} to={`/details/${index}`} state={{ img: card.img, title: card.title, paragraph: card.para ,cardx: card.cardy}} className="block">
              <div className="bg-white flex flex-col justify-center items-center shadow-lg p-4 gap-2 rounded-lg">
                <LazyLoadImage alt={card.title} effect="opacity" src={card.img} className="w-full h-48 object-cover rounded-t-lg" />
                <p className="playfair-display text-center mt-2">{card.title}</p>
                <p className="text-[#FFD700] playfair-display flex justify-center items-center">
                  View More
                  <ChevronRight className="w-5 ml-1" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Card;
