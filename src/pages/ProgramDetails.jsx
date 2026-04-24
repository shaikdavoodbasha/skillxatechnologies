import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { programsData } from '../data/programsData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const ProgramDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const program = programsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 px-8">
        <h1 className="text-4xl font-black mb-4">Program Not Found</h1>
        <p className="text-gray-500 mb-8">We couldn't find the program you were looking for.</p>
        <button onClick={() => navigate('/programs')} className="bg-primary text-white px-6 py-3 rounded-lg font-bold">
          Back to Programs
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img src={program.heroImage} alt={program.title} className="absolute inset-0 w-full h-full object-cover" />

        <div className="relative z-20 max-w-[1280px] mx-auto px-8 w-full">
          <Link to="/programs" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span className="font-semibold text-sm">Back to Programs</span>
          </Link>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded uppercase tracking-wider">{program.num}</span>
              <span className="text-white/80 font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">{program.icon}</span>
                {program.role}
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
              {program.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              {program.desc}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdjovDbLOmgGbHfRXDM_klJWvgXabTvGJEqoaaR9_Wh799Wqw/viewform" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-colors flex items-center gap-2">
                Apply for Internship
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1280px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Details */}
          <div className="lg:col-span-8 space-y-16">

            {/* Overview */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeUp} className="text-3xl font-black mb-6 text-gray-900">Program Overview</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed">
                {program.longDesc}
              </motion.p>
            </motion.div>

            {/* The Transformation */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="bg-red-50 p-8 md:p-10 rounded-3xl border border-red-100">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4 text-primary">
                <span className="material-symbols-outlined text-3xl">auto_awesome</span>
                <h3 className="text-2xl font-bold">The Transformation</h3>
              </motion.div>
              <motion.p variants={fadeUp} className="text-gray-800 text-lg leading-relaxed">
                {program.transformation}
              </motion.p>
            </motion.div>

            {/* Curriculum */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeUp} className="text-3xl font-black mb-8 text-gray-900">What You'll Learn</motion.h2>
              <div className="space-y-6">
                {program.curriculum.map((module, idx) => (
                  <motion.div key={idx} variants={fadeUp} className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors">
                    <div className="w-28 flex-shrink-0 pt-1">
                      <p className="text-primary font-bold text-sm tracking-wide">{module.week}</p>
                      {module.phase && (
                        <span className={`inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                          module.phase === 'LEARN' ? 'bg-blue-100 text-blue-700' :
                          module.phase === 'BUILD' ? 'bg-amber-100 text-amber-700' :
                          module.phase === 'LAUNCH' ? 'bg-green-100 text-green-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>{module.phase}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">{module.title}</h4>
                      <ul className="space-y-2 text-gray-600">
                        {Array.isArray(module.details) ? module.details.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                            <span className="text-sm">{point}</span>
                          </li>
                        )) : (
                          <p className="text-gray-600">{module.details}</p>
                        )}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 sticky top-32">

              <motion.div variants={fadeUp} className="mb-8">
                <h3 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-4">Target Role</h3>
                <div className="flex items-center gap-3 text-gray-900">
                  <span className="material-symbols-outlined text-primary bg-red-50 p-2 rounded-lg">work</span>
                  <span className="font-semibold text-lg">{program.role}</span>
                </div>
              </motion.div>

              <hr className="border-gray-100 mb-8" />

              <motion.div variants={fadeUp} className="mb-8">
                <h3 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {program.tools.map((tool, idx) => (
                    <span key={idx} className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-700 font-medium rounded-lg text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>

              <hr className="border-gray-100 mb-8" />

              <motion.div variants={fadeUp} className="mb-8">
                <h3 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-4">Projected Build</h3>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <p className="text-gray-700 font-medium">{program.build}</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdjovDbLOmgGbHfRXDM_klJWvgXabTvGJEqoaaR9_Wh799Wqw/viewform" target="_blank" rel="noopener noreferrer" className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                  Apply Now
                </a>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProgramDetails;
