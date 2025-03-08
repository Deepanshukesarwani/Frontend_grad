import Image from "next/image";

interface CardProps {
  imageSrc: string;
  heading: string;
  subheading: string;
}

const Card1: React.FC<CardProps> = ({ imageSrc, heading, subheading }) => {
  return (
    <div className="bg-white rounded-lg border-[#DDDDDD] border shadow-lg overflow-hidden flex">
      <div className="flex-shrink-0 w-1/3">
        <Image src={imageSrc} alt={heading} width={160} height={160} className="object-cover w-full h-full" />
      </div>
      <div className="flex-1 p-4">
        <h2 className="text-xl font-semibold text-blue-800">{heading}</h2>
        <p className="text-gray-600 mt-2">{subheading}</p>
      </div>
    </div>
  );
};

export default Card1;
