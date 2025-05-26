
import { Users, TrendingUp, Shield, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: '23+', label: 'Years Experience' },
    { icon: TrendingUp, number: '$700K+', label: 'Annual Savings Delivered' },
    { icon: Shield, number: '100+', label: 'Successful Migrations' },
    { icon: Users, number: 'Multiple', label: 'Industry Certifications' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a365d] mb-6">
            About Ali Rahimi - Your IT Strategic Partner
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A versatile, collaborative, and accomplished IT professional with 23+ years of diversified experience in Network Infrastructure, Cloud Computing, Cybersecurity, and Digital Transformation. I specialize in leading organizations through complex IT modernization while ensuring security, compliance, and operational excellence.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              My expertise spans from startups to enterprise-level organizations, helping businesses align technology investments with strategic goals while building scalable, secure infrastructures that drive growth.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <stat.icon className="mx-auto mb-4 text-[#3182ce]" size={48} />
                <div className="text-2xl font-bold text-[#1a365d] mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
