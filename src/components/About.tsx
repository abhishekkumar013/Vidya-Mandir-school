import React from "react";
import { Target, BookOpen, Users } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide quality education to rural students and bridge the urban-rural educational divide through innovative teaching methods.",
    },
    {
      icon: BookOpen,
      title: "Our Vision",
      description:
        "To create a learning environment that nurtures creativity, critical thinking, and character development in rural students.",
    },
    {
      icon: Users,
      title: "Our Values",
      description:
        "Excellence, inclusivity, and community engagement form the cornerstone of our educational philosophy.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Us"
          subtitle="Empowering rural communities through quality education | ग्रामीण शिक्षा: प्रगति की ओर एक कदम"
        />

        {/* ग्रामीण शिक्षा: प्रगति की ओर एक कदम */}

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 group hover:bg-indigo-50 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
