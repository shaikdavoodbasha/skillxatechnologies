import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroimg from '../assets/hero_img.png';
import fullstack from '../assets/fllustack.png';
import aimlimg from '../assets/aiml.png';
import uiux from '../assets/uiux.png';
import certificate from '../assets/certified.png';
import whychoose from '../assets/whychoose.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Home = () => {
  return (
    <>
      <section className="relative min-h-[921px] flex items-center pt-24 pb-32 px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary to-transparent blur-3xl"></div>
        </div>
        <div className="max-w-[1280px] mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="space-y-stack-lg">
            <div className="inline-flex gap-2 flex-wrap">
              <span className="bg-surface-container-high px-4 py-1.5 rounded-full font-label-md text-label-md text-primary">3 Months</span>
              <span className="bg-surface-container-high px-4 py-1.5 rounded-full font-label-md text-label-md text-primary">9 Domains</span>
              <span className="bg-surface-container-high px-4 py-1.5 rounded-full font-label-md text-label-md text-primary">6+ Certificates</span>
              <span className="bg-surface-container-high px-4 py-1.5 rounded-full font-label-md text-label-md text-primary">100% Online</span>
            </div>
            <h1 className="font-h1 text-h1 tracking-tighter leading-none">
              Where Students Become <br />
              <span className="text-primary">Professionals</span>
            </h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-lg">
              3-Month Online Internship Program with 9 In-Demand Tech Domains. Bridging the gap between academic learning and industry excellence.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdjovDbLOmgGbHfRXDM_klJWvgXabTvGJEqoaaR9_Wh799Wqw/viewform" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary font-button text-button h-[56px] px-10 rounded-lg shadow-[0_10px_25px_rgba(187,0,23,0.15)] hover:shadow-[0_15px_35px_rgba(187,0,23,0.25)] transition-all flex items-center justify-center gap-2 group">
                Apply Now
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
              <Link to="/programs" className="border border-gray-200 flex items-center justify-center gap-1 h-[56px] px-10 rounded-lg font-button text-button hover:bg-on-surface hover:text-white hover:border-on-surface transition-all duration-300 group">
                <span>View Programs</span>
                <span className="material-symbols-outlined text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">arrow_forward</span>
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
            <div className="bg-surface-container-highest rounded-3xl overflow-hidden shadow-2xl relative aspect-video md:aspect-[4/3]">
              <img className="w-full h-full object-cover" alt="Students" src={heroimg} />
              <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-100 shadow-lg">
                <p className="text-gray-600 font-label-md mb-2">Next Batch Starts</p>
                <p className="text-primary font-h4 text-h4">May 15, 2026</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-2xl -z-10 rotate-12 opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary rounded-full -z-10 opacity-20"></div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white border-y border-gray-100 py-12">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-[1280px] mx-auto px-8 flex flex-wrap justify-between gap-gutter">
          {[
            { icon: 'laptop_mac', text: '100% Online' },
            { icon: 'school', text: 'No Experience Needed' },
            { icon: 'rocket_launch', text: 'Live Projects' },
            { icon: 'work', text: 'Career Support' }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
              <span className="font-label-md uppercase tracking-widest text-secondary">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-[120px] px-8 bg-surface">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-[1280px] mx-auto">
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-label-md uppercase tracking-widest mb-4 block">The Launchpad Advantage</span>
              <h2 className="font-h2 text-h2 mb-6">Designed to propel your tech journey</h2>
              <p className="font-body-lg text-body-lg text-secondary">SkillXa isn't just an internship, it's a simulated professional environment where students tackle real-world problems with industry-standard tools.</p>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: 'account_tree', title: 'Live Projects', desc: 'Work on production-grade applications that actually matter in the real world.' },
              { icon: 'timer', title: 'Daily Training', desc: 'Intensive daily sessions covering core concepts and advanced industry practices.' },
              { icon: 'draw', title: 'Portfolio Building', desc: 'Curate a stunning professional portfolio that commands attention from recruiters.' },
              { icon: 'groups', title: 'Mentor Support', desc: 'One-on-one guidance from seniors currently working at top tier tech giants.' }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white p-8 rounded-2xl ambient-shadow border border-transparent hover:border-primary/20 transition-all flex flex-col h-full">
                <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">{feature.icon}</span>
                </div>
                <h4 className="font-h4 text-h4 mb-4">{feature.title}</h4>
                <p className="text-secondary body-md">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-[120px] px-8 bg-white overflow-hidden">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-[1280px] mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-20">
            <h2 className="font-h2 text-h2 mb-4">Explore 9 Tech Domains</h2>
            <p className="font-body-lg text-body-lg text-secondary">Specialized paths designed for every interest in the digital ecosystem.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <motion.div variants={fadeUp} className="col-span-2 row-span-2 group relative overflow-hidden rounded-3xl bg-surface-container h-[400px]">
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="AI/ML" src={aimlimg} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <span className="text-white/60 font-label-md mb-2">HOT TREND</span>
                <h3 className="text-white font-h3 text-h3 mb-2">AI / ML</h3>
                <p className="text-white/80 text-sm">Build predictive models and neural networks.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="col-span-2 group relative overflow-hidden rounded-3xl bg-surface-container h-[188px]">
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Fullstack" src={fullstack} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-white font-h4 text-h4">Fullstack Dev</h3>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="col-span-2 group relative overflow-hidden rounded-3xl bg-surface-container h-[188px]">
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="UI/UX" src={uiux} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-white font-h4 text-h4">UI/UX Design</h3>
              </div>
            </motion.div>
            {[
              { icon: 'database', text: 'Data Analyst' },
              { icon: 'settings_ethernet', text: 'Backend' },
              { icon: 'terminal', text: 'Frontend' },
              { icon: 'cloud', text: 'Cloud' },
              { icon: 'security', text: 'Cyber Security' },
              { icon: 'smartphone', text: 'Mobile App' }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="group p-6 rounded-2xl bg-surface-container-low hover:bg-primary transition-all duration-300">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl mb-4">{item.icon}</span>
                <h4 className="font-label-md group-hover:text-white">{item.text}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* The Roadmap Section */}
      <section className="py-[120px] px-8 bg-surface">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1280px] mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-20">
            <span className="text-primary font-label-md uppercase tracking-widest mb-4 block">The Roadmap</span>
            <h2 className="font-h2 text-h2">Your 90-Day Transformation</h2>
          </motion.div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                { num: '01', title: 'Deep Learning', desc: 'Month 1: Mastering core foundations with daily live sessions and coding workshops.' },
                { num: '02', title: 'Project Building', desc: 'Month 2: Applying knowledge to actual business problems and building full-scale projects.' },
                { num: '03', title: 'Career Prep', desc: 'Month 3: Mock interviews, portfolio refinement, and placement assistance.' }
              ].map((step, i) => (
                <motion.div key={i} variants={fadeUp} className="group bg-white p-8 rounded-3xl ambient-shadow border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(187,0,23,0.15)] hover:border-primary/30 transition-all duration-400 cursor-default">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-h4 text-h4 mb-6 shadow-lg shadow-red-200 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-red-300 transition-all duration-400">{step.num}</div>
                  <h4 className="font-h4 text-h4 mb-4 group-hover:text-primary transition-colors duration-300">{step.title}</h4>
                  <p className="text-secondary font-body-md">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* What You Graduate With Section */}
      <section className="py-[120px] px-8 bg-white">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp}>
            <h2 className="font-h2 text-h2 mb-8">What You Graduate With</h2>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">verified</span>
                </div>
                <div>
                  <h4 className="font-h4 text-h4 text-base mb-1">Industry Certificates</h4>
                  <p className="text-secondary">Official certification recognized by top tech companies worldwide.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">description</span>
                </div>
                <div>
                  <h4 className="font-h4 text-h4 text-base mb-1">Letter of Recommendation</h4>
                  <p className="text-secondary">Earn an LOR based on your performance during the live projects.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">folder_special</span>
                </div>
                <div>
                  <h4 className="font-h4 text-h4 text-base mb-1">Project Experience</h4>
                  <p className="text-secondary">A robust GitHub profile filled with industry-grade code repositories.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="bg-surface-container-high rounded-3xl p-12 relative">
            <img className="w-full h-auto rounded-xl shadow-xl" alt="Graduation" src={certificate} />
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs hidden sm:block">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <span className="material-symbols-outlined font-variation-settings-'FILL'-1">check</span>
                </div>
                <span className="font-label-md">Outcome Verified</span>
              </div>
              <p className="text-sm text-secondary italic">"The LOR from SkillXaTechnologies helped me land my first Junior Dev role in just 2 weeks!" - Aarohi Sharma K.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* The Package Section */}
      <section className="py-[120px] px-8 bg-surface">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1280px] mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="text-primary font-label-md uppercase tracking-widest mb-4 block">The Package</span>
            <h2 className="font-h2 text-h2 mb-4">What You Get</h2>
            <p className="font-body-lg text-body-lg text-secondary">A comprehensive learning ecosystem designed for your success.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'live_tv', title: 'Daily Live Classes', desc: 'Interactive real-time sessions with industry experts.' },
              { icon: 'quiz', title: 'Doubt Solving', desc: 'Instant support to clear technical roadblocks anytime.' },
              { icon: 'person_search', title: '1-on-1 Mentorship', desc: 'Personalized guidance tailored to your career goals.' },
              { icon: 'integration_instructions', title: 'Unique Projects', desc: 'Build original, complex projects that stand out.' },
              { icon: 'description', title: 'Resume + Interview', desc: 'Professional resume building and mock interview rounds.' },
              { icon: 'language', title: 'Portfolio Website', desc: 'A custom-built site to showcase your professional work.' },
              { icon: 'smart_toy', title: 'AI Tools Training', desc: 'Mastering the latest AI workflows to boost productivity.' },
              { icon: 'groups', title: 'Mock Interview', desc: 'One-on-one simulated interviews with industry experts to boost your confidence and performance.' }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white p-8 rounded-2xl ambient-shadow border border-gray-100 hover:border-primary/20 hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(187,0,23,0.12)] transition-all duration-300 group cursor-default">
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-red-200 transition-all duration-300">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h4 className="font-h4 text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                <p className="text-secondary text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What Students Earn Section */}
      <section className="py-[120px] px-8 bg-white">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1280px] mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="text-primary font-label-md uppercase tracking-widest mb-4 block">Proven Results</span>
            <h2 className="font-h2 text-h2 mb-4">What Students Earn</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'workspace_premium', title: 'Internship Certificate', desc: 'Recognized industry-standard certification of completion.' },
              { icon: 'bar_chart', title: 'Performance Card', desc: 'Detailed evaluation of your technical and soft skills.' },
              { icon: 'web', title: 'Portfolio Website', desc: 'A live URL showcasing your projects to recruiters.' },
              { icon: 'badge', title: 'Mock Interview Cert', desc: 'Proof of readiness for professional technical interviews.' },
              { icon: 'approval', title: 'LOR (Letter of Rec)', desc: 'Verified recommendation from industry professionals.' },
              { icon: 'rocket', title: 'Project Experience', desc: 'Tangible work experience on real-world deployments.' }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-6 items-start p-6 rounded-2xl hover:bg-surface-container-low transition-colors">
                <div className="w-14 h-14 shrink-0 bg-white shadow-md border border-gray-100 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-h4 text-base font-bold mb-2">{item.title}</h4>
                  <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Choose SkillXa Section */}
      <section className="py-[120px] px-8 bg-surface">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp}>
            <h2 className="font-h2 text-h2 mb-8">Why Choose SkillXa</h2>
            <p className="font-body-lg text-body-lg text-secondary mb-12">We focus on what actually matters in the job market, bypassing traditional academic fluff to get you hired.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="group space-y-4 p-5 rounded-2xl hover:bg-white hover:shadow-[0_15px_40px_-10px_rgba(187,0,23,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-default">
                <div className="w-12 h-12 bg-white rounded-2xl ambient-shadow flex items-center justify-center group-hover:bg-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-200 transition-all duration-300">
                  <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors duration-300">history_edu</span>
                </div>
                <h4 className="font-bold group-hover:text-primary transition-colors duration-300">No experience needed</h4>
                <p className="text-secondary text-sm">We start from the absolute basics and build up.</p>
              </div>
              <div className="group space-y-4 p-5 rounded-2xl hover:bg-white hover:shadow-[0_15px_40px_-10px_rgba(187,0,23,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-default">
                <div className="w-12 h-12 bg-white rounded-2xl ambient-shadow flex items-center justify-center group-hover:bg-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-200 transition-all duration-300">
                  <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors duration-300">architecture</span>
                </div>
                <h4 className="font-bold group-hover:text-primary transition-colors duration-300">Unique projects</h4>
                <p className="text-secondary text-sm">Original repositories, not just copied code tutorials.</p>
              </div>
              <div className="group space-y-4 p-5 rounded-2xl hover:bg-white hover:shadow-[0_15px_40px_-10px_rgba(187,0,23,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-default">
                <div className="w-12 h-12 bg-white rounded-2xl ambient-shadow flex items-center justify-center group-hover:bg-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-200 transition-all duration-300">
                  <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors duration-300">psychology</span>
                </div>
                <h4 className="font-bold group-hover:text-primary transition-colors duration-300">Strong mentorship</h4>
                <p className="text-secondary text-sm">Learn from seniors at Fortune 500 tech companies.</p>
              </div>
              <div className="group space-y-4 p-5 rounded-2xl hover:bg-white hover:shadow-[0_15px_40px_-10px_rgba(187,0,23,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-default">
                <div className="w-12 h-12 bg-white rounded-2xl ambient-shadow flex items-center justify-center group-hover:bg-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-200 transition-all duration-300">
                  <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors duration-300">ads_click</span>
                </div>
                <h4 className="font-bold group-hover:text-primary transition-colors duration-300">Career-focused</h4>
                <p className="text-secondary text-sm">Everything we teach is aimed at your first paycheck.</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="relative">
            <div className="bg-primary/5 rounded-[40px] p-8">
              <img className="w-full h-auto rounded-3xl ambient-shadow" alt="Collaboration" src={whychoose} />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary opacity-5 rounded-full blur-3xl"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-[120px] px-8">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-[1280px] mx-auto bg-primary rounded-[40px] p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-h2 text-h2 mb-6 text-white">Start Your Tech Career Today</h2>
            <p className="font-body-lg text-body-lg mb-10 text-white/80">Don't wait for opportunities. Build the skills that make you irresistible to recruiters.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdjovDbLOmgGbHfRXDM_klJWvgXabTvGJEqoaaR9_Wh799Wqw/viewform" target="_blank" rel="noopener noreferrer" className="group bg-white text-primary font-button text-button h-[64px] px-12 flex items-center justify-center gap-2 rounded-full hover:bg-gray-50 hover:shadow-[0_15px_40px_-5px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 active:scale-95 shadow-xl">
                <span>Apply for Internship</span>
                <span className="material-symbols-outlined text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">arrow_forward</span>
              </a>
              <Link to="/contact" className="group border-2 border-white/30 text-white font-button text-button flex items-center justify-center gap-2 h-[64px] px-12 rounded-full hover:bg-white hover:text-primary hover:border-white hover:scale-105 hover:shadow-[0_15px_40px_-5px_rgba(255,255,255,0.3)] transition-all duration-300 active:scale-95">
                <span>Talk to Advisor</span>
                <span className="material-symbols-outlined text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">arrow_forward</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
