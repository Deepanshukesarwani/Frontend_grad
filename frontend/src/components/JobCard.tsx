import React from "react";

interface JobCardProps {
  logo: string;
  heading: string;
  subheading: string;
  jobType: string;
  location: string;
  salary: string;
}

const JobCard: React.FC<JobCardProps> = ({
  logo,
  heading,
  subheading,
  jobType,
  location,
  salary,
}) => {
  return (
    <div className="w-[350px] p-5  rounded-lg border-[#DDDDDD] border-[1px] shadow-xl bg-white">
      {/* Company Info */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Company Logo" className="w-10 rounded-full h-10" />
        <div>
          <h2 className="text-lg font-semibold">{heading}</h2>
          <p className="text-gray-500 text-sm">{subheading}</p>
        </div>
      </div>

      {/* Job Type */}
      <span className="inline-block bg-[#02B0F1] text-[#004CB4] text-xs font-semibold px-2 py-1 mt-3 rounded">
        {jobType}
      </span>

      {/* Location & Salary */}
      <div className="mt-3 space-y-2 text-gray-600 text-sm">
        <div className="flex items-center space-x-2">
          <span>📍</span>
          <p>{location}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span>💰</span>
          <p>{salary}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button className="border border-[#02B0F1] text-[#02B0F1] px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50">
          View details
        </button>
        <button className="btn-gradient text-white px-4 py-2 rounded-md text-sm font-medium">
          Apply now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
