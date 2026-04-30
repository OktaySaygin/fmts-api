// reviews api

import { NextResponse } from 'next/server';

export async function GET(request) {
  const workflowSteps = [
    {
      id: 1,
      title: 'Discovery & Analysis',
      subtitle: 'Understanding the Needs',
      description: 'We thoroughly analyze your project, identify your goals and requirements. At this stage, we closely collaborate with you to lay the foundation of the project.',
      icon: '🔍',
      duration: '1-2 Weeks',
      gradient: 'from-blue-400 to-cyan-400',
      features: ['Detailed requirements analysis', 'Target audience research', 'Technical requirement documentation', 'Project roadmap'],
      stats: { projects: 150, satisfaction: 98 },
    },
    {
      id: 2,
      title: 'Design & Planning',
      subtitle: 'Creativity Begins',
      description: 'We create UI/UX designs and optimize user experience. By designing modern and user-friendly interfaces, we shape the visual identity of your project.',
      icon: '🎨',
      duration: '2-3 Weeks',
      gradient: 'from-purple-400 to-pink-400',
      features: ['UI/UX design processes', 'Prototyping & Wireframing', 'Creating a Design System', 'User Journey Mapping'],
      stats: { designs: 200, revisions: 3 },
    },
    {
      id: 3,
      title: 'Development',
      subtitle: 'Code Comes to Life',
      description: 'We bring your project to life using the latest technologies. By following the Agile methodology, we ensure quality at every step through iterative development.',
      icon: '⚡',
      duration: '4-8 Weeks',
      gradient: 'from-green-400 to-emerald-400',
      features: ['Modern tech stack', 'Agile development processes', 'Code review & testing', 'CI/CD pipeline setup'],
      stats: { commits: 1000, uptime: 99.9 },
    },
    {
      id: 4,
      title: 'Testing & Optimization',
      subtitle: 'Pursuit of Perfection',
      description: 'We perform comprehensive testing and optimize performance. We conduct detailed evaluations in terms of security, speed, and user experience.',
      icon: '🧪',
      duration: '1-2 Weeks',
      gradient: 'from-orange-400 to-red-400',
      features: ['Automated testing', 'Performance optimization', 'Security audit', 'Cross-platform testing'],
      stats: { tests: 500, coverage: 95 },
    },
    {
      id: 5,
      title: 'Delivery & Support',
      subtitle: 'Path to Success',
      description: 'We successfully deliver your project and provide ongoing support. After the launch, we continue to stand by your side as your partner on the growth journey.',
      icon: '🚀',
      duration: 'Ongoing',
      gradient: 'from-indigo-400 to-purple-400',
      features: ['Deployment & launch', '24/7 technical support', 'Maintenance & updates', 'Monitoring & analytics'],
      stats: { support: 24, response: 2 },
    },
  ];

  return NextResponse.json(workflowSteps);
}
