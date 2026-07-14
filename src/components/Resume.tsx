'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, workExperience, keyProjects, technicalSkills, awards, education, personalDetails } from '@/data/resume';
import { Download, FileText, Briefcase, GraduationCap, Info, Sparkles } from 'lucide-react';
import Magnetic from './Magnetic';
import { downloadCV } from '@/lib/downloadCV';

type Tab = 'experience' | 'skills' | 'education' | 'personal';

export default function Resume() {
  const [activeTab, setActiveTab] = useState<Tab>('experience');

  return (
    <>
      {/* Screen View */}
      <section id="resume" className="py-20 sm:py-32 relative overflow-hidden print:hidden">
        {/* Glow blobs */}
        <div className="glow-blob w-[350px] h-[350px] bg-accent-cyan/15 top-10 right-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section title */}
          <div className="text-center mb-16 sm:mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
            >
              Interactive{' '}
              <span className="bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-sky bg-clip-text text-transparent">
                Resume
              </span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              className="h-[3px] bg-gradient-to-r from-accent-violet to-accent-cyan mx-auto mt-4 rounded-full"
            />
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 bg-white/[0.02] border border-white/5 p-4 rounded-2xl shadow-clay">
              <div className="flex items-center gap-3 text-slate-300">
                <FileText size={20} className="text-accent-cyan" />
                <span className="text-sm font-semibold">Downloadable Resume</span>
              </div>
              <Magnetic>
                <button
                  onClick={downloadCV}
                  className="clay-btn bg-gradient-to-r from-accent-violet to-accent-cyan px-6 py-2.5 text-xs font-bold text-white flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Download size={14} />
                  Download CV
                </button>
              </Magnetic>
            </div>

            {/* Resume Board */}
            <div className="clay-card bg-white/[0.01] border-white/5 p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-stretch">
              {/* Sidebar Tabs */}
              <div className="md:w-1/4 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 gap-2 border-b md:border-b-0 md:border-r border-white/5 scrollbar-none">
                {(['experience', 'skills', 'education', 'personal'] as Tab[]).map((tab) => {
                  const label = tab.charAt(0).toUpperCase() + tab.slice(1);
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 md:flex-initial px-4 py-3 rounded-xl text-left text-sm font-bold transition-all ${
                        activeTab === tab
                          ? 'bg-white/5 border border-white/10 text-white shadow-clay'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              {/* Panel Content */}
              <div className="md:w-3/4 flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    {activeTab === 'experience' && (
                      <div className="space-y-6">
                        <div className="flex items-center gap-2 text-accent-cyan border-b border-white/5 pb-2">
                          <Briefcase size={16} />
                          <h3 className="font-extrabold text-sm uppercase tracking-wider">Professional Timeline</h3>
                        </div>
                        {workExperience.map((work) => (
                          <div key={work.company} className="space-y-2 border-b border-white/5 pb-4 last:border-b-0 last:pb-0">
                            <div className="flex justify-between items-start flex-wrap gap-2">
                              <div>
                                <h4 className="text-white font-extrabold text-base">{work.role}</h4>
                                <span className="text-accent-sky text-sm font-semibold">{work.company}</span>
                              </div>
                              <span className="text-xs text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                                {work.period}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 font-medium">Domain: {work.domain} | {work.location}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'skills' && (
                      <div className="space-y-6">
                        <div className="flex items-center gap-2 text-accent-violet border-b border-white/5 pb-2">
                          <Sparkles size={16} />
                          <h3 className="font-extrabold text-sm uppercase tracking-wider">Skills Directory</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {technicalSkills.map((cat) => (
                            <div key={cat.category} className="clay-card p-4 bg-white/[0.01] border-white/5">
                              <h4 className="text-white font-bold text-xs sm:text-sm mb-2.5 tracking-wide text-accent-sky uppercase">
                                {cat.category}
                              </h4>
                              <div className="flex flex-wrap gap-1.5">
                                {cat.items.map((skill) => (
                                  <span
                                    key={skill}
                                    className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'education' && (
                      <div className="space-y-6">
                        <div className="flex items-center gap-2 text-accent-sky border-b border-white/5 pb-2">
                          <GraduationCap size={16} />
                          <h3 className="font-extrabold text-sm uppercase tracking-wider">Education</h3>
                        </div>
                        <div className="clay-card p-6 bg-white/[0.01] border-white/5 space-y-4">
                          <div className="flex justify-between items-start flex-wrap gap-2">
                            <div>
                              <h4 className="text-white font-extrabold text-lg">{education.degree}</h4>
                              <p className="text-accent-cyan text-sm font-semibold">{education.institution}</p>
                            </div>
                            <span className="text-xs text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                              {education.period}
                            </span>
                          </div>
                          <div className="text-xs sm:text-sm text-slate-400 space-y-1">
                            <p>University: {education.board}</p>
                            <p>Location: {education.location}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'personal' && (
                      <div className="space-y-6">
                        <div className="flex items-center gap-2 text-accent-violet border-b border-white/5 pb-2">
                          <Info size={16} />
                          <h3 className="font-extrabold text-sm uppercase tracking-wider">Bio-Data</h3>
                        </div>
                        <div className="clay-card p-6 bg-white/[0.01] border-white/5 space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                            <div className="space-y-1">
                              <span className="text-slate-500 block uppercase font-bold text-[10px] tracking-wider">Full Name</span>
                              <span className="text-white font-semibold">{personalInfo.name}</span>
                            </div>
                            <div className="space-y-1">
                              <span className="text-slate-500 block uppercase font-bold text-[10px] tracking-wider">Date of Birth</span>
                              <span className="text-white font-semibold">{personalDetails.dob}</span>
                            </div>
                            <div className="space-y-1 col-span-2">
                              <span className="text-slate-500 block uppercase font-bold text-[10px] tracking-wider">Languages Known</span>
                              <div className="flex flex-wrap gap-1.5 mt-1">
                                {personalDetails.languages.map((lang) => (
                                  <span key={lang} className="text-xs font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/15 text-slate-200">
                                    {lang}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Print-Only Layout */}
      <div className="hidden print:block bg-white text-black p-8 font-sans w-full max-w-[21cm] mx-auto text-sm">
        {/* Header */}
        <div className="text-center border-b-2 border-gray-300 pb-4 mb-4">
          <h1 className="text-3xl font-extrabold tracking-tight uppercase mb-1">{personalInfo.name}</h1>
          <p className="text-sm font-semibold text-gray-600 mb-2">{personalInfo.title} | 5+ Years of Experience</p>
          <div className="flex justify-center flex-wrap gap-4 text-xs text-gray-500">
            <span>Phone: {personalInfo.phone}</span>
            <span>Email: {personalInfo.email}</span>
            <span>Location: {personalInfo.location}</span>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-6">
          <h2 className="text-base font-extrabold uppercase border-b border-gray-300 pb-1 mb-2 tracking-wide">Professional Summary</h2>
          <p className="text-xs leading-relaxed text-gray-700 whitespace-pre-line">{personalInfo.summary}</p>
        </div>

        {/* Experience */}
        <div className="mb-6">
          <h2 className="text-base font-extrabold uppercase border-b border-gray-300 pb-1 mb-2 tracking-wide">Work Experience</h2>
          <div className="space-y-4">
            {workExperience.map((exp) => (
              <div key={exp.company}>
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="font-extrabold text-gray-900">{exp.company} — {exp.role}</span>
                  <span className="font-bold text-gray-600">{exp.period}</span>
                </div>
                <p className="text-[10px] text-gray-500 font-semibold mb-1">{exp.location} | {exp.domain}</p>
                <ul className="list-disc pl-4 space-y-1">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-xs text-gray-700 leading-normal">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Key Projects */}
        <div className="mb-6 page-break-before">
          <h2 className="text-base font-extrabold uppercase border-b border-gray-300 pb-1 mb-2 tracking-wide">Key Projects</h2>
          <div className="space-y-4">
            {keyProjects.map((proj) => (
              <div key={proj.title}>
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="font-extrabold text-gray-900">{proj.title}</span>
                  <span className="font-bold text-gray-600">{proj.period}</span>
                </div>
                <p className="text-[10px] text-gray-500 font-semibold mb-1">Stack: {proj.tech.join(', ')}</p>
                <ul className="list-disc pl-4 space-y-1">
                  {proj.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-xs text-gray-700 leading-normal">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-6">
          <h2 className="text-base font-extrabold uppercase border-b border-gray-300 pb-1 mb-2 tracking-wide">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
            {technicalSkills.map((cat) => (
              <div key={cat.category} className="flex flex-start gap-2">
                <span className="font-extrabold text-gray-900 uppercase min-w-[90px]">{cat.category}:</span>
                <span className="text-gray-700">{cat.items.join(', ')}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-6">
          <h2 className="text-base font-extrabold uppercase border-b border-gray-300 pb-1 mb-2 tracking-wide">Awards & Recognition</h2>
          <div className="space-y-2 text-xs">
            {awards.map((award) => (
              <div key={award.title}>
                <div className="flex justify-between items-center mb-0.5">
                  <span className="font-extrabold text-gray-900">{award.title} — {award.company}</span>
                  <span className="font-bold text-gray-600">{award.period}</span>
                </div>
                <p className="text-gray-700">{award.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Personal Details */}
        <div>
          <h2 className="text-base font-extrabold uppercase border-b border-gray-300 pb-1 mb-2 tracking-wide">Education & Bio-Data</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <p className="font-extrabold text-gray-900">{education.degree} in Computer Science Engineering</p>
              <p className="text-gray-600">{education.institution} ({education.period})</p>
              <p className="text-gray-500 text-[10px]">Board: {education.board}</p>
            </div>
            <div className="space-y-1">
              <p><span className="font-bold text-gray-700">Date of Birth:</span> {personalDetails.dob}</p>
              <p><span className="font-bold text-gray-700">Languages:</span> {personalDetails.languages.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
