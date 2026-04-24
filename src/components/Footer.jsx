import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const LinkedinIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 w-full py-16 px-8 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-bold text-gray-900 dark:text-white mb-6">SkillXaTechnologies</div>
          <p className="font-inter text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            SkillXa Technologies. Empowering the next generation of tech leaders through immersive, project-based training.
          </p>
        </div>
        <div>
          <h4 className="font-label-md text-gray-900 dark:text-white mb-6 uppercase tracking-wider">Programs</h4>
          <ul className="space-y-4 font-inter text-sm text-gray-500 dark:text-gray-400">
            <li><Link className="hover:text-red-600 transition-colors" to="/programs">AI/ML Internship</Link></li>
            <li><Link className="hover:text-red-600 transition-colors" to="/programs">Fullstack Developer Internship</Link></li>
            <li><Link className="hover:text-red-600 transition-colors" to="/programs">Data Analyst Internship</Link></li>
            <li><Link className="hover:text-red-600 transition-colors" to="/programs">UI/UX Design Internship</Link></li>
            <li><Link className="hover:text-red-600 transition-colors" to="/programs">Backend Development Internship</Link></li>
            <li><Link className="hover:text-red-600 transition-colors" to="/programs">Frontend Development Internship</Link></li>
            <li><Link className="hover:text-red-600 transition-colors" to="/programs">Cloud Computing Internship</Link></li>
            <li><Link className="hover:text-red-600 transition-colors" to="/programs">Cyber Security Internship</Link></li>
            <li><Link className="hover:text-red-600 transition-colors" to="/programs">Mobile APP Development Internship (Flutter)</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-gray-900 dark:text-white mb-6 uppercase tracking-wider">Company</h4>
          <ul className="space-y-4 font-inter text-sm text-gray-500 dark:text-gray-400">
            <li><Link className="hover:text-red-600 transition-colors" to="/about">About Us</Link></li>
            <li><a className="hover:text-red-600 transition-colors" href="#">Careers</a></li>
            <li><Link className="hover:text-red-600 transition-colors" to="/career-support">Support</Link></li>
            <li><a className="hover:text-red-600 transition-colors" href="#">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-gray-900 dark:text-white mb-6 uppercase tracking-wider">Legal</h4>
          <ul className="space-y-4 font-inter text-sm text-gray-500 dark:text-gray-400">
            <li><a className="hover:text-red-600 transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-red-600 transition-colors" href="#">Terms of Service</a></li>
            <li><a className="hover:text-red-600 transition-colors" href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-inter text-sm text-gray-500 dark:text-gray-400">
          © 2024 SkillXa Technologies. Empowering the next generation of tech leaders.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center mt-4 md:mt-0">
          <a className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors font-inter text-sm" href="mailto:skillxa.hr@gmail.com">
            <Mail size={18} />
            <span>skillxa.hr@gmail.com</span>
          </a>
          <a className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors font-inter text-sm" href="tel:+918050139373">
            <Phone size={18} />
            <span>+91 80501 39373</span>
          </a>
          <a className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors font-inter text-sm" href="https://www.linkedin.com/in/skillxatechnologies/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon size={18} />
            <span className="hidden md:inline">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
