import { copyrightSign } from '../assets/icons';
import { footerLogo } from '../assets/images';
import { socialMedia, footerLinks } from "../constants/index";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}

    className="max-container padding-x text-white py-8">
      <div className="px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Logo and Description Section */}
          <div className="flex flex-col items-start lg:w-1/3">
            <a href="/">
              <img src={footerLogo} alt="Footer Logo" width={150} height={46} />
            </a>
            <p className='mt-6 text-base leading-7 font-montserrat text-gray-400 sm:max-w-sm'>
              Get shoes ready for the new term at your nearest Nike Store. Find your perfect size in store. Get Rewards.
            </p>
            {/* Social Media Icons */}
            <div className='mt-8 flex flex-wrap gap-5'>
              {socialMedia.map((icon) => (
                <a href={icon.href} aria-label={icon.alt} key={icon.src} className='flex justify-center items-center w-10 h-10 md:w-12 md:h-12 bg-white rounded-full'>
                  <img src={icon.src} alt={icon.alt} height={24} width={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links Section */}
          <div className='flex flex-wrap lg:flex-row lg:w-2/3 gap-10 lg:gap-16'>
            {footerLinks.map((section) => (
              <div key={section.title} className='flex-1 mb-8 lg:mb-0'>
                <h4 className='text-white font-montserrat text-lg lg:text-2xl leading-normal font-medium mb-4 lg:mb-6'>{section.title}</h4>
                <ul className='space-y-3'>
                  {section.links.map((link) => (
                    <li className='text-gray-400 leading-normal hover:text-gray-300 cursor-pointer' key={link.name}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright and Terms Section */}
        <div className='mt-10 flex flex-col-reverse lg:flex-row items-center justify-between lg:items-start gap-4 lg:gap-2 font-montserrat text-sm'>
          <div className='flex items-center gap-2'>
            <img src={copyrightSign} alt="Copyright Sign" height={20} width={20} />
            <p>CopyRight {new Date().getFullYear()}-25 All rights reserved.</p>
          </div>
          <p className='hover:underline cursor-pointer'>Terms and conditions</p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
