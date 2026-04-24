import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ready from '../assets/ready.png';
import brochure from '../assets/SkillXaTechnologies_Internship_Brochure.pdf';
import { programsData } from '../data/programsData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Programs = () => {
  const domains = programsData;

  return (
    <>
      <section className="max-w-[1280px] mx-auto px-8 mb-stack-lg pt-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 mb-stack-sm rounded-full bg-surface-container-high text-primary font-label-md">MASTER TECH SKILLS</span>
          <h1 className="font-h1 text-h1 text-on-surface mb-stack-md max-w-4xl mx-auto">Future-Proof Your Career in <span className="text-primary">9 Specialized Domains.</span></h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto">From AI to UX, our programs are engineered for high-growth roles in the global tech ecosystem.</p>
        </motion.div>
      </section>

      <section className="max-w-[1280px] mx-auto px-8 pb-section-padding">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {domains.map((domain, i) => (
            <motion.div key={i} variants={fadeUp} className="domain-card bg-white p-8 rounded-xl border border-gray-200 transition-all duration-300 ambient-shadow flex flex-col h-full hover:-translate-y-1 hover:border-primary hover:shadow-[0_20px_40px_-10px_rgba(187,0,23,0.1)]">
              <div className="mb-stack-md flex justify-between items-start">
                <div className="p-3 bg-red-50 text-primary rounded-lg">
                  <span className="material-symbols-outlined text-3xl">{domain.icon}</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-secondary opacity-50">{domain.num}</span>
              </div>
              <h4 className="font-h4 text-h4 mb-stack-sm text-on-surface">{domain.title}</h4>
              <p className="text-secondary text-sm mb-stack-md">{domain.desc}</p>
              <div className="space-y-stack-md mt-auto">
                <div>
                  <p className="font-label-md text-primary mb-2">TOOLS USED</p>
                  <div className="flex flex-wrap gap-2">
                    {domain.tools.map((tool, index) => (
                      <span key={index} className="px-2 py-1 bg-surface-container text-[12px] font-semibold rounded">{tool}</span>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-background rounded-lg border-l-4 border-primary">
                  <p className="font-label-md mb-1">PROJECTED BUILD</p>
                  <p className="text-xs text-secondary">{domain.build}</p>
                </div>
                <div className="flex items-center gap-2 text-on-surface">
                  <span className="material-symbols-outlined text-primary text-sm">work</span>
                  <span className="text-xs font-semibold">{domain.role}</span>
                </div>
                <div className="flex gap-3 mt-4">
                  <Link 
                    to={`/programs/${domain.id}`}
                    className="flex-1 bg-white border border-gray-200 text-gray-700 font-button py-3 rounded-lg flex items-center justify-center gap-1 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group overflow-hidden relative"
                  >
                    <span className="relative z-10">View Details</span>
                    <span className="material-symbols-outlined text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 relative z-10">arrow_forward</span>
                  </Link>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdjovDbLOmgGbHfRXDM_klJWvgXabTvGJEqoaaR9_Wh799Wqw/viewform"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex-1 bg-primary/10 text-primary font-button py-3 rounded-lg flex items-center justify-center gap-1 hover:bg-primary hover:text-white transition-colors group"
                  >
                    Apply Now
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-surface-container-low py-section-padding mb-16">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7">
            <h2 className="font-h2 text-h2 mb-stack-md text-on-surface">Ready to start your <span className="text-primary">tech journey?</span></h2>
            <p className="font-body-lg text-body-lg text-secondary mb-stack-lg">Download our detailed curriculum for each domain or book a free 1-on-1 career consultation with our industry experts.</p>
            <div className="flex flex-wrap gap-stack-md">
              <a href={brochure} download="SkillXaTechnologies_Internship_Brochure.pdf" className="group bg-primary text-on-primary flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-button text-button shadow-lg shadow-red-200 hover:scale-105 hover:shadow-[0_15px_40px_-5px_rgba(187,0,23,0.4)] transition-all duration-300">
                <span className="material-symbols-outlined text-sm group-hover:-translate-y-0.5 transition-transform">download</span>
                Download Brochure
              </a>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdjovDbLOmgGbHfRXDM_klJWvgXabTvGJEqoaaR9_Wh799Wqw/viewform" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group border border-primary text-primary flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-button text-button hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_-5px_rgba(187,0,23,0.2)]"
              >
                Apply Now
                <span className="material-symbols-outlined text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">arrow_forward</span>
              </a>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-square bg-white rounded-3xl p-8 shadow-2xl relative z-10 overflow-hidden">
              <img className="w-full h-full object-cover rounded-2xl" src={ready} alt="Student learning" />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Programs;
