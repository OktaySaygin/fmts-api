// reviews api

import { NextResponse } from 'next/server';

export async function GET(request) {
  const reviews = [
    {
      id: 1,
      company: 'Tech Innovation Corp',
      logo: '/api/placeholder/80/80',
      review: 'Working with Codever was an amazing experience. They delivered our project on time and exceeded our expectations.',
      name: 'Ahmet Yılmaz',
      position: 'CTO',
      rating: 5,
      project: 'E-Commerce Platform',
      gradient: 'from-blue-400 to-cyan-400',
    },
    {
      id: 2,
      company: 'Digital Solutions Ltd',
      logo: '/api/placeholder/80/80',
      review: 'Thanks to their professional approach and technical expertise, we realized the app we dreamed of.',
      name: 'Fatma Kaya',
      position: 'Product Manager',
      rating: 5,
      project: 'Mobile App Development',
      gradient: 'from-purple-400 to-pink-400',
    },
    {
      id: 3,
      company: 'StartUp Ventures',
      logo: '/api/placeholder/80/80',
      review: 'The Codever team became our most reliable tech partner during our startup journey. It was a fantastic collaboration.',
      name: 'Mehmet Demir',
      position: 'Founder & CEO',
      rating: 5,
      project: 'SaaS Platform',
      gradient: 'from-green-400 to-emerald-400',
    },
    {
      id: 4,
      company: 'Global Enterprise',
      logo: '/api/placeholder/80/80',
      review: "With Codever's expertise in corporate solutions, we successfully completed our digital transformation.",
      name: 'Ayşe Özkan',
      position: 'Digital Director',
      rating: 5,
      project: 'Enterprise Dashboard',
      gradient: 'from-orange-400 to-red-400',
    },
    {
      id: 5,
      company: 'Innovation Labs',
      logo: '/api/placeholder/80/80',
      review: 'They brought our project to life using cutting-edge technologies. They were supportive throughout the process.',
      name: 'Can Arslan',
      position: 'Lead Developer',
      rating: 5,
      project: 'AI-Powered Analytics',
      gradient: 'from-indigo-400 to-purple-400',
    },
    {
      id: 6,
      company: 'Future Tech',
      logo: '/api/placeholder/80/80',
      review: 'Working with Codever was a game-changer for us. They exceeded our expectations in both quality and speed.',
      name: 'Zeynep Şahin',
      position: 'Technical Lead',
      rating: 5,
      project: 'Web3 Integration',
      gradient: 'from-teal-400 to-blue-400',
    },
  ];

  return NextResponse.json(reviews);
}
