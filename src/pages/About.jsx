import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import about from '../assets/about.png';
import careers from '../assets/careers.png';
import practical from '../assets/practical.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-[120px] px-8 bg-white overflow-hidden">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <motion.div variants={fadeUp} className="space-y-stack-md">
            <div className="inline-block px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-label-md">OUR MISSION</div>
            <h1 className="font-h1 text-h1 text-on-surface">Helping students become professionals.</h1>
            <p className="text-body-lg font-body-lg text-secondary max-w-lg">
              We bridge the gap between academic theory and industry reality. SkillXa is more than an academy, it's a launchpad for the next generation of tech innovators.
            </p>
            <div className="flex items-center gap-stack-md pt-stack-sm">
              <div className="flex -space-x-4">
                <img className="w-12 h-12 rounded-full border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdppcsXnxUK7Ll16MRVVPGhyNICbwVoG5lsmAiYHZlWw5pGHda9r_0ILMSKGgepfJxgcIWiiBPlRAXQWRfAaLHup5LZ-bBhIn-hJWm5R_4nGkjamiqij491eOizO5k4Hnvp8-SmUy9DhttbptzxOcDrgJ5hTDfwVDmwfTH8rJxYKIuPvFq30ugV4Bdwpc3ENJBVPDUfu6WGUikSx0Swx8XGVHi5DHrCDmGKPZLOUGqd28C3HWnULDdUA_NSpg5pJGJX_Fe-kdZCQc" alt="Alumni" />
                <img className="w-12 h-12 rounded-full border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_pAbloX5uf2IxNHEvAU1vt2LPGCLoRmsKTzyXB10yLtUfcKvotIVPqU_-898wrLXz9PKi5aWzZSOktZTRp269BpzkAJykDztDQiRgEPmJbSVP83OUSHl3R271KHU3iBx1nacMP0Es-NdP6TK6s88pZtYfY3ApHKtK1QDinPIIqBcu037wPq58x4pAPUrXjjXdRaVA8MEAKcEO-s4GdrgJmnAfrIcqMdqT4ryMAhtZ7IXRrMjZr9WwaIAlBPyVXXqHkgAoff9UrSE" alt="Alumni" />
                <img className="w-12 h-12 rounded-full border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo-oYckcLqmiGgJAofEASYT7tZ0GiIvPWYguigdb7GMkb5-BMXslEpBC0pNUdAUa7Ez8QoayU7C5bKk21goCWQuAONvaT__vi8OTOteFhR82k4kKuf0h92VftAhwo34RxNcJ6XG0nASqOnT9s8OEqcH7VoqVUdjCa4LiqmypPkR7nks0dzBn49fWOqM75O4y9-gAr8we-7yRzG05EAZwRh0eSJ75ky7EFnR9H6ET10IvapEzMFDRnQ6TZLcPotG9GKLTB97uZsV7c" alt="Alumni" />
              </div>
              <p className="text-label-md text-on-surface-variant font-semibold">Join 5,000+ Alumni</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover" src={about} alt="Office" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Why SkillXa Exists */}
      <section className="py-[120px] px-8 bg-surface-container-low">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <h2 className="font-h2 text-h2 text-on-surface mb-stack-md">Why SkillXa exists</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </motion.div>
          <motion.div variants={fadeUp} className="lg:col-span-7 space-y-stack-md">
            <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
              The traditional education system was designed for an era that no longer exists. Today, technology evolves faster than curricula can be updated. This creates a "readiness gap" where students graduate with degrees but without the practical skills required by top-tier tech firms.
            </p>
            <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
              SkillXa was founded to disrupt this cycle. We believe that true learning happens at the intersection of mentorship and execution. By bringing world-class practitioners into the classroom, we ensure our students are not just learning—they are building their careers from day one.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="py-[120px] px-8 bg-white">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1280px] mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-stack-lg">
            <h2 className="font-h2 text-h2 text-on-surface">Our Vision for Tomorrow</h2>
            <p className="text-body-lg text-secondary mt-4 max-w-2xl mx-auto">Democratizing high-end tech education through three core pillars of excellence.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} className="bg-surface-container rounded-3xl p-10 flex flex-col justify-between border border-gray-100 ambient-shadow hover:-translate-y-1 transition-transform">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6 block">auto_awesome</span>
                <h3 className="font-h3 text-h3 mb-4">Hands-on Mastery</h3>
                <p className="text-body-md text-secondary">No fluff. No filler. Our vision focuses on project-based learning where students solve real-world problems for real-world clients.</p>
              </div>
              <div className="mt-12 rounded-xl overflow-hidden aspect-video">
                <img className="w-full h-full object-cover" src={practical} alt="Workshop" />
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-primary text-on-primary rounded-3xl p-10 flex flex-col justify-between ambient-shadow hover:-translate-y-1 transition-transform">
              <div>
                <span className="material-symbols-outlined text-white text-4xl mb-6 block">groups</span>
                <h3 className="font-h3 text-h3 mb-4">Network of Experts</h3>
                <p className="text-white/80">Connecting every student with a global network of senior engineers and designers from top Silicon Valley firms.</p>
              </div>
              <div className="mt-12 space-y-4">
                <div className="h-1 bg-white/20 w-full rounded-full">
                  <div className="h-1 bg-white w-3/4 rounded-full"></div>
                </div>
                <p className="text-sm font-bold">1,200+ Active Industry Mentors</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-surface-container rounded-3xl p-10 flex flex-col justify-between border border-gray-100 ambient-shadow hover:-translate-y-1 transition-transform">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6 block">rocket_launch</span>
                <h3 className="font-h3 text-h3 mb-4">Career Acceleration</h3>
                <p className="text-body-md text-secondary">Our goal is a 100% placement rate within 3 months of graduation. We don't just teach, we place.</p>
              </div>
              <div className="mt-12 rounded-xl overflow-hidden aspect-video">
                <img className="w-full h-full object-cover" src={careers} alt="Dashboard" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Mentors Section */}
      <section className="py-[120px] px-8 bg-surface-container-low overflow-hidden">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1280px] mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="font-h2 text-h2 text-on-surface mb-4">Our Industry Experts</h2>
            <p className="text-body-lg text-secondary max-w-2xl mx-auto">Our mentors aren't just teachers—they are leaders at companies you use every day.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Marcus Thorne', role: 'FullStack Engineer', company: 'Google', icon: 'Brush' },
              { name: 'Elena Rodriguez', role: 'Software Engineer', company: 'Netflix', icon: 'Code' },
              { name: 'David Chen', role: 'Product Manager', company: 'Stripe', icon: 'Payments' },
              { name: 'Sarah Jenkins', role: 'AI Researcher', company: 'OpenAI', icon: 'Smart_Toy' }
            ].map((mentor, i) => (
              <motion.div key={i} variants={fadeUp} className="group bg-white p-8 rounded-[2rem] border border-gray-100 ambient-shadow hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">{mentor.icon}</span>
                </div>
                <h4 className="font-h4 text-h4 mb-1">{mentor.name}</h4>
                <p className="text-sm text-on-surface-variant font-medium mb-1">{mentor.role}</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">@{mentor.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-[120px] px-8 bg-primary">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center text-on-primary">
            {[
              { val: '100%', label: 'Job Preparation' },
              { val: '10+', label: 'Mock Interviews' },
              { val: '4.5/5', label: 'Student Rating' },
              { val: '9', label: 'Tech Domains' }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="space-y-2">
                <div className="text-5xl font-black">{stat.val}</div>
                <p className="text-label-md opacity-80 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
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

export default About;
