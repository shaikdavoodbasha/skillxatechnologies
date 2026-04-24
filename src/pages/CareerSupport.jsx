import React from 'react';
import { motion } from 'framer-motion';
import careersupport from '../assets/careersupport.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const CareerSupport = () => {
  return (
    <>
      <section className="relative py-section-padding px-8 bg-[radial-gradient(circle_at_70%_30%,rgba(187,0,23,0.05)_0%,transparent_50%)]">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-gutter">
          <motion.div variants={fadeUp} className="flex-1">
            <span className="inline-block px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant rounded-full text-label-md mb-6 uppercase tracking-wider">The Journey to Career Mastery</span>
            <h1 className="font-h1 text-h1 text-on-surface mb-stack-md">From Classroom to <span className="text-primary">Corporate Success</span>.</h1>
            <p className="font-body-lg text-body-lg text-secondary mb-stack-lg max-w-xl">We don't just teach code we architect careers. Our 360-degree support ecosystem ensures you transition seamlessly from a learner to a leader in the global tech space.</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-button shadow-lg shadow-red-500/20 hover:-translate-y-1 transition-all">Start Your Transition</button>
              <button className="border border-outline-variant text-on-surface px-8 py-4 rounded-xl font-button hover:bg-surface-container-low transition-all">View Success Stories</button>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="flex-1 w-full relative">
            <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200">
              <img className="w-full h-full object-cover" src={careersupport} alt="Professional" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 max-w-[200px]">
              <p className="text-primary font-bold text-h4">98%</p>
              <p className="text-secondary text-sm">Placement success rate across tech hubs</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-section-padding px-8 bg-surface-container-lowest">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1280px] mx-auto">
          <motion.div variants={fadeUp} className="mb-stack-lg text-center max-w-2xl mx-auto">
            <h2 className="font-h2 text-h2 text-on-surface mb-stack-sm">Our Step-by-Step <span className="text-primary">Blueprint</span></h2>
            <p className="font-body-lg text-body-lg text-secondary">A structured, 4-stage readiness program designed to make you industry-compatible before you even apply.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[280px]">
            <motion.div variants={fadeUp} className="md:col-span-8 bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">description</span>
                  </div>
                  <span className="text-primary font-bold">Phase 01</span>
                </div>
                <h3 className="font-h3 text-h3 text-on-surface mb-4">ATS-Optimized Resume Building</h3>
                <p className="text-secondary max-w-xl">Our specialists craft high-impact resumes that bypass algorithms and land directly on hiring managers' desks. We focus on quantifiable impact and technical depth.</p>
              </div>
              <div className="flex gap-4 items-center flex-wrap">
                <span className="text-label-md bg-surface-container px-3 py-1 rounded-full">Quantifiable Results</span>
                <span className="text-label-md bg-surface-container px-3 py-1 rounded-full">Keyword Optimization</span>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="md:col-span-4 bg-gray-900 rounded-[2rem] p-10 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6">
                  <span className="material-symbols-outlined">share</span>
                </div>
                <span className="text-white/60 font-bold">Phase 02</span>
                <h3 className="font-h4 text-h4 mt-4 mb-4">LinkedIn Authority</h3>
                <p className="text-white/70 text-sm">Turning your profile into a magnetic digital asset for top-tier recruiters.</p>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-20 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[160px]">hub</span>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="md:col-span-4 bg-primary rounded-[2rem] p-10 text-white shadow-xl shadow-red-500/20">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white mb-6">
                <span className="material-symbols-outlined">forum</span>
              </div>
              <span className="text-white/80 font-bold">Phase 03</span>
              <h3 className="font-h4 text-h4 mt-4 mb-4">Expert Mock Interviews</h3>
              <p className="text-white/90 text-sm">Simulated pressure tests with industry veterans from FAANG companies to sharpen your technical and behavioral responses.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="md:col-span-8 bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">workspace_premium</span>
                  </div>
                  <span className="text-primary font-bold">Phase 04</span>
                </div>
                <h3 className="font-h3 text-h3 text-on-surface mb-4">Final Placement Readiness</h3>
                <p className="text-secondary max-w-xl">Salary negotiation coaching, portfolio review, and exclusive access to our network of 200+ global hiring partners.</p>
              </div>
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzCpgQZEvGBy9jdL0A2TwvPDIqUacOsKtXOZPk3xPui59ud16p-b4n5HEpZRQPloMDH526EqnQJtD0xwwjc0aS2JxzRq6g1zoDpmhUKJqts0bxAmhiMMJS9zsls46OGdHXYxZNtIjD00ZYLyw_BbcZYX1FrRjT608lO0m8HHqEy1OWgEf-82NJoQFn0J9QAa_KXAIGE229XvnHDJwxSqgkq20ONqYQyTDcqtEqUXba93zhqfuaGJl5HZaF0u6K7omAghWVm3VHjjE" alt="Avatar" />
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfw6-QVhrpea8LfJv0KnBWbTfaDMfQaPPpDyh7bVIN74Zvmb-TAG-0pa25uS9UnNOoO8ozlAJf2HTL0an1KSxBTqSojNzitZ66t1ea0jC9ccmSE4rHX8JDo47MRhXIQ2wtpfpFB8iCNgtw2xQliphaMYV-5c4VQuvRNZiOqq3wxcAdE7sp2dor7qWhuz8c7rInin2oY2B3b7ra2hQ27G74IVwry96rmcXk5p0dBfXnixCj5TSwsC4MMqBA6m-wP2ATTy63zJjxoTw" alt="Avatar" />
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gray-200 flex items-center justify-center bg-primary text-white text-xs font-bold">
                  +12K
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-section-padding px-8">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <motion.div variants={fadeUp} className="space-y-stack-md">
            <h2 className="font-h2 text-h2 text-on-surface">Alumni in <span className="text-primary">Leading Labs</span></h2>
            <p className="font-body-lg text-body-lg text-secondary">Our graduates don't just find jobs, they build futures at the world's most innovative tech companies.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-surface-container-low border border-gray-100">
                <p className="text-primary font-bold text-h4 mb-1">$85K</p>
                <p className="text-secondary text-sm">Average starting package</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container-low border border-gray-100">
                <p className="text-primary font-bold text-h4 mb-1">120%</p>
                <p className="text-secondary text-sm">Average salary hike</p>
              </div>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50 transform lg:translate-y-12">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined text-sm text-yellow-400 font-variation-settings-'FILL'-1">star</span>)}
                </div>
                <p className="italic text-on-surface mb-6">"The mock interviews were brutal but life-saving. I walked into Google feeling prepared."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-primary font-bold text-xs">SK</div>
                  <div>
                    <p className="font-bold text-xs">Sowmya K.</p>
                    <p className="text-[10px] text-secondary">Software Engineer</p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50 transform lg:translate-y-12">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined text-sm text-yellow-400 font-variation-settings-'FILL'-1">star</span>)}
                </div>
                <p className="italic text-on-surface mb-6">"My LinkedIn views skyrocketed after the profile optimization session."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-primary font-bold text-xs">RM</div>
                  <div>
                    <p className="font-bold text-xs">Rahul M.</p>
                    <p className="text-[10px] text-secondary">UI Designer </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="space-y-4">
              <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined text-sm text-yellow-400 font-variation-settings-'FILL'-1">star</span>)}
                </div>
                <p className="italic text-on-surface mb-6">"The career support didn't stop after the first job. They helped with my first promotion."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-primary font-bold text-xs">JA</div>
                  <div>
                    <p className="font-bold text-xs">ManjusNadh A.</p>
                    <p className="text-[10px] text-secondary">DevOps Lead</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-section-padding px-8 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[400px] leading-none">trending_up</span>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-[1280px] mx-auto text-center relative z-10">
          <h2 className="font-h1 text-h2 mb-stack-md">Ready to start your <span className="text-primary">career transition?</span></h2>
          <p className="font-body-lg text-body-lg text-white/70 mb-stack-lg max-w-2xl mx-auto">Join Now, Future students who will successfully pivot their careers into tech with SkillXa's world-class support.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdjovDbLOmgGbHfRXDM_klJWvgXabTvGJEqoaaR9_Wh799Wqw/viewform" target="_blank" rel="noopener noreferrer" className="group bg-white text-primary flex items-center justify-center gap-2 px-12 py-5 rounded-2xl font-button text-lg hover:bg-gray-50 hover:scale-105 hover:shadow-[0_20px_50px_-10px_rgba(255,255,255,0.3)] transition-all duration-300">
              <span>Apply for Next Cohort</span>
              <span className="material-symbols-outlined text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">arrow_forward</span>
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default CareerSupport;
