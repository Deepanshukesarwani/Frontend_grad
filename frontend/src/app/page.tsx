import Navbar from "@/components/Navbar"; 
import Card1 from "@/components/Card1"; 
import JobCard from "@/components/JobCard";

const Card1data = [
  {
    imageSrc: "/Card1Img1.png",
    heading: "Student",
    subheading: "Access internships, jobs, and opportunities tailored for you.",
  },
  {
    imageSrc: "/Card1Img2.png",
    heading: "Employer",
    subheading: "Discover and hire top talent effortlessly.",
  },
  {
    imageSrc: "/Card1Img3.png",
    heading: "University",
    subheading: "Connect students with top employers and boost growth.",
  },
];

const jobListings = [
  {
    logo: "https://s3-alpha-sig.figma.com/img/1b39/a554/dc5b7f13ffcebbc48f33805f8eb5a17f?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CL0zt0NQApKOmIpjKzi~gYZ2DBGWe3A-fFkdPjWPDPLzFhPcHn5Z0W38GmEM2nkrdtxA8~nB69Dw6TyxKISCMQaRI9ZT-oDCmzM2wms87~VAFELJxvyj5q12siSI3B3oO8gAWWIA-63w4z~9dzIy-9eWWbpmZ5MfZvvpIY2ipPvS4zWmPeTU3-1QijV8VXGzElXbX~WJ1vmuadpUXyV78V3PKWAsfzF6M7YX-wWWXq9JS-JUxTOiUEZN-9bMyNLjWPjiw-RgczqLgU6TbcAt9hFu7CICE~KKJdziV6LhYypoFsOlZUc5YMrDMfM~w2JT98HNym7JlZjiiYNUtwjPoQ__",
    heading: "Technical Support Specialist",
    subheading: "Google",
    jobType: "HYBRID",
    location: "New Delhi, India",
    salary: "20,000 INR - 25,000 INR",
  },
  {
    logo: "https://s3-alpha-sig.figma.com/img/4f7c/e5e0/ecfb7e3be695fa48d8a53ea409b9166f?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sw1ncAOqJEJGOzEUmLNjTjoYVyc4dV4KtRUUSXvBNcq3uB5I-KKpHm-LlqVElompKz6EEzMtACRNGONdHtMWfxna4oHxbP~KLXEgxBUBeZx-WARP0rk44nKdpM87~mUmcjOO4dGqlZfQheU4jStUr3RmRggMcgYZYgMkGNPChiYlm7ajgJJzzb5I6oauztM2EvZ0w4a~Ttfj3MakPYiimLxndIFVjJAYLbMtqRijlAjY4sNLaogZuB1MuymxzSrXolX7jRNMWmMpvWLoSPT-mqbY4WqP90YxFuJFqDS7bFsBCKv-6T~W62pi1oKNrjVxJ5yjvH1xFsy9Jg21RptQ6A__",
    heading: "Software Engineer",
    subheading: "Deloitte",
    jobType: "REMOTE",
    location: "Bangalore, India",
    salary: "50,000 INR - 70,000 INR",
  },
  {
    logo: "https://s3-alpha-sig.figma.com/img/ac92/7a5b/17e46c83bc126633c5db32fd3403779d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Y76SUroZ0E~~Kp~Co2HE26MF3uzcwXlHVT26pcOPp8stV~ktlo2vPNUj52yjMQrbzg~7dTVo5p~FBPOX2oj9MDxM51nmdPgmewCpGwQIiQMCX52Hy~cXO7gWUVLYVLOAefEBgHLEZiWUvKiOvWi1wzHhzozXqC0sYUw3tkVKY4FmFDwJo~6JISbwh6fJKLdvL7Dn2vnYyhczWOlgFaUqe9UPR21jJfCmA0PJgmB20~miCe5ubJNgWS457MN6rbDRJF4Wj-6CbW4z9cTPVmQIAth7HobUvgzQpijLS~vsHsJjMEGP17Y9Neclf~HxhzOSwb2tqX9dT16juCjOUGAA3g__",
    heading: "Software Engineer",
    subheading: "Wayspire",
    jobType: "REMOTE",
    location: "Bangalore, India",
    salary: "50,000 INR - 70,000 INR",
  },
];

export default function Home() {
  return (
    <>
      <div className="w-screen min-h-screen">
        <Navbar />
        <div className="container mt-[6rem] mx-auto">
          <h1 className="text-[30px] font-inter font-semibold leading-[100%] tracking-normal text-center text-[#035E80] mt-10">
            Who’s using GradHub?
          </h1>
        </div>

        <section className=" container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%]  ">
          {Card1data.map((data, index) => (
            <Card1
              key={index}
              imageSrc={data.imageSrc}
              heading={data.heading}
              subheading={data.subheading}
            />
          ))}
        </section>

        <div className="container mt-[6rem] mx-auto">
          <h1 className="flex items-center justify-center text-[30px] font-inter font-semibold leading-[100%] tracking-normal text-[#035E80] mt-10">
            Find Your Dream Job
            <img src="/star.png" alt="star" className="w-5 h-5 ml-2" />
          </h1>
        </div>

        <div className="container mx-auto flex flex-wrap gap-6 mt-10 justify-center">
          {jobListings.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>
    </>
  );
}
