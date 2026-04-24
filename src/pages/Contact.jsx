import React from 'react';
import { motion } from 'framer-motion';
import contact from '../assets/contact.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Contact = () => {
  return (
    <>
      <section className="pt-40 pb-20 px-8 max-w-[1280px] mx-auto bg-[radial-gradient(circle_at_top_right,rgba(187,0,23,0.08)_0%,transparent_40%),radial-gradient(circle_at_bottom_left,rgba(187,0,23,0.05)_0%,transparent_40%)] overflow-hidden">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp} className="relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant mb-6">
              <span className="material-symbols-outlined text-sm">rocket_launch</span>
              <span className="font-label-md text-[12px] uppercase tracking-wider">Start your journey</span>
            </div>
            <h1 className="font-h1 text-h1 text-on-surface mb-6 leading-[1.1]">Let's Shape Your <span className="text-primary">Career Path</span> Together.</h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-lg mb-8 leading-relaxed">
              Have a vision for your future? Our mentors and career coaches are ready to help you bridge the gap between where you are and where you want to be.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiYhT4WNuJZ6aRYkf8VppVCbzXuNMqggqJzE_g6U-60-LsDIPBFGetDQA00elzy86NoBEPOOTka918buLmcBwXR7JmrxV5ckm2gR4BNWtz56VOXyP-IDf1GerSQ4gtfRRRc9Kg9fHKY2F1xzT7iTYS17b8btjeK_wJtBiOJzWgprtmEVpMdZn-iWLE-uwIP8Kxdr5VJZ-U6H21MU9XoXr9MPBAiSSvf39d7g7PVKoknEgzj3eJIx1lOyOb79kJZdOdSrjm5aj5aXw" alt="Mentor" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcvEkKeMHC5sZOKyv_AadAheUVkgXp_QVBcepgQ8twF9r27yth00jkf-HgR6ttos2c66qkuqOwwllE45uadUs5_AgKyHqRbsjOQwcErnK4J_qmi_auIIXCDnzAwN9QugXavDahVwg3Vn1Ebhxw6BM24FMzW-K-SEQ1-thW8Jfg2AqyN6AcJxrJrBtQEXHr2vSZBHKAduRtKoku14SjqhluXpBvVKLgMcmBuKnssPx3VxjJNp5RI7A0grL1IUHW7--Eb7Zd1fu-SWw" alt="Student" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaY7A0j1yAJR9_NNn4_Z3fSW6MGhHcn-Hkpvc8cjcVEQdLws-jPiGNnKDm77M_wX2G_sE_swkum_FI2F3vuTqI9uWTWJrKyaHQT1PpaFvHnEvadBTk98EHzpAMTOLTaLPM5mUZIS1qTNPpJbYG_n5zKhpsfMWFwJNd--2oIMWIzQTTYXDpDVtH2P3_YbHolNT_GQ5qEWsMKvgGybpOwh0cP7_DEtW0_k0tz3cfdTNMAc07J5UsLloMclhklvvGWr331bzX5xfGfVU" alt="Mentor" />
              </div>
              <p className="text-sm text-secondary flex items-center">
                <span className="font-semibold text-on-surface mr-1">20+ Mentors</span> online today
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-fixed/30 rounded-full blur-3xl"></div>
            <div className="rounded-[40px] overflow-hidden shadow-2xl relative">
              <img className="w-full h-[400px] object-cover" src={contact} alt="Collaboration" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md border border-white/30 p-6 rounded-2xl">
                <p className="font-body-md text-on-surface italic">"The mentorship at SkillXa wasn't just about code—it was about confidence. My first message changed everything."</p>
                <p className="font-label-md text-primary mt-3">— Teja M, UX Design Graduate</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 px-8 max-w-[1280px] mx-auto">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <motion.div variants={fadeUp} className="lg:col-span-5 space-y-12 pr-0 lg:pr-8">
            <div>
              <h2 className="font-h3 text-h3 text-on-surface mb-6">Why reach out?</h2>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">forum</span>
                  </div>
                  <div>
                    <h4 className="font-h4 text-[20px] mb-1">Personalized Guidance</h4>
                    <p className="text-secondary body-md">Not sure which program fits? Tell us your goals and we'll map out a custom learning path for you.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <div>
                    <h4 className="font-h4 text-[20px] mb-1">Internship Details</h4>
                    <p className="text-secondary body-md">Want to know more about our hands-on training? Ask us about the real-world projects and skills you'll acquire.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">business_center</span>
                  </div>
                  <div>
                    <h4 className="font-h4 text-[20px] mb-1">Corporate Projects</h4>
                    <p className="text-secondary body-md">Have a real-world project for our interns? Collaborate with us to bring your ideas to life while providing practical experience.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-on-surface text-white space-y-6">
              <p className="font-h4 text-white">Join thousands of students building the future.</p>
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">100%</span>
                  <span className="text-xs text-gray-400 uppercase tracking-widest">Job Preparation</span>
                </div>
                <div className="w-px h-10 bg-gray-700"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">4.9/5</span>
                  <span className="text-xs text-gray-400 uppercase tracking-widest">Mentor Rating</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="lg:col-span-7">
            <div className="bg-white p-10 rounded-[40px] ambient-shadow border border-gray-100 relative">
              <div className="absolute -top-6 right-10 bg-primary text-white px-6 py-2 rounded-full font-label-md shadow-lg">
                Response within 2 hours
              </div>
              <form action="#" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-md text-sm text-gray-500 ml-1">First name</label>
                    <input className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 outline-none focus:bg-white focus:border-primary/30 focus:shadow-[0_0_0_2px_#bb0017,0_0_8px_rgba(187,0,23,0.2)] font-body-md transition-all" placeholder="John" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-sm text-gray-500 ml-1">Last name</label>
                    <input className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 outline-none focus:bg-white focus:border-primary/30 focus:shadow-[0_0_0_2px_#bb0017,0_0_8px_rgba(187,0,23,0.2)] font-body-md transition-all" placeholder="Doe" type="text" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-sm text-gray-500 ml-1">Work or Student Email</label>
                  <input className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 outline-none focus:bg-white focus:border-primary/30 focus:shadow-[0_0_0_2px_#bb0017,0_0_8px_rgba(187,0,23,0.2)] font-body-md transition-all" placeholder="john@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-sm text-gray-500 ml-1">What's on your mind?</label>
                  <select className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 outline-none focus:bg-white focus:border-primary/30 focus:shadow-[0_0_0_2px_#bb0017,0_0_8px_rgba(187,0,23,0.2)] font-body-md appearance-none">
                    <option>General Inquiry</option>
                    <option>Admissions & Enrollment</option>
                    <option>Career Support & Coaching</option>
                    <option>Partnerships</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-sm text-gray-500 ml-1">Message</label>
                  <textarea className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 outline-none focus:bg-white focus:border-primary/30 focus:shadow-[0_0_0_2px_#bb0017,0_0_8px_rgba(187,0,23,0.2)] font-body-md resize-none" placeholder="How can we help you succeed?" rows="5"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-on-primary font-button text-button py-5 rounded-2xl hover:brightness-110 transition-all shadow-xl shadow-red-500/20 active:scale-[0.98] flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-xl">send</span>
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="mt-12 mb-32 px-8 max-w-[1280px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-surface-container-low rounded-[48px] p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <span className="material-symbols-outlined text-[200px]">quiz</span>
          </div>
          <div className="relative z-10 text-center mb-16">
            <h3 className="font-h3 text-h3 text-on-surface mb-4">Fast Track: Quick Answers</h3>
            <p className="font-body-lg text-secondary max-w-2xl mx-auto">Skip the email if your question is common! Here’s what most students ask us right away.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { q: 'Can I learn while working full-time?', a: 'Absolutely! Most of our programs are designed for career switchers. We offer evening cohorts and self-paced modules to fit your schedule.' },
              { q: 'Do you offer job guarantees?', a: 'We offer a Career Success Commitment. We work with you until you\'re hired, providing unlimited coaching and interview prep sessions.' },
              { q: 'What if I\'m a complete beginner?', a: 'Perfect! We start from the fundamentals. Our "Foundations" week is specifically designed to get everyone up to speed, no matter their background.' },
              { q: 'Is the internship fully practical?', a: 'Yes! Our internship focuses completely on real-world projects. You will build applications, solve actual problems, and gain hands-on experience without theoretical fluff.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-primary/20 transition-colors group">
                <h5 className="font-h4 text-[18px] mb-3 flex items-center gap-2">
                  <span className="text-primary font-bold">Q.</span> {faq.q}
                </h5>
                <p className="text-secondary body-md">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-secondary mb-6">Still looking for something specific?</p>
            <button className="inline-flex items-center gap-2 font-button text-primary border-2 border-primary/10 bg-white px-8 py-4 rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm">
              <span className="material-symbols-outlined">help_center</span>
              Visit Detailed Help Center
            </button>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
