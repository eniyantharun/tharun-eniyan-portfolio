import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-tilt";
import { FaLinkedin, FaGithub, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { styles } from "../styles";
import { socialLinks, contactInfo } from "../constants";
import { fadeIn } from "../utils/motion";

// ContactCard component for email and phone
const ContactCard = ({ icon: Icon, label, value, href, index }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <a
        href={href}
        className='bg-tertiary rounded-[20px] py-5 px-8 min-h-[150px] flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300'
      >
        <Icon className='w-12 h-12 text-white mb-3' />
        <p className='text-secondary text-[14px] uppercase tracking-wider'>
          {label}
        </p>
        <p className='text-white text-[16px] font-medium mt-2 text-center break-all'>
          {value}
        </p>
      </a>
    </motion.div>
  </Tilt>
);

// SocialLink component with gradient effect
const SocialLink = ({ name, url, icon, color, index }) => {
  const iconMap = {
    linkedin: FaLinkedin,
    github: FaGithub,
    leetcode: SiLeetcode,
    whatsapp: FaWhatsapp,
  };
  const Icon = iconMap[icon];

  return (
    <motion.a
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className='group relative'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className='w-16 h-16 rounded-full bg-tertiary flex items-center justify-center shadow-card group-hover:shadow-lg transition-shadow duration-300 border-2 border-transparent group-hover:border-[#915EFF]'>
        <Icon className='w-8 h-8 text-secondary group-hover:text-white transition-colors duration-300' />
      </div>
      <p className='text-secondary text-[12px] text-center mt-2 group-hover:text-white transition-colors duration-300'>
        {name}
      </p>
    </motion.a>
  );
};

const Footer = () => {
  return (
    <footer className='bg-black-100 w-full'>
      <div className={`${styles.padding} max-w-7xl mx-auto`}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText}>Connect With Me.</h2>
        </motion.div>

        {/* Contact Cards */}
        <div className='flex flex-wrap gap-7 justify-center mb-12'>
          <ContactCard
            icon={MdEmail}
            label="Email"
            value={contactInfo.email}
            href={`mailto:${contactInfo.email}`}
            index={0}
          />
          <ContactCard
            icon={FaPhoneAlt}
            label="Phone"
            value={contactInfo.phone}
            href={`tel:${contactInfo.phone}`}
            index={1}
          />
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className='flex flex-wrap gap-8 justify-center mb-12'
        >
          {socialLinks.map((social, index) => (
            <SocialLink key={social.name} {...social} index={index} />
          ))}
        </motion.div>

        {/* Divider */}
        <div className='w-full h-[1px] bg-secondary opacity-20 mb-8'></div>

        {/* Copyright */}
        <div className='text-center pb-8'>
          <p className='text-secondary text-[14px]'>
            © {new Date().getFullYear()} Tharun Eniyan. All rights reserved.
          </p>
          <p className='text-secondary text-[12px] mt-2'>
            Built with React, Three.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
