import React from 'react';
import { BookOpen, Award, Users, Clock } from 'lucide-react';

const Academics = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'State board aligned curriculum with additional focus on practical skills and rural development.',
    },
    {
      icon: Award,
      title: 'Quality Education',
      description: 'Experienced teachers using modern teaching methods while maintaining traditional values.',
    },
    {
      icon: Users,
      title: 'Small Class Sizes',
      description: 'Maintaining optimal teacher-student ratio for personalized attention and better learning outcomes.',
    },
    {
      icon: Clock,
      title: 'Extended Learning',
      description: 'After-school programs and remedial classes to ensure no student is left behind.',
    },
  ];

  return (
    <section id="academics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Academics</h2>
          <p className="mt-4 text-lg text-gray-600">Nurturing minds through comprehensive education</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start p-6 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <feature.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-indigo-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Programs</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg mb-2">Primary Education</h4>
              <p className="text-gray-600">Grades 1-5 with focus on foundational learning</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg mb-2">Middle School</h4>
              <p className="text-gray-600">Grades 6-8 with integrated learning approach</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg mb-2">Secondary Education</h4>
              <p className="text-gray-600">Grades 9-10 with career guidance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;