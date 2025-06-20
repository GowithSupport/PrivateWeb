
import { Building, Calendar, TrendingUp, Award, Users, Shield } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'BetterDebtSolutions',
      position: 'VP of IT',
      period: '2024-Present',
      description: 'Leading complete IT transformation for rapid scaling',
      achievements: [
        'Redesigned IT department architecture for 10x growth scalability',
        'Implemented AWS Data Lake with Redshift, S3, and Glue ETL pipelines',
        'Enhanced cybersecurity posture achieving SOC 2 Type II compliance',
        'Unified website infrastructure with automated CI/CD pipelines',
        'Reduced operational costs by 40% through cloud optimization'
      ],
      icon: Award
    },
    {
      company: 'ValtaEnergy',
      position: 'Director of IT',
      period: '2023-2024',
      description: 'Modernized energy company IT infrastructure for operational excellence',
      achievements: [
        'Revamped entire IT department for company-wide scalability',
        'Migrated from Google to unified Microsoft 365 environment',
        'Successfully implemented NetSuite Oracle ERP platform',
        'Enhanced data reporting capabilities with Snowflake and Tableau',
        'Established ITIL-based service management framework'
      ],
      icon: TrendingUp
    },
    {
      company: 'SymmetryLending',
      position: 'Director of IT Operations',
      period: '2021-2023',
      description: 'Transformed mortgage lending technology stack with compliance focus',
      achievements: [
        'Led successful SOC 2 Type II audit completion in 8 months',
        'Implemented comprehensive cybersecurity strategy and governance',
        'Deployed Azure Virtual Desktop Infrastructure (VDI) for enhanced security',
        'Built scalable IT service management framework',
        'Achieved 99.9% system uptime with disaster recovery implementation'
      ],
      icon: Shield
    },
    {
      company: 'Sovereign Health Group',
      position: 'IT Manager',
      period: '2018-2021',
      description: 'Healthcare IT transformation with HIPAA compliance leadership',
      achievements: [
        'Migrated healthcare organization to AWS cloud infrastructure',
        'Implemented HIPAA-compliant security framework and policies',
        'Integrated NetSuite and Dynamics 365 saving $700K annually',
        'Deployed multi-location VoIP system connecting US, UK, and India',
        'Led IT team through Joint Commission accreditation process'
      ],
      icon: Users
    },
    {
      company: 'Earlier Technology Roles',
      position: 'Senior Infrastructure Engineer',
      period: '2001-2018',
      description: '17+ years building enterprise infrastructure foundations',
      achievements: [
        'VMware virtualization deployments across multiple data centers',
        'Cisco networking infrastructure design and implementation',
        'Microsoft Exchange and Active Directory enterprise deployments',
        'Database administration for SQL Server and Oracle environments',
        'Emergency response and disaster recovery planning'
      ],
      icon: Building
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
            Two decades of consistent delivery of strategic IT solutions and measurable business impact across diverse industries.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#3182ce] transform md:-translate-x-0.5"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-[#3182ce] rounded-full transform md:-translate-x-2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Content card */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <exp.icon className="text-[#3182ce] mr-3" size={24} />
                      <div>
                        <h3 className="text-2xl font-bold text-[#1a365d]">{exp.company}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <p className="text-lg font-semibold text-[#3182ce]">{exp.position}</p>
                          <div className="flex items-center text-gray-600 mt-1 sm:mt-0">
                            <Calendar className="mr-2" size={16} />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 font-medium">{exp.description}</p>
                    
                    <div className="grid grid-cols-1 gap-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start">
                          <TrendingUp className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
