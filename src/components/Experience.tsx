
import { Building, Calendar, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'BetterDebtSolutions',
      position: 'VP of IT',
      period: '2024-Present',
      achievements: [
        'Redesigned IT department for scalable growth',
        'Implemented AWS Data Lake with Redshift, S3, and Glue',
        'Enhanced cybersecurity posture and SOC 2 compliance',
        'Unified website infrastructure with CI/CD pipelines'
      ]
    },
    {
      company: 'ValtaEnergy',
      position: 'Director of IT',
      period: '2023-2024',
      achievements: [
        'Revamped IT department for company scalability',
        'Migrated from Google to unified Microsoft 365 environment',
        'Implemented NetSuite Oracle ERP platform',
        'Enhanced data reporting with Snowflake and Tableau'
      ]
    },
    {
      company: 'SymmetryLending',
      position: 'Director of IT Operations',
      period: '2021-2023',
      achievements: [
        'Led successful SOC 2 Type II audit completion',
        'Implemented comprehensive cybersecurity strategy',
        'Deployed Azure VDI for enhanced security',
        'Built scalable IT service management framework'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a365d] mb-6">
            Proven Track Record of Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recent achievements demonstrating consistent delivery of strategic IT solutions and measurable business impact.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#1a365d] mb-2">{exp.company}</h3>
                  <div className="flex items-center text-[#3182ce] mb-2">
                    <Building className="mr-2" size={20} />
                    <span className="text-lg font-semibold">{exp.position}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="mr-2" size={20} />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exp.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start">
                    <TrendingUp className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
