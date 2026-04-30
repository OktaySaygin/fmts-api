'use client';
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { SparklesText } from '@/components/magicui/sparkles-text';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { Linkedin, Twitter, Github, Mail, Users, Code, Palette, Settings, Smartphone, Database, Shield, Zap, Brain, Globe } from 'lucide-react';

const OurTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredMember, setHoveredMember] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const description = 'Başarımızın arkasındaki güç: Yetenekli, tutkulu ve deneyimli ekibimiz. Her biri kendi alanında uzman olan ekip üyelerimizle, projelerinizi hayata geçiriyoruz.';

  const departments = [
    { id: 'all', label: 'Tüm Ekip', icon: <Users className='h-5 w-5' /> },
    { id: 'development', label: 'Yazılım', icon: <Code className='h-5 w-5' /> },
    { id: 'design', label: 'Tasarım', icon: <Palette className='h-5 w-5' /> },
    { id: 'management', label: 'Yönetim', icon: <Settings className='h-5 w-5' /> },
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Mehmet Yılmaz',
      position: 'Kurucu & CEO',
      department: 'management',
      bio: "Teknoloji ve inovasyona olan tutkusuyla Codever'ı kurdu. 10+ yıllık sektör deneyimi.",
      avatar: '👨‍💼',
      skills: ['Liderlik', 'Strateji', 'İnovasyon', 'İş Geliştirme'],
      gradient: 'from-blue-500 to-purple-500',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'mehmet@codever.com',
      },
      achievements: ['Forbes 30 Under 30', 'TechCrunch Startup Mentor', 'TEDx Speaker'],
    },
    {
      id: 2,
      name: 'Ayşe Kaya',
      position: 'CTO & Co-Founder',
      department: 'development',
      bio: 'Full-stack geliştirici ve mimarlık uzmanı. Teknik ekibin lideri.',
      avatar: '👩‍💻',
      skills: ['React', 'Node.js', 'AWS', 'Mikroservisler'],
      gradient: 'from-green-500 to-cyan-500',
      social: {
        linkedin: '#',
        github: '#',
        email: 'ayse@codever.com',
      },
      achievements: ['AWS Certified Solutions Architect', 'Google Developer Expert', 'Open Source Contributor'],
    },
    {
      id: 3,
      name: 'Can Demir',
      position: 'Lead Frontend Developer',
      department: 'development',
      bio: 'Modern web teknolojileri ve kullanıcı deneyimi konusunda uzman.',
      avatar: '👨‍🎨',
      skills: ['React', 'TypeScript', 'Next.js', 'UX/UI'],
      gradient: 'from-purple-500 to-pink-500',
      social: {
        linkedin: '#',
        github: '#',
        email: 'can@codever.com',
      },
      achievements: ['React Conference Speaker', 'Hackathon Winner', 'Frontend Mentor'],
    },
    {
      id: 4,
      name: 'Elif Şahin',
      position: 'UI/UX Designer',
      department: 'design',
      bio: 'Kullanıcı odaklı tasarım ve yaratıcı çözümler konusunda uzman.',
      avatar: '👩‍🎨',
      skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
      gradient: 'from-pink-500 to-red-500',
      social: {
        linkedin: '#',
        email: 'elif@codever.com',
      },
      achievements: ['Design Award Winner', 'UX Research Specialist', 'Creative Director'],
    },
    {
      id: 5,
      name: 'Ahmet Özkan',
      position: 'Backend Developer',
      department: 'development',
      bio: 'Sunucu tarafı geliştirme ve veritabanı optimizasyonu uzmanı.',
      avatar: '👨‍🔧',
      skills: ['Python', 'Django', 'PostgreSQL', 'Docker'],
      gradient: 'from-orange-500 to-yellow-500',
      social: {
        linkedin: '#',
        github: '#',
        email: 'ahmet@codever.com',
      },
      achievements: ['Python Conference Speaker', 'Database Optimization Expert', 'DevOps Specialist'],
    },
    {
      id: 6,
      name: 'Zeynep Aydın',
      position: 'Mobile Developer',
      department: 'development',
      bio: 'iOS ve Android uygulama geliştirme konusunda uzman.',
      avatar: '👩‍📱',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      gradient: 'from-teal-500 to-blue-500',
      social: {
        linkedin: '#',
        github: '#',
        email: 'zeynep@codever.com',
      },
      achievements: ['Google Play Featured Developer', 'Mobile UX Expert', 'Cross-platform Specialist'],
    },
    {
      id: 7,
      name: 'Burak Yıldız',
      position: 'DevOps Engineer',
      department: 'development',
      bio: 'Altyapı, güvenlik ve sürekli entegrasyon konularında uzman.',
      avatar: '👨‍🔧',
      skills: ['AWS', 'Kubernetes', 'Jenkins', 'Security'],
      gradient: 'from-indigo-500 to-purple-500',
      social: {
        linkedin: '#',
        github: '#',
        email: 'burak@codever.com',
      },
      achievements: ['AWS Certified DevOps Professional', 'Kubernetes Expert', 'Security Specialist'],
    },
    {
      id: 8,
      name: 'Selin Çelik',
      position: 'Project Manager',
      department: 'management',
      bio: 'Proje yönetimi ve müşteri ilişkileri konusunda deneyimli.',
      avatar: '👩‍💼',
      skills: ['Scrum', 'Agile', 'Project Management', 'Client Relations'],
      gradient: 'from-emerald-500 to-teal-500',
      social: {
        linkedin: '#',
        email: 'selin@codever.com',
      },
      achievements: ['PMP Certified', 'Scrum Master', 'Agile Coach'],
    },
  ];

  const filteredMembers = selectedDepartment === 'all' ? teamMembers : teamMembers.filter(member => member.department === selectedDepartment);

  const departmentStats = {
    development: { count: teamMembers.filter(m => m.department === 'development').length, icon: <Code className='h-5 w-5' /> },
    design: { count: teamMembers.filter(m => m.department === 'design').length, icon: <Palette className='h-5 w-5' /> },
    management: { count: teamMembers.filter(m => m.department === 'management').length, icon: <Settings className='h-5 w-5' /> },
  };

  const teamValues = [
    {
      icon: <Brain className='h-6 w-6' />,
      title: 'Sürekli Öğrenme',
      description: 'Teknolojik gelişmeleri takip ediyor, kendimizi sürekli geliştiriyoruz.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Users className='h-6 w-6' />,
      title: 'Takım Ruhu',
      description: 'Birlikte çalışarak daha büyük başarılara imza atıyoruz.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Zap className='h-6 w-6' />,
      title: 'İnovasyon',
      description: 'Yaratıcı çözümlerle sektörde fark yaratmaya odaklanıyoruz.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Globe className='h-6 w-6' />,
      title: 'Global Vizyon',
      description: 'Yerel deneyimimizi global standartlarla buluşturuyoruz.',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-black py-20' ref={ref}>
      {/* Grid Background Pattern */}
      <div className='bg-grid-white/[0.02] bg-grid-small absolute inset-0 bg-black' />

      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <motion.div className='mb-20 text-center' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8 }}>
          <motion.div className='mb-6' initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ duration: 1, delay: 0.2 }}>
            <AnimatedShinyText className='mb-4 text-lg font-medium text-neutral-400'>👥 Ekibimiz</AnimatedShinyText>
            <h2 className='text-4xl font-bold text-white md:text-5xl lg:text-6xl'>
              <SparklesText text='Uzman Kadromuz' className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl' />
            </h2>
          </motion.div>

          <motion.div className='mx-auto max-w-4xl' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <TextGenerateEffect words={description} className='text-lg leading-relaxed text-neutral-300 md:text-xl' />
          </motion.div>
        </motion.div>

        {/* Department Stats */}
        <motion.div className='mb-12 grid grid-cols-1 gap-6 md:grid-cols-3' initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 1, delay: 0.8 }}>
          {Object.entries(departmentStats).map(([dept, stats], index) => (
            <motion.div key={dept} className='group relative rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10' whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
              <div className='mb-4 flex items-center justify-center'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white'>{stats.icon}</div>
              </div>
              <div className='mb-2 text-3xl font-bold text-white'>{stats.count}</div>
              <div className='text-lg font-medium text-neutral-300 capitalize'>{dept === 'development' ? 'Yazılım' : dept === 'design' ? 'Tasarım' : 'Yönetim'} Uzmanı</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Department Filter */}
        <motion.div className='mb-12 flex flex-wrap justify-center gap-4' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 1 }}>
          {departments.map(dept => (
            <motion.button
              key={dept.id}
              onClick={() => setSelectedDepartment(dept.id)}
              className={`flex items-center space-x-2 rounded-2xl border px-6 py-3 backdrop-blur-md transition-all duration-300 ${selectedDepartment === dept.id ? 'border-white/20 bg-white/10 text-white' : 'border-white/10 bg-white/5 text-neutral-400 hover:border-white/15 hover:bg-white/8 hover:text-neutral-300'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {dept.icon}
              <span className='font-medium'>{dept.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Team Members Grid */}
        <motion.div className='mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 1, delay: 1.2 }}>
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className='group relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10'
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              custom={index}
            >
              {/* Avatar and Basic Info */}
              <div className='mb-6 text-center'>
                <div className='mb-4 text-6xl'>{member.avatar}</div>
                <h3 className={`bg-gradient-to-r text-xl font-bold ${member.gradient} bg-clip-text text-transparent`}>{member.name}</h3>
                <p className='text-sm font-medium text-neutral-300'>{member.position}</p>
              </div>

              {/* Bio */}
              <p className='mb-4 text-sm text-neutral-400'>{member.bio}</p>

              {/* Skills */}
              <div className='mb-6'>
                <h4 className='mb-2 text-sm font-semibold text-white'>Uzmanlık Alanları:</h4>
                <div className='flex flex-wrap gap-2'>
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className='rounded-full bg-white/10 px-2 py-1 text-xs text-neutral-300'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements - Show on Hover */}
              {hoveredMember === member.id && (
                <motion.div className='mb-4' initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }}>
                  <h4 className='mb-2 text-sm font-semibold text-white'>Başarılar:</h4>
                  <div className='space-y-1'>
                    {member.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className='flex items-center space-x-2'>
                        <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${member.gradient}`} />
                        <span className='text-xs text-neutral-300'>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Social Links */}
              <div className='flex justify-center space-x-4'>
                {member.social.linkedin && (
                  <a href={member.social.linkedin} className='text-neutral-400 transition-colors hover:text-blue-400'>
                    <Linkedin className='h-4 w-4' />
                  </a>
                )}
                {member.social.github && (
                  <a href={member.social.github} className='text-neutral-400 transition-colors hover:text-white'>
                    <Github className='h-4 w-4' />
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} className='text-neutral-400 transition-colors hover:text-blue-400'>
                    <Twitter className='h-4 w-4' />
                  </a>
                )}
                <a href={`mailto:${member.social.email}`} className='text-neutral-400 transition-colors hover:text-green-400'>
                  <Mail className='h-4 w-4' />
                </a>
              </div>

              <div className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r ${member.gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Team Values */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 1, delay: 1.5 }}>
          <div className='mb-12 text-center'>
            <h3 className='mb-4 text-3xl font-bold text-white md:text-4xl'>
              <span className='bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent'>Ekip Değerlerimiz</span>
            </h3>
            <p className='text-lg text-neutral-300'>Birlikte çalışırken benimsediğimiz temel değerler</p>
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {teamValues.map((value, index) => (
              <motion.div
                key={index}
                className='group relative rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10'
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                custom={index}
              >
                <div className='mb-4 flex items-center justify-center'>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${value.gradient} text-white shadow-lg`}>{value.icon}</div>
                </div>
                <h4 className={`mb-3 bg-gradient-to-r text-xl font-semibold ${value.gradient} bg-clip-text text-transparent`}>{value.title}</h4>
                <p className='text-sm text-neutral-300'>{value.description}</p>
                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${value.gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Team CTA */}
        <motion.div className='mt-20 text-center' initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 1, delay: 1.8 }}>
          <h3 className='mb-4 text-3xl font-bold text-white md:text-4xl'>Ekibimize Katılmak İster Misiniz?</h3>
          <p className='mb-8 text-lg text-neutral-300'>Yetenekli ve tutkulu insanları arıyoruz. Birlikte büyük şeyler başaralım!</p>
          <HoverBorderGradient containerClassName='rounded-full' as='button' className='flex items-center space-x-2 bg-black px-8 py-4 text-lg font-semibold text-white'>
            <Users className='h-5 w-5' />
            <span>Kariyer Fırsatları</span>
          </HoverBorderGradient>
        </motion.div>
      </div>
    </div>
  );
};

export default OurTeam;
