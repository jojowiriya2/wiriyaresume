'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, Code2, Briefcase, GraduationCap, Globe, Zap, Layers, Database, Server, Smartphone, Monitor, Cpu, FileCode, Palette, Layout, Cloud, GitBranch, Terminal, Wrench, Sparkles } from 'lucide-react';

// Import the resume data
import resumeData from '../../textforweb.json';

// Removed magnetic cursor for better performance

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'th'>('en');
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    
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
  }, []);

  const content = {
    en: {
      name: resumeData.personalInfo.name,
      jobTitle: "Full Stack Developer",
      summary: "Accomplished Information Technology graduate from Bangkok University (2023) with over 5 years of comprehensive experience in full-stack web development. Currently serving as a Full Stack Developer at ExelitPro, leveraging modern technologies including Next.js and Strapi CMS to deliver enterprise-grade applications. My expertise spans the entire development lifecycle, from frontend UI design using React.js to backend API development and database management. I have successfully deployed web hosting solutions and built diverse projects including blockchain applications, responsive web applications, and desktop software solutions.",
      contact: resumeData.personalInfo.contact,
      experience: "Experience",
      education: "Education", 
      skills: "Technical Skills",
      languages: "Languages",
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
      contact: resumeData.personalInfo.contact,
      experience: "ประสบการณ์การทำงาน",
      education: "การศึกษา",
      skills: "ทักษะทางเทคนิค",
      languages: "ทักษะภาษา",
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

  const getSkillValue = (level: string) => {
    switch (level) {
      case 'Great': return 90;
      case 'Good': return 75;
      case 'Fair': return 60;
      default: return 50;
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative">
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

      {/* Enhanced scroll progress indicator with glow */}
      {mounted && (
        <>
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-600 to-amber-600 z-50 origin-left shadow-lg shadow-yellow-500/50"
            animate={{ scaleX: scrollProgress }}
            transition={{ type: "tween", ease: "linear" }}
          />
          <motion.div
            className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-300 to-amber-300 z-50 origin-left blur-sm"
            animate={{ scaleX: scrollProgress }}
            transition={{ type: "tween", ease: "linear" }}
          />
        </>
      )}

      {/* Enhanced Language Switcher with magnetic effect */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-6 right-6 z-50 flex gap-2"
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.5 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={language === 'en' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setLanguage('en')}
            className="backdrop-blur-md bg-white/10 border-white/20 hover:bg-yellow-500/20 hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
          >
            <motion.span
              animate={language === 'en' ? { color: '#000' } : { color: '#fff' }}
              transition={{ duration: 0.3 }}
            >
              EN
            </motion.span>
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ 
            scale: 1.1,
            rotate: [0, 5, -5, 0],
            transition: { duration: 0.5 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={language === 'th' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setLanguage('th')}
            className="backdrop-blur-md bg-white/10 border-white/20 hover:bg-yellow-500/20 hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
          >
            <motion.span
              animate={language === 'th' ? { color: '#000' } : { color: '#fff' }}
              transition={{ duration: 0.3 }}
            >
              TH
            </motion.span>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="pt-16 sm:pt-20 pb-12 sm:pb-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center">
                {/* Enhanced Profile Image with 3D effects */}
                <motion.div 
                  className="lg:col-span-1 flex justify-center perspective-1000"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                    rotateX: 5
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
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
                    <motion.div 
                      className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl"
                      whileHover={{
                        boxShadow: "0 25px 50px -12px rgba(234, 179, 8, 0.5)",
                        scale: 1.02
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src="/profile.jpg"
                        alt={t.name}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                        priority
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Main Info */}
                <div className="lg:col-span-2 text-center lg:text-left space-y-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={language}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.h1 
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-white via-yellow-200 to-amber-200 bg-clip-text text-transparent mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                        }}
                        transition={{ 
                          opacity: { duration: 0.8 },
                          y: { duration: 0.8 },
                          backgroundPosition: { duration: 5, repeat: Infinity, ease: "linear" }
                        }}
                        whileHover={{
                          scale: 1.02,
                          textShadow: "0 0 20px rgba(234, 179, 8, 0.5)"
                        }}
                      >
                        {t.name.split('').map((char, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              delay: index * 0.1,
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
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-400 mb-6"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        whileHover={{
                          scale: 1.05,
                          color: "#fbbf24",
                          textShadow: "0 0 15px rgba(251, 191, 36, 0.5)"
                        }}
                      >
                        <motion.span
                          animate={{
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {t.jobTitle}
                        </motion.span>
                      </motion.h2>
                      <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">
                        {t.summary}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  {/* Enhanced Contact Info with magnetic effects */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 mt-8">
                    <motion.a
                      href={`mailto:${t.contact.email}`}
                      className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 p-3 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(234, 179, 8, 0.1)",
                        borderColor: "rgba(234, 179, 8, 0.3)",
                        boxShadow: "0 10px 25px -5px rgba(234, 179, 8, 0.2)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Mail className="w-5 h-5 group-hover:text-yellow-400" />
                      </motion.div>
                      <span className="group-hover:text-yellow-100">{t.contact.email}</span>
                    </motion.a>
                    <motion.a
                      href={`tel:${t.contact.phone}`}
                      className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 p-3 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(234, 179, 8, 0.1)",
                        borderColor: "rgba(234, 179, 8, 0.3)",
                        boxShadow: "0 10px 25px -5px rgba(234, 179, 8, 0.2)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.5 }}
                    >
                      <motion.div
                        whileHover={{ 
                          rotate: [0, -10, 10, 0],
                          scale: 1.2
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Phone className="w-5 h-5 group-hover:text-yellow-400" />
                      </motion.div>
                      <span className="group-hover:text-yellow-100">{t.contact.phone}</span>
                    </motion.a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section variants={itemVariants} className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-8 sm:mb-10 md:mb-12"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex justify-center mb-4"
                  animate={{
                    y: [-5, 5, -5]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Code2 className="w-8 h-8 md:w-10 md:h-10 text-yellow-400" />
                </motion.div>
                <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {t.skills}
                </motion.h2>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {Object.entries(resumeData.technicalSkills).map(([category, skills], categoryIndex) => (
                  <motion.div
                    key={category}
                    variants={itemVariants}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 30 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 5,
                        rotateX: 5,
                        transition: { duration: 0.4 }
                      }}
                      className="h-full"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <Card className="bg-white/5 border-white/10 backdrop-blur-md h-full hover:bg-white/10 hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group">
                        <CardHeader className="relative overflow-hidden">
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          />
                          <CardTitle className="text-white text-lg sm:text-xl relative z-10 group-hover:text-yellow-100 transition-colors flex items-center gap-2">
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.2 }}
                              transition={{ duration: 0.5 }}
                              className="flex items-center gap-1"
                            >
                              {/* Dynamic icons based on category */}
                              {category === 'frontendDevelopment' && (
                                <motion.div 
                                  className="flex items-center gap-1"
                                  animate={{
                                    x: [-2, 2, -2],
                                    rotate: [0, 5, -5, 0]
                                  }}
                                  transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  <Monitor className="w-4 h-4 text-yellow-400" />
                                  <Palette className="w-4 h-4 text-yellow-500" />
                                  <Layout className="w-4 h-4 text-amber-400" />
                                </motion.div>
                              )}
                              {category === 'backendDevelopment' && (
                                <motion.div 
                                  className="flex items-center gap-1"
                                  animate={{
                                    y: [-2, 2, -2],
                                    scale: [1, 1.05, 1]
                                  }}
                                  transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  <Server className="w-4 h-4 text-yellow-400" />
                                  <Database className="w-4 h-4 text-yellow-500" />
                                  <Cpu className="w-4 h-4 text-amber-400" />
                                </motion.div>
                              )}
                              {category === 'otherTechnologies' && (
                                <motion.div 
                                  className="flex items-center gap-1"
                                  animate={{
                                    rotate: [0, 10, -10, 0],
                                    x: [-1, 1, -1]
                                  }}
                                  transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  <Cloud className="w-4 h-4 text-yellow-400" />
                                  <GitBranch className="w-4 h-4 text-yellow-500" />
                                  <Terminal className="w-4 h-4 text-amber-400" />
                                </motion.div>
                              )}
                            </motion.div>
                            {t.skillCategories[category as keyof typeof t.skillCategories] || category}
                          </CardTitle>
                        </CardHeader>
                      <CardContent className="space-y-4">
                        {Object.entries(skills).map(([skill, level], skillIndex) => (
                          <motion.div 
                            key={skill} 
                            className="space-y-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1,
                              duration: 0.5 
                            }}
                          >
                            <div className="flex justify-between items-center text-sm">
                              <motion.div 
                                className="flex items-center gap-2 text-gray-300"
                                whileHover={{ color: "#fbbf24", scale: 1.05 }}
                              >
                                {/* Skill-specific icons */}
                                <motion.div
                                  animate={{
                                    rotate: [0, 360]
                                  }}
                                  transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear"
                                  }}
                                >
                                  {skill.toLowerCase().includes('html') && <FileCode className="w-3 h-3 text-orange-400" />}
                                  {skill.toLowerCase().includes('css') && <Palette className="w-3 h-3 text-blue-400" />}
                                  {skill.toLowerCase().includes('tailwind') && <Layers className="w-3 h-3 text-cyan-400" />}
                                  {skill.toLowerCase().includes('react') && <Zap className="w-3 h-3 text-blue-500" />}
                                  {skill.toLowerCase().includes('next') && <Monitor className="w-3 h-3 text-gray-900" />}
                                  {skill.toLowerCase().includes('three') && <Sparkles className="w-3 h-3 text-purple-400" />}
                                  {skill.toLowerCase().includes('javascript') && <FileCode className="w-3 h-3 text-yellow-500" />}
                                  {skill.toLowerCase().includes('typescript') && <FileCode className="w-3 h-3 text-blue-600" />}
                                  {skill.toLowerCase().includes('strapi') && <Server className="w-3 h-3 text-purple-500" />}
                                  {skill.toLowerCase().includes('api') && <Database className="w-3 h-3 text-green-400" />}
                                  {skill.toLowerCase().includes('fullstack') && <Layers className="w-3 h-3 text-indigo-400" />}
                                  {skill.toLowerCase().includes('hosting') && <Cloud className="w-3 h-3 text-sky-400" />}
                                  {skill.toLowerCase().includes('headless') && <Cpu className="w-3 h-3 text-pink-400" />}
                                  {skill.toLowerCase().includes('blockchain') && <GitBranch className="w-3 h-3 text-amber-500" />}
                                  {!skill.toLowerCase().match(/(html|css|tailwind|react|next|three|javascript|typescript|strapi|api|fullstack|hosting|headless|blockchain)/) && <Wrench className="w-3 h-3 text-gray-400" />}
                                </motion.div>
                                <span>{skill}</span>
                              </motion.div>
                              <motion.span 
                                className="text-yellow-400"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                              >
                                {language === 'th' && t.skillLevels ? t.skillLevels[level as keyof typeof t.skillLevels] || level : level}
                              </motion.span>
                            </div>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              viewport={{ once: true }}
                              transition={{ 
                                delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.2,
                                duration: 0.8,
                                ease: "easeOut"
                              }}
                            >
                              <Progress 
                                value={getSkillValue(level as string)} 
                                className="h-3 bg-white/10 [&>div]:bg-gradient-to-r [&>div]:from-yellow-500 [&>div]:to-amber-500 [&>div]:shadow-lg [&>div]:shadow-yellow-500/50 overflow-hidden"
                              />
                            </motion.div>
                          </motion.div>
                        ))}
                      </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section className="py-8 sm:py-12 md:py-16 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-8 sm:mb-10 md:mb-12"
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div
                  className="flex justify-center mb-4"
                  animate={{
                    x: [-20, 20, -20],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-yellow-400" />
                </motion.div>
                <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {t.experience}
                </motion.h2>
              </motion.div>
              
              <div className="space-y-8 relative">
                {/* Timeline line */}
                <motion.div 
                  className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 to-amber-500"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                  style={{ originY: 0 }}
                />
                
                {(language === 'th' && t.experienceData ? t.experienceData : resumeData.experience).map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -100, rotateY: -15 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.2,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative pl-16"
                  >
                    {/* Timeline dot */}
                    <motion.div 
                      className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full border-4 border-slate-900"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                      viewport={{ once: true }}
                    />
                    
                    <motion.div
                      className="group cursor-pointer"
                      whileHover={{ 
                        scale: 1.02, 
                        rotateX: 2, 
                        rotateY: 2,
                        transition: { duration: 0.3 }
                      }}
                      onHoverStart={() => setActiveCard(`exp-${index}`)}
                      onHoverEnd={() => setActiveCard(null)}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20 relative overflow-hidden">
                        {/* Glowing hover effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={false}
                          animate={{
                            background: activeCard === `exp-${index}` 
                              ? "linear-gradient(45deg, rgba(234, 179, 8, 0.1), rgba(245, 158, 11, 0.1))"
                              : "linear-gradient(45deg, transparent, transparent)"
                          }}
                        />
                        
                        <CardContent className="p-8 relative z-10">
                          <div className="grid md:grid-cols-4 gap-6">
                            <div className="md:col-span-1">
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.2 + 0.3 }}
                                viewport={{ once: true }}
                                whileHover={{ 
                                  scale: 1.1,
                                  rotate: [0, -5, 5, 0],
                                  transition: { duration: 0.5 }
                                }}
                              >
                                <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30 mb-2 shadow-lg shadow-yellow-500/20">
                                  {exp.period}
                                </Badge>
                              </motion.div>
                              
                              {/* Interactive preview icon */}
                              <motion.div
                                className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                whileHover={{ scale: 1.2, rotate: 180 }}
                              >
                                <Briefcase className="w-6 h-6 text-yellow-400" />
                              </motion.div>
                            </div>
                            <div className="md:col-span-3">
                              <motion.h3 
                                className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-yellow-100 transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 + 0.4 }}
                                viewport={{ once: true }}
                                whileHover={{ 
                                  scale: 1.02,
                                  textShadow: "0 0 10px rgba(234, 179, 8, 0.5)"
                                }}
                              >
                                {exp.position}
                              </motion.h3>
                              <motion.h4 
                                className="text-base sm:text-lg font-medium text-yellow-400 mb-4 group-hover:text-yellow-300 transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 + 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ 
                                  scale: 1.05,
                                  letterSpacing: "0.5px"
                                }}
                              >
                                {exp.company}
                              </motion.h4>
                              <ul className="space-y-2">
                                {exp.responsibilities.map((resp, idx) => (
                                  <motion.li 
                                    key={idx} 
                                    className="text-sm sm:text-base text-gray-300 flex items-start gap-3 group/item hover:text-gray-100 transition-colors"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2 + 0.6 + idx * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                                  >
                                    <motion.span 
                                      className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-yellow-300 group-hover/item:shadow-lg group-hover/item:shadow-yellow-400/50 transition-all"
                                      initial={{ scale: 0 }}
                                      whileInView={{ scale: 1 }}
                                      transition={{ delay: index * 0.2 + 0.7 + idx * 0.1 }}
                                      viewport={{ once: true }}
                                      whileHover={{ 
                                        scale: 1.5,
                                        rotate: 180,
                                        transition: { duration: 0.3 }
                                      }}
                                    />
                                    <motion.span
                                      whileHover={{ 
                                        color: "#fbbf24",
                                        transition: { duration: 0.2 }
                                      }}
                                    >
                                      {resp}
                                    </motion.span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>


        {/* Education Section */}
        <motion.section variants={itemVariants} className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-8 sm:mb-10 md:mb-12"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex justify-center mb-4"
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-yellow-400" />
                </motion.div>
                <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {t.education}
                </motion.h2>
              </motion.div>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {(language === 'th' && t.educationData ? t.educationData : resumeData.education).map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 10,
                        transition: { duration: 0.4 }
                      }}
                      className="h-full group"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <Card className="bg-white/5 border-white/10 backdrop-blur-md h-full hover:bg-white/10 hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 relative overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <CardContent className="p-8 text-center relative z-10">
                          <motion.div
                            whileHover={{ 
                              scale: 1.1,
                              rotate: [0, -5, 5, 0],
                              transition: { duration: 0.5 }
                            }}
                          >
                            <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30 mb-4 shadow-lg shadow-yellow-500/20">
                              {edu.period}
                            </Badge>
                          </motion.div>
                          
                          <motion.div
                            className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ scale: 1.2, rotate: 180 }}
                          >
                            <GraduationCap className="w-8 h-8 text-yellow-400 mx-auto" />
                          </motion.div>
                          
                          <motion.h3 
                            className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-yellow-100 transition-colors"
                            whileHover={{ 
                              scale: 1.02,
                              textShadow: "0 0 10px rgba(234, 179, 8, 0.5)"
                            }}
                          >
                            {edu.institution}
                          </motion.h3>
                          <motion.p 
                            className="text-base sm:text-lg text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            {edu.department}
                          </motion.p>
                          <motion.p 
                            className="text-gray-300 group-hover:text-gray-100 transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            GPA: <motion.span 
                              className="font-semibold text-white"
                              whileHover={{ 
                                color: "#fbbf24",
                                textShadow: "0 0 5px rgba(234, 179, 8, 0.5)"
                              }}
                            >
                              {edu.gpa}
                            </motion.span>
                          </motion.p>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge variant="secondary" className="mt-2">{edu.status}</Badge>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Languages Section */}
        <motion.section variants={itemVariants} className="py-16 pb-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-8 sm:mb-10 md:mb-12"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex justify-center mb-4"
                  animate={{
                    x: [-15, 15, -15],
                    y: [-5, 5, -5],
                    rotate: [0, -8, 8, 0]
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Globe className="w-8 h-8 md:w-10 md:h-10 text-yellow-400" />
                </motion.div>
                <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {t.languages}
                </motion.h2>
              </motion.div>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {Object.entries(language === 'th' && t.languageData ? t.languageData : resumeData.languages).map(([lang, skills], index) => (
                  <motion.div
                    key={lang}
                    variants={itemVariants}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: index % 2 === 0 ? 10 : -10,
                        transition: { duration: 0.4 }
                      }}
                      className="group"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 relative overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <CardHeader className="relative z-10">
                          <CardTitle className="text-white text-lg sm:text-xl text-center group-hover:text-yellow-100 transition-colors flex items-center justify-center gap-2">
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.2 }}
                              transition={{ duration: 0.5 }}
                              className="flex items-center gap-2"
                            >
                              <Globe className="w-5 h-5 text-yellow-400" />
                              {/* Language-specific icons */}
                              {lang.toLowerCase().includes('english') && (
                                <motion.div
                                  animate={{ rotate: [0, 10, -10, 0] }}
                                  transition={{ duration: 3, repeat: Infinity }}
                                >
                                  <FileCode className="w-4 h-4 text-blue-400" />
                                </motion.div>
                              )}
                              {(lang.toLowerCase().includes('thai') || lang.toLowerCase().includes('ไทย')) && (
                                <motion.div
                                  animate={{ scale: [1, 1.1, 1] }}
                                  transition={{ duration: 2.5, repeat: Infinity }}
                                >
                                  <Sparkles className="w-4 h-4 text-purple-400" />
                                </motion.div>
                              )}
                            </motion.div>
                            {lang}
                          </CardTitle>
                        </CardHeader>
                      <CardContent className="space-y-4">
                        {Object.entries(skills).map(([skill, level], skillIndex) => (
                          <motion.div 
                            key={skill} 
                            className="space-y-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                              delay: index * 0.2 + skillIndex * 0.1,
                              duration: 0.5 
                            }}
                          >
                            <div className="flex justify-between items-center text-sm">
                              <motion.div 
                                className="flex items-center gap-2 text-gray-300 capitalize"
                                whileHover={{ color: "#fbbf24", scale: 1.05 }}
                              >
                                {/* Language skill icons */}
                                <motion.div
                                  animate={{
                                    y: [-1, 1, -1],
                                    rotate: [0, 5, -5, 0]
                                  }}
                                  transition={{
                                    duration: 3 + skillIndex * 0.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  {skill.toLowerCase().includes('reading') && <FileCode className="w-3 h-3 text-blue-400" />}
                                  {skill.toLowerCase().includes('writing') && <Palette className="w-3 h-3 text-green-400" />}
                                  {skill.toLowerCase().includes('speaking') && <Smartphone className="w-3 h-3 text-purple-400" />}
                                  {skill.toLowerCase().includes('อ่าน') && <FileCode className="w-3 h-3 text-blue-400" />}
                                  {skill.toLowerCase().includes('เขียน') && <Palette className="w-3 h-3 text-green-400" />}
                                  {skill.toLowerCase().includes('พูด') && <Smartphone className="w-3 h-3 text-purple-400" />}
                                </motion.div>
                                <span>{skill}</span>
                              </motion.div>
                              <motion.span 
                                className="text-yellow-400"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: index * 0.2 + skillIndex * 0.1 + 0.3 }}
                              >
                                {language === 'th' && t.skillLevels ? t.skillLevels[level as keyof typeof t.skillLevels] || level : level}
                              </motion.span>
                            </div>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              viewport={{ once: true }}
                              transition={{ 
                                delay: index * 0.2 + skillIndex * 0.1 + 0.2,
                                duration: 0.8,
                                ease: "easeOut"
                              }}
                            >
                              <Progress 
                                value={getSkillValue(level as string)} 
                                className="h-3 bg-white/10 [&>div]:bg-gradient-to-r [&>div]:from-yellow-500 [&>div]:to-amber-500 [&>div]:shadow-lg [&>div]:shadow-yellow-500/50 overflow-hidden"
                              />
                            </motion.div>
                          </motion.div>
                        ))}
                      </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>

      {/* Enhanced floating scroll to top button */}
      {mounted && scrollY > 500 && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.button
            className="relative w-14 h-14 bg-gradient-to-r from-yellow-600 to-amber-600 text-black rounded-full shadow-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 flex items-center justify-center group overflow-hidden"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ 
              scale: 1.15,
              rotate: [0, -10, 10, 0],
              transition: { 
                scale: { duration: 0.2 },
                rotate: { duration: 0.5, ease: "easeInOut" }
              }
            }}
            whileTap={{ 
              scale: 0.9,
              rotate: 360,
              transition: { duration: 0.3 }
            }}
          >
            {/* Animated background pulse */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-amber-400 opacity-0 group-hover:opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Arrow with bounce animation */}
            <motion.span
              className="text-lg font-bold relative z-10"
              animate={{
                y: [0, -2, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ↑
            </motion.span>
            
            {/* Circular progress indicator */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <motion.circle
                cx="50%"
                cy="50%"
                r="26"
                fill="transparent"
                stroke="rgba(0,0,0,0.2)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: scrollProgress }}
                transition={{ duration: 0.1 }}
              />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}