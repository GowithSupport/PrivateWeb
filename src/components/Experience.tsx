
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
      position: 'IT Manager to Director of IT',
      period: '2011-2021',
      description: 'Healthcare IT transformation with HIPAA compliance leadership over 10-year tenure',
      achievements: [
        'Migrated healthcare organization to AWS cloud infrastructure',
        'Implemented HIPAA-compliant security framework and policies',
        'Integrated NetSuite and Dynamics 365 saving $700K annually',
        'Deployed multi-location VoIP system connecting US, UK, and India',
        'Led IT team through Joint Commission accreditation process',
        'Promoted from IT Manager to Director of IT over tenure'
      ],
      icon: Users
    },
    {
      company: 'Earlier Technology Roles',
      position: 'Senior Infrastructure Engineer',
      period: '2001-2011',
      description: '10+ years building enterprise infrastructure foundations',
      achievements: [
        'VMware virtualization deployments across multiple data centers',
        'Cisco networking infrastructure design and implementation',
        'Microsoft Exchange and Active Directory enterprise deployments',
        'Database administration for SQL Server and Oracle environments',
        'Emergency response and disaster recovery planning',
        'Network security implementation and monitoring'
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

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon and Header */}
                <div className="flex items-start gap-4 lg:w-1/3">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3182ce] rounded-lg flex items-center justify-center">
                    <exp.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#1a365d] mb-1">{exp.company}</h3>
                    <p className="text-lg font-semibold text-[#3182ce] mb-2">{exp.position}</p>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="mr-2" size={16} />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="lg:w-2/3">
                  <p className="text-gray-700 mb-6 font-medium text-lg">{exp.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
    </section>
  );
};

export default Experience;
