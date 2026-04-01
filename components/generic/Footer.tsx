import Link from "next/link";
import Button from "../generic/Button";

export default function Footer() {
  return (
    <footer className="relative w-full z-10 bg-[#0A2A4A] text-white pt-[30px] md:pt-[50px] flex flex-col items-center font-inter mt-[60px] md:mt-[130px]"> {/* CHANGED: responsive top padding and outer margin */}
      {/* Centered content container */}
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Top section: 4 columns — CHANGED: responsive grid (1 col mobile, 2 col tablet, 4 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 gap-y-8 items-start">
          {/* Column 1: About IEEE */}
          <div>
            <div className="font-inter text-[22px] font-[700] text-[#FFC72C] tracking-[-0.2] leading-[1]">
              IEEE 
              <br />
              Computer
              <br />
               Society

            </div>
            <div className="font-inter mt-[36px] font-[400] text-[14px] tracking-[-0] leading-[1.6] text-[#ffffff] ">
              Inspired by MIT's vision of shaping world-class engineers, the IEEE
              Computer Society Student Chapter fosters innovation, research, and
              collaboration in the evolving world of computing.
            </div>
            <Link href="#">
              <Button
                text="Join IEEE"
                bgColor="#FFC72C"
                textColor="#0A2A4A"
                fontSize="14px"
                height="40px"
                width="102px"
                className="font-inter tracking-[-1] mt-[48px]"
                hoverBgColor="#0A2A4A"
                hoverTextColor="#ffffff"
              />
            </Link>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            {/* CHANGED: responsive top margin — smaller when stacked, original when side-by-side */}
            <div className="font-inter text-[16px] font-[600] text-[#FFC72C] tracking-[-0.2] mt-[24px] lg:mt-[38px]">
              Contact Us
            </div>
            <ul className="list-none p-0 mt-[36px]">
              <li className="mb-[10px]">
                {/* CHANGED: break-words to prevent email overflow on small screens */}
                <div className="font-inter mt-[24px] font-[400] text-[14px] tracking-[-0] leading-[1.6] text-[#ffffff] break-words">
                  Email: contact@ieee-cs.org
                </div>
              </li>
              <li className="mb-[10px]">
                <div className="font-inter mt-[24px] font-[400] text-[14px] tracking-[-0] leading-[1.6] text-[#ffffff]">
                  Phone: +91 98765432XX
                </div>
              </li>
              <li className="mb-[10px]">
                <div className="font-inter mt-[24px] font-[400] text-[14px] tracking-[-0] leading-[1.6] text-[#E1E5EA]">
                  Address: IEEE CS Chapter
                  <br />
                  University Campus
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            {/* CHANGED: responsive top margin */}
            <div className="font-inter text-[16px] font-[600] text-[#FFC72C] tracking-[-0.2] mt-[24px] lg:mt-[38px]">
              Quick Links
            </div>
            <ul className="list-none p-0 mt-[36px]">
              {[
                { label: "About IEEE", href: "#" },
                { label: "Events", href: "#" },
                { label: "Membership", href: "#" },
                { label: "Publications", href: "#" },
              ].map(({ label, href }) => (
                <li key={label} className="mb-[10px]">
                  <Link href={href}>
                    <div className="font-inter mt-[24px] font-[400] text-[14px] tracking-[-0] leading-[1.6] text-[#ffffff]">
                      {label}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            {/* CHANGED: responsive top margin */}
            <div className="font-inter text-[16px] font-[600] text-[#FFC72C] tracking-[-0.2] mt-[24px] lg:mt-[38px]">
              Connect With Us
            </div>
            <div className="flex flex-col items-start mt-[18px]">
              {[
                { label: "Facebook", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Twitter", href: "#" },
                { label: "Instagram", href: "#" },
              ].map(({ label, href }) => (
                <Link key={label} href={href}>
                  <div className="font-inter mt-[24px] font-[400] text-[14px] tracking-[-0] leading-[1.6] text-[#ffffff]">
                    {label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider — stays within the container */}
        <div className="border-t border-[#E1E5EA] mt-[48px]" />

        {/* Bottom: copyright */}
        <div className="font-inter py-[15px] mt-[36px] mb-[36px] font-[400] text-[14px] tracking-[-0] leading-[1.6] text-[#E1E5EA]">
          © 2026 IEEE Computer Society. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}