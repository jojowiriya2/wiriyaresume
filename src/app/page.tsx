'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, Code2, Briefcase, GraduationCap, Globe, Zap, Layers, Database, Server, Smartphone, Monitor, Cpu, FileCode, Palette, Layout, Cloud, GitBranch, Terminal, Wrench, Sparkles, Home as HomeIcon, ChevronLeft, ChevronRight, Send, MessageCircle, X, User, Bot } from 'lucide-react';
// Real technology icons
import { 
  SiHtml5, SiCss3, SiTailwindcss, SiReact, SiNextdotjs, SiThreedotjs, 
  SiJavascript, SiTypescript, SiStrapi, SiNodedotjs, SiMongodb, SiPostgresql,
  SiGit, SiGithub, SiVercel, SiNetlify, SiFigma, SiAdobephotoshop
} from 'react-icons/si';

// Import the resume data
import resumeData from '../../textforweb.json';

// Removed magnetic cursor for better performance

type TabType = 'main' | 'skills' | 'experience' | 'education' | 'languages' | 'contact';

// Function to get real technology icons
const getTechIcon = (skill: string) => {
  const skillLower = skill.toLowerCase().replace(/[^a-z]/g, '');
  
  switch (skillLower) {
    case 'html': return <SiHtml5 className="text-orange-500" />;
    case 'css': return <SiCss3 className="text-blue-500" />;
    case 'tailwindcss': return <SiTailwindcss className="text-cyan-400" />;
    case 'reactjs': return <SiReact className="text-blue-400" />;
    case 'nextjs': return <SiNextdotjs className="text-white" />;
    case 'threejs': return <SiThreedotjs className="text-white" />;
    case 'javascript': return <SiJavascript className="text-yellow-400" />;
    case 'typescript': return <SiTypescript className="text-blue-600" />;
    case 'strapi': return <SiStrapi className="text-purple-500" />;
    case 'apidevelopment': return <Server className="text-green-400" />;
    case 'fullstackdevelopment': return <Code2 className="text-yellow-400" />;
    case 'webhosting': return <SiVercel className="text-white" />;
    case 'headlesscms': return <Database className="text-blue-400" />;
    case 'blockchainsolidity': return <Cpu className="text-purple-400" />;
    default: return <Wrench className="text-gray-400" />;
  }
};

// 3D Custom Model Component
const CustomRoomModel = () => {
  const modelRef = useRef<any>();
  const { scene } = useGLTF('/Room space test.glb');

  // Continuous spinning animation (slower)
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002; // Much slower spinning
      // Optional: slight floating motion
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <primitive 
      ref={modelRef}
      object={scene.clone()} 
      scale={[3, 3, 3]} 
      position={[0, 0, 0]}
    />
  );
};

// Component for Main/Hero content
const MainContent = ({ t, language }: { t: any, language: string }) => (
  <div className="h-full flex items-center justify-center">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Profile Image */}
          <motion.div 
            className="lg:col-span-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ 
              scale: 1.05,
              rotateY: 10,
              rotateX: 5
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative transform-gpu">
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full blur-lg opacity-75"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full blur-md opacity-50"
                animate={{
                  scale: [1.1, 1, 1.1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt={t.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Main Info */}
          <div className="lg:col-span-2 text-center lg:text-left space-y-6">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-white via-yellow-200 to-amber-200 bg-clip-text text-transparent mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.name.split('').map((char: string, index: number) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1 + 0.3,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-400 mb-4 sm:mb-6 lg:mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {t.jobTitle}
            </motion.h2>
            
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {t.summary}
            </motion.p>

            {/* Contact Info */}
            <motion.div 
              className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8 lg:mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.a
                href={`mailto:${t.contactInfo.email}`}
                className="group flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-white transition-all duration-300 p-3 sm:p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 no-underline"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(234, 179, 8, 0.1)",
                  borderColor: "rgba(234, 179, 8, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-yellow-400" />
                <span className="group-hover:text-yellow-100 text-sm sm:text-base lg:text-lg">{t.contactInfo.email}</span>
              </motion.a>
              <motion.a
                href={`tel:${t.contactInfo.phone}`}
                className="group flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-white transition-all duration-300 p-3 sm:p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 no-underline"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(234, 179, 8, 0.1)",
                  borderColor: "rgba(234, 179, 8, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-yellow-400" />
                <span className="group-hover:text-yellow-100 text-sm sm:text-base lg:text-lg">{t.contactInfo.phone}</span>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Horizontal scrolling technology icons */}
        <motion.div 
          className="mt-16 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <div className="relative">
            <motion.div
              className="flex gap-8 whitespace-nowrap"
              animate={{
                x: [0, -1920] // Move from right to left
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* First set of icons */}
              <div className="flex gap-8 items-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiReact className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiNextdotjs className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiTypescript className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiJavascript className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiHtml5 className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiCss3 className="w-8 h-8 text-blue-500" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiTailwindcss className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiStrapi className="w-8 h-8 text-purple-500" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiThreedotjs className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiVercel className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiGit className="w-8 h-8 text-red-400" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiGithub className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex gap-8 items-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiReact className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiNextdotjs className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiTypescript className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiJavascript className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiHtml5 className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiCss3 className="w-8 h-8 text-blue-500" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiTailwindcss className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiStrapi className="w-8 h-8 text-purple-500" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiThreedotjs className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiVercel className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiGit className="w-8 h-8 text-red-400" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                  <SiGithub className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

// Component for Skills content
const SkillsContent = ({ t, language, getSkillValue }: { t: any, language: string, getSkillValue: (level: string) => number }) => (
  <div className="h-full py-8 pt-20">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="flex justify-center mb-4"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Code2 className="w-12 h-12 text-yellow-400" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">{t.skills}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(resumeData.technicalSkills).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.4 }
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="h-full"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-md h-full hover:bg-white/10 hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group">
                <CardHeader>
                  <CardTitle className="text-white text-xl flex items-center gap-3 group-hover:text-yellow-100 transition-colors">
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {category === 'frontendDevelopment' && (
                        <>
                          <SiReact className="w-5 h-5 text-blue-400" />
                          <SiHtml5 className="w-5 h-5 text-orange-500" />
                          <SiJavascript className="w-5 h-5 text-yellow-400" />
                        </>
                      )}
                      {category === 'backendDevelopment' && (
                        <>
                          <SiStrapi className="w-5 h-5 text-purple-500" />
                          <Server className="w-5 h-5 text-green-400" />
                          <Database className="w-5 h-5 text-blue-400" />
                        </>
                      )}
                      {category === 'otherTechnologies' && (
                        <>
                          <SiVercel className="w-5 h-5 text-white" />
                          <SiGit className="w-5 h-5 text-red-400" />
                          <Cpu className="w-5 h-5 text-purple-400" />
                        </>
                      )}
                    </motion.div>
                    {t.skillCategories[category as keyof typeof t.skillCategories] || category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(skills as Record<string, string>).map(([skill, level], skillIndex) => (
                    <div key={skill} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 text-gray-300">
                          <motion.div
                            className="w-4 h-4 flex items-center justify-center"
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          >
                            {getTechIcon(skill)}
                          </motion.div>
                          <span className="text-base">{skill}</span>
                        </div>
                        <span className="text-yellow-400 font-medium">
                          {language === 'th' && t.skillLevels ? t.skillLevels[level as keyof typeof t.skillLevels] || level : level}
                        </span>
                      </div>
                      <Progress 
                        value={getSkillValue(level as string)} 
                        className="h-3 bg-white/10 [&>div]:bg-gradient-to-r [&>div]:from-yellow-500 [&>div]:to-amber-500 [&>div]:shadow-lg [&>div]:shadow-yellow-500/50"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Component for Experience content  
const ExperienceContent = ({ t, language, activeCard, setActiveCard }: { t: any, language: string, activeCard: string | null, setActiveCard: (card: string | null) => void }) => (
  <div className="h-full py-8 pt-20">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="flex justify-center mb-4"
            animate={{ x: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Briefcase className="w-12 h-12 text-yellow-400" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">{t.experience}</h2>
        </motion.div>

        <div className="space-y-8 relative">
          <motion.div 
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 to-amber-500"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ originY: 0 }}
          />
          
          {(language === 'th' && t.experienceData ? t.experienceData : resumeData.experience).map((exp: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-16"
            >
              <motion.div 
                className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full border-4 border-slate-900"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
              />
              
              <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                      <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30 mb-2">
                        {exp.period}
                      </Badge>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{exp.position}</h3>
                      <h4 className="text-lg font-medium text-yellow-400 mb-4">{exp.company}</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp: string, idx: number) => (
                          <li key={idx} className="text-gray-300 flex items-start gap-3">
                            <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Component for Education content
const EducationContent = ({ t, language }: { t: any, language: string }) => (
  <div className="h-full py-8 pt-20 flex items-center">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="flex justify-center mb-4"
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <GraduationCap className="w-12 h-12 text-yellow-400" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">{t.education}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {(language === 'th' && t.educationData ? t.educationData : resumeData.education).map((edu: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="h-full"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-md h-full hover:bg-white/10 hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30 mb-4">
                    {edu.period}
                  </Badge>
                  <div className="mb-4">
                    <GraduationCap className="w-8 h-8 text-yellow-400 mx-auto" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{edu.institution}</h3>
                  <p className="text-lg text-yellow-400 mb-2">{edu.department}</p>
                  <p className="text-gray-300">GPA: <span className="font-semibold text-white">{edu.gpa}</span></p>
                  <Badge variant="secondary" className="mt-2">{edu.status}</Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Component for Languages content
const LanguagesContent = ({ t, language, getSkillValue }: { t: any, language: string, getSkillValue: (level: string) => number }) => (
  <div className="h-full py-8 pt-20 flex items-center">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="flex justify-center mb-4"
            animate={{ x: [-6, 6, -6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Globe className="w-12 h-12 text-yellow-400" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">{t.languages}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(language === 'th' && t.languageData ? t.languageData : resumeData.languages).map(([lang, skills], index) => (
            <motion.div
              key={lang}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-white text-xl text-center flex items-center justify-center gap-2">
                    <Globe className="w-5 h-5 text-yellow-400" />
                    {lang}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(skills as Record<string, string>).map(([skill, level], skillIndex) => (
                    <div key={skill} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 text-gray-300 capitalize">
                          <motion.div
                            animate={{ y: [-1, 1, -1] }}
                            transition={{ duration: 3 + skillIndex * 0.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            {skill.toLowerCase().includes('reading') && <FileCode className="w-4 h-4 text-blue-400" />}
                            {skill.toLowerCase().includes('writing') && <Palette className="w-4 h-4 text-green-400" />}
                            {skill.toLowerCase().includes('speaking') && <Smartphone className="w-4 h-4 text-purple-400" />}
                            {skill.toLowerCase().includes('อ่าน') && <FileCode className="w-4 h-4 text-blue-400" />}
                            {skill.toLowerCase().includes('เขียน') && <Palette className="w-4 h-4 text-green-400" />}
                            {skill.toLowerCase().includes('พูด') && <Smartphone className="w-4 h-4 text-purple-400" />}
                          </motion.div>
                          <span>{skill}</span>
                        </div>
                        <span className="text-yellow-400 font-medium">
                          {language === 'th' && t.skillLevels ? t.skillLevels[level as keyof typeof t.skillLevels] || level : level}
                        </span>
                      </div>
                      <Progress 
                        value={getSkillValue(level as string)} 
                        className="h-3 bg-white/10 [&>div]:bg-gradient-to-r [&>div]:from-yellow-500 [&>div]:to-amber-500 [&>div]:shadow-lg [&>div]:shadow-yellow-500/50"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 3D Model Section */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="h-96 w-full max-w-4xl mx-auto">
            <Suspense fallback={
              <div className="flex items-center justify-center h-full">
                <div className="text-yellow-400">Loading 3D Model...</div>
              </div>
            }>
              <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
                {/* Bright ambient lighting */}
                <ambientLight intensity={1.2} color="#ffffff" />
                
                {/* Multiple bright directional lights */}
                <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ffffff" />
                <directionalLight position={[-10, 10, 5]} intensity={2.5} color="#ffffff" />
                <directionalLight position={[0, 10, 10]} intensity={2.0} color="#eab308" />
                <directionalLight position={[0, -10, 5]} intensity={1.5} color="#f59e0b" />
                
                {/* Point lights for all-around illumination */}
                <pointLight position={[8, 8, 8]} intensity={2.0} color="#ffffff" />
                <pointLight position={[-8, 8, 8]} intensity={2.0} color="#ffffff" />
                <pointLight position={[0, 8, -8]} intensity={1.8} color="#eab308" />
                <pointLight position={[0, -8, 8]} intensity={1.5} color="#f59e0b" />
                
                {/* Additional fill lights */}
                <spotLight 
                  position={[5, 15, 0]} 
                  target-position={[0, 0, 0]}
                  angle={1.0} 
                  penumbra={0.2} 
                  intensity={3.0} 
                  color="#ffffff"
                />
                <spotLight 
                  position={[-5, 15, 0]} 
                  target-position={[0, 0, 0]}
                  angle={1.0} 
                  penumbra={0.2} 
                  intensity={3.0} 
                  color="#ffffff"
                />
                
                <CustomRoomModel />
              </Canvas>
            </Suspense>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

// Component for Contact content
const ContactContent = ({ t, language }: { t: any, language: string }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using a more reliable approach with direct email sending
      const emailContent = {
        to: 'wiriya.workth@gmail.com',
        from: formData.email,
        fromName: formData.name,
        subject: `Resume Contact: ${formData.subject}`,
        message: `
New contact from your resume website:

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from Resume Contact Form
        `.trim()
      };

      // Try multiple email services for better reliability
      let success = false;

      // Method 1: Try Formsubmit.co (free and reliable)
      try {
        const formSubmitResponse = await fetch('https://formsubmit.co/wiriya.workth@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _captcha: 'false',
            _template: 'table'
          })
        });
        
        if (formSubmitResponse.ok) {
          success = true;
        }
      } catch (error) {
        console.log('FormSubmit failed, trying alternative...');
      }

      // Method 2: Try getform.io as backup
      if (!success) {
        try {
          const getformResponse = await fetch('https://getform.io/f/awngxmza', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              subject: formData.subject,
              message: formData.message,
            })
          });
          
          if (getformResponse.ok) {
            success = true;
          }
        } catch (error) {
          console.log('Getform also failed');
        }
      }

      if (success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('All email services failed');
      }
      
    } catch (error) {
      console.error('All email sending methods failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className="h-full py-8 pt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="flex justify-center mb-4"
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Send className="w-12 h-12 text-yellow-400" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">{t.contact}</h2>
            <p className="text-gray-300 mt-4 text-lg">
              {language === 'th' ? 'ติดต่อเพื่อสนทนาเกี่ยวกับโอกาสในการทำงานร่วมกัน' : 'Get in touch to discuss opportunities'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-500">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-white font-medium">
                        {language === 'th' ? 'ชื่อ' : 'Name'} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                        placeholder={language === 'th' ? 'ชื่อของคุณ' : 'Your name'}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-white font-medium">
                        {language === 'th' ? 'อีเมล' : 'Email'} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                        placeholder={language === 'th' ? 'อีเมลของคุณ' : 'Your email'}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-white font-medium">
                      {language === 'th' ? 'หัวข้อ' : 'Subject'} *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                      placeholder={language === 'th' ? 'หัวข้อข้อความ' : 'Message subject'}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-white font-medium">
                      {language === 'th' ? 'ข้อความ' : 'Message'} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all resize-none"
                      placeholder={language === 'th' ? 'เขียนข้อความของคุณที่นี่...' : 'Write your message here...'}
                    />
                  </div>

                  <motion.div
                    className="flex justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                        />
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          {language === 'th' ? 'ส่งข้อความ' : 'Send Message'}
                        </>
                      )}
                    </Button>
                  </motion.div>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300"
                    >
                      {language === 'th' ? 'ข้อความถูกส่งเรียบร้อยแล้ว!' : 'Message sent successfully!'}
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300"
                    >
                      {language === 'th' ? 'เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง' : 'Error sending message. Please try again.'}
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Chatbot Component
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-r1-0528:free',
          messages: [
            {
              role: 'system',
              content: `You are a helpful assistant representing Wiriya Thongyut, a Full Stack Developer. Here's information about Wiriya:

ABOUT WIRIYA:
- Full Stack Developer at ExelitPro
- Graduated from Bangkok University (2023) with IT degree (GPA: 3.85)
- 5+ years experience in web development
- Location: Thailand
- Contact: wiriya.workth@gmail.com, 082-938-9944

TECHNICAL SKILLS:
Frontend: HTML, CSS, TailwindCSS (Great), ReactJS (Great), NextJS (Good), ThreeJS (Fair), JavaScript (Great), TypeScript (Good)
Backend: Strapi (Great), API Development (Good), Full Stack Development (Great)
Other: Web Hosting (Good), Headless CMS (Good), Blockchain/Solidity (Fair)

EXPERIENCE:
- 2025-Present: Full Stack Developer at ExelitPro (Next.js, Strapi CMS, web hosting, deployment)
- 2023: Frontend Developer Intern at Geek Start
- 2023: Web Application Developer at Salt Company Project (React.js, TailwindCSS, MaterialTailwind)
- 2022: Blockchain Developer - Ethereum Transfer Application (React.js, TailwindCSS, Solidity)
- 2020: Desktop Application Developer - Pawnshop Management System (C#, XAML)

WHAT WIRIYA CAN BUILD:
- Modern responsive websites using React/Next.js
- E-commerce platforms with Strapi CMS
- Corporate websites and portfolios
- Web applications with complex functionality
- API development and backend systems
- Blockchain applications (basic to intermediate)
- Desktop applications (Windows)
- Website hosting and deployment services

PRICING APPROACH:
- Project complexity and timeline dependent
- Can work with various budgets
- Offers maintenance and support services
- Experienced with both Thai and international clients

Answer questions about Wiriya's capabilities, experience, and what kind of projects he can help with. Be friendly, professional, and helpful. If asked about specific pricing, suggest contacting Wiriya directly for a detailed quote.`
            },
            ...messages,
            { role: 'user', content: userMessage }
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      
      if (data.choices?.[0]?.message?.content) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: data.choices[0].message.content 
        }]);
      } else {
        throw new Error('No response from AI');
      }
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try asking again or contact Wiriya directly at wiriya.workth@gmail.com' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-gradient-to-r from-yellow-600 to-amber-600 text-black rounded-full shadow-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </motion.button>
      </motion.div>

      {/* Chat Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 left-6 z-40 w-80 h-96 bg-slate-900/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
          >
            {/* Chat Header */}
            <div className="p-4 border-b border-white/10 bg-gradient-to-r from-yellow-600/20 to-amber-600/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Ask about Wiriya</h3>
                  <p className="text-gray-400 text-xs">What can I help you build?</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 h-64 overflow-y-auto space-y-3">
              {messages.length === 0 && (
                <div className="text-gray-400 text-sm">
                  Hi! I'm here to help you learn about Wiriya's services. Ask me anything like:
                  <br />• "Can you build an e-commerce website?"
                  <br />• "What technologies do you work with?"
                  <br />• "How much would a portfolio cost?"
                </div>
              )}
              
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-black" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] p-2 rounded-lg text-sm ${
                      message.role === 'user'
                        ? 'bg-yellow-600 text-black'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    {message.content}
                  </div>
                  {message.role === 'user' && (
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-2 justify-start">
                  <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-4 h-4 text-black" />
                  </div>
                  <div className="bg-white/10 text-white p-2 rounded-lg text-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about my services..."
                  className="flex-1 p-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 text-sm focus:border-yellow-500 focus:outline-none"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="w-8 h-8 bg-yellow-600 text-black rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'th'>('en');
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>('main');
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Optimized scroll listener
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      
      setScrollY(scrollTop);
      setScrollProgress(Math.min(scrollPercent, 1));
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mounted]);

  const content = {
    en: {
      name: resumeData.personalInfo.name,
      jobTitle: "Full Stack Developer",
      summary: "Accomplished Information Technology graduate from Bangkok University (2023) with over 5 years of comprehensive experience in full-stack web development. Currently serving as a Full Stack Developer at ExelitPro, leveraging modern technologies including Next.js and Strapi CMS to deliver enterprise-grade applications. My expertise spans the entire development lifecycle, from frontend UI design using React.js to backend API development and database management. I have successfully deployed web hosting solutions and built diverse projects including blockchain applications, responsive web applications, and desktop software solutions.",
      contactInfo: resumeData.personalInfo.contact,
      experience: "Experience",
      education: "Education", 
      skills: "Technical Skills",
      languages: "Languages",
      contact: "Contact",
      present: "Present",
      skillCategories: {
        frontend: "Frontend Development",
        backend: "Backend Development", 
        other: "Other Technologies"
      }
    },
    th: {
      name: "วิริยะ ทองยุต",
      jobTitle: "นักพัฒนาโปรแกรมเต็มรูปแบบ",
      summary: "บัณฑิตสาขาเทคโนโลยีสารสนเทศจากมหาวิทยาลัยกรุงเทพ (2566) ที่มีประสบการณ์กว่า 5 ปีในการพัฒนาเว็บแอปพลิเคชันแบบครบวงจร ปัจจุบันทำงานในตำแหน่ง Full Stack Developer ที่ ExelitPro โดยใช้เทคโนโลยีสมัยใหม่อย่าง Next.js และ Strapi CMS ความเชี่ยวชาญครอบคลุมตั้งแต่การออกแบบ Frontend UI ด้วย React.js ไปจนถึงการพัฒนา Backend API และการจัดการฐานข้อมูล มีประสบการณ์ในการสร้างโปรเจกต์หลากหลายประเภท รวมถึงแอปพลิเคชันบล็อกเชน เว็บแอปพลิเคชันที่ตอบสนอง และซอฟต์แวร์เดสก์ท็อป",
      contactInfo: resumeData.personalInfo.contact,
      experience: "ประสบการณ์การทำงาน",
      education: "การศึกษา",
      skills: "ทักษะทางเทคนิค",
      languages: "ทักษะภาษา",
      contact: "ติดต่อ",
      present: "ปัจจุบัน",
      skillCategories: {
        frontendDevelopment: "การพัฒนา Frontend",
        backendDevelopment: "การพัฒนา Backend",
        otherTechnologies: "เทคโนโลยีอื่นๆ"
      },
      skillLevels: {
        "Great": "ดีมาก",
        "Good": "ดี", 
        "Fair": "พอใช้"
      },
      experienceData: [
        {
          period: "2568 - ปัจจุบัน",
          position: "นักพัฒนาโปรแกรมเต็มรูปแบบ",
          company: "ExelitPro",
          responsibilities: [
            "พัฒนาเว็บแอปพลิเคชันแบบครบวงจรโดยใช้ Next.js และ Strapi CMS",
            "สร้าง Frontend Interface ที่ปรับขนาดได้และ Backend API ที่แข็งแกร่ง",
            "จัดการการโฮสต์เว็บและกระบวนการ Deployment",
            "ใช้แนวปฏิบัติการพัฒนาสมัยใหม่และหลักการออกแบบที่ตอบสนอง"
          ]
        },
        {
          period: "2566",
          position: "นักพัฒนา Frontend ฝึกงาน",
          company: "Geek Start",
          responsibilities: [
            "พัฒนา User Interface ที่ตอบสนองโดยใช้เทคโนโลยี Frontend สมัยใหม่",
            "ทำงานร่วมกับทีมข้ามสายงานในโครงการลูกค้า",
            "ได้รับประสบการณ์จริงในขั้นตอนการพัฒนาแบบมืออาชีพและกระบวนการ Code Review"
          ]
        },
        {
          period: "2566",
          position: "นักพัฒนาเว็บแอปพลิเคชัน",
          company: "โครงการบริษัท Salt",
          responsibilities: [
            "สร้างเว็บแอปพลิเคชันที่ครอบคลุมโดยใช้ React.js, TailwindCSS และ MaterialTailwind",
            "ใช้รูปแบบการออกแบบ UI/UX สมัยใหม่และเลย์เอาต์ที่ตอบสนอง"
          ]
        },
        {
          period: "2565",
          position: "นักพัฒนาบล็อกเชน",
          company: "แอปพลิเคชันโอน Ethereum",
          responsibilities: [
            "พัฒนาเว็บแอปพลิเคชันแบบกระจายสำหรับการโอน Ethereum",
            "ใช้ React.js, TailwindCSS และ Solidity สำหรับการพัฒนา Frontend และ Smart Contract"
          ]
        },
        {
          period: "2563",
          position: "นักพัฒนาแอปพลิเคชันเดสก์ท็อป",
          company: "ระบบจัดการโรงรับจำนำ",
          responsibilities: [
            "สร้างแอปพลิเคชัน Windows โดยใช้ C# และ XAML",
            "ใช้ Business Logic และ User Interface สำหรับการดำเนินงานโรงรับจำนำ"
          ]
        }
      ],
      educationData: [
        {
          period: "2562 - 2566",
          institution: "มหาวิทยาลัยกรุงเทพ",
          department: "เทคโนโลยีสารสนเทศ",
          gpa: "3.85",
          status: "จบการศึกษา"
        },
        {
          period: "2559 - 2561", 
          institution: "วิทยาลัยเทคโนโลยีบริหารธุรกิจไทย-นิปปอน",
          department: "หลักสูตรภาษาอังกฤษ",
          gpa: "3.88",
          status: "จบการศึกษา"
        }
      ],
      languageData: {
        "อังกฤษ": {
          "อ่าน": "Great",
          "เขียน": "Good",
          "พูด": "Great"
        },
        "ไทย": {
          "อ่าน": "Good", 
          "เขียน": "Good",
          "พูด": "Good"
        }
      }
    }
  };

  const t = content[language];

  // Tab configuration
  const tabs = [
    { id: 'main' as TabType, label: language === 'th' ? 'หลัก' : 'Main', icon: HomeIcon },
    { id: 'skills' as TabType, label: language === 'th' ? 'ทักษะ' : 'Technical Skills', icon: Code2 },
    { id: 'experience' as TabType, label: language === 'th' ? 'ประสบการณ์' : 'Experience', icon: Briefcase },
    { id: 'education' as TabType, label: language === 'th' ? 'การศึกษา' : 'Education', icon: GraduationCap },
    { id: 'languages' as TabType, label: language === 'th' ? 'ภาษา' : 'Languages', icon: Globe },
    { id: 'contact' as TabType, label: language === 'th' ? 'ติดต่อ' : 'Contact', icon: Send },
  ];

  const handleTabChange = (newTab: TabType) => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    const newIndex = tabs.findIndex(tab => tab.id === newTab);
    
    setSlideDirection(newIndex > currentIndex ? 'right' : 'left');
    setActiveTab(newTab);
  };

  const getSkillValue = (level: string) => {
    switch (level) {
      case 'Great': return 90;
      case 'Good': return 75;
      case 'Fair': return 60;
      default: return 50;
    }
  };

  // Get tab progress based on current tab
  const getTabProgress = () => {
    switch (activeTab) {
      case 'main': return 16.67; // 1/6
      case 'skills': return 33.33; // 2/6
      case 'experience': return 50; // 3/6
      case 'education': return 66.67; // 4/6
      case 'languages': return 83.33; // 5/6
      case 'contact': return 100; // 6/6
      default: return 16.67;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* Optimized particle system */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 2 + 1;
          const opacity = Math.random() * 0.15 + 0.05;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-yellow-400/20"
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-30, 30, -30],
                opacity: [opacity, opacity * 0.5, opacity],
              }}
              transition={{
                duration: Math.random() * 10 + 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        })}
      </div>

      {/* Simplified background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-amber-500/5 pointer-events-none" />

      {/* Enhanced tab progress indicator with glow */}
      {mounted && (
        <>
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-600 to-amber-600 z-50 origin-left shadow-lg shadow-yellow-500/50"
            animate={{ scaleX: getTabProgress() / 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          <motion.div
            className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-300 to-amber-300 z-50 origin-left blur-sm"
            animate={{ scaleX: getTabProgress() / 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </>
      )}

      {/* Language Switcher - Responsive */}
      <div className="fixed top-16 right-4 sm:top-6 sm:right-6 z-50 flex gap-1 sm:gap-2">
        <Button
          variant={language === 'en' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setLanguage('en')}
          className="backdrop-blur-md bg-white/10 border-white/20 hover:bg-yellow-500/20 hover:border-yellow-400/40 text-xs sm:text-sm px-2 sm:px-3"
        >
          EN
        </Button>
        <Button
          variant={language === 'th' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setLanguage('th')}
          className="backdrop-blur-md bg-white/10 border-white/20 hover:bg-yellow-500/20 hover:border-yellow-400/40 text-xs sm:text-sm px-2 sm:px-3"
        >
          TH
        </Button>
      </div>

      {/* Tab Navigation - Responsive */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 sm:top-6 z-50">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center sm:justify-start gap-0.5 sm:gap-1 p-1 sm:p-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-full overflow-x-auto scrollbar-hide"
        >
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <motion.div
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-2 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-yellow-600 to-amber-600 text-black shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-4 h-4 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium hidden sm:inline">{tab.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Tab Content Container */}
      <div className="relative z-10 h-screen pt-20 sm:pt-24 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{
              x: slideDirection === 'right' ? '100%' : '-100%',
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 1
            }}
            exit={{
              x: slideDirection === 'right' ? '-100%' : '100%',
              opacity: 0
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }}
            className="absolute inset-0 w-full h-full overflow-y-auto"
          >
            {activeTab === 'main' && (
              <MainContent t={t} language={language} />
            )}
            {activeTab === 'skills' && (
              <SkillsContent t={t} language={language} getSkillValue={getSkillValue} />
            )}
            {activeTab === 'experience' && (
              <ExperienceContent t={t} language={language} activeCard={activeCard} setActiveCard={setActiveCard} />
            )}
            {activeTab === 'education' && (
              <EducationContent t={t} language={language} />
            )}
            {activeTab === 'languages' && (
              <LanguagesContent t={t} language={language} getSkillValue={getSkillValue} />
            )}
            {activeTab === 'contact' && (
              <ContactContent t={t} language={language} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced floating scroll to top button */}
      {mounted && scrollY > 500 && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-14 h-14 bg-gradient-to-r from-yellow-600 to-amber-600 text-black rounded-full shadow-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 flex items-center justify-center group overflow-hidden cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ 
              scale: 1.15,
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.9,
              transition: { duration: 0.3 }
            }}
          >
            <motion.span
              className="text-lg font-bold relative z-10"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              ↑
            </motion.span>
            
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <motion.circle
                cx="50%"
                cy="50%"
                r="26"
                fill="transparent"
                stroke="rgba(0,0,0,0.2)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: getTabProgress() / 100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
