
import { Award, Cloud, Shield, Database, Network, Cog } from 'lucide-react';

const Technologies = () => {
  const certifications = [
    'AWS Certified Solutions Architect – Professional',
    'Microsoft Azure Security Technology (AZ-500)',
    'Azure Solutions Architect Expert (AZ-305)',
    'ITIL 4 IT Governance and Service Management',
    'VMware Certified Professional (VCP)',
    'Microsoft Certified IT Professional (MCITP)',
    'Cisco Certified Network Professional (CCNA)'
  ];

  const techCategories = [
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      technologies: ['AWS', 'Microsoft Azure', 'Office 365', 'Google Workspace']
    },
    {
      icon: Shield,
      title: 'Security',
      technologies: ['Fortinet', 'Cisco Meraki', 'SonicWALL', 'VPN/IPS']
    },
    {
      icon: Cog,
      title: 'Virtualization',
      technologies: ['VMware', 'Hyper-V', 'Citrix']
    },
    {
      icon: Database,
      title: 'ERP & Database',
      technologies: ['NetSuite', 'Microsoft Dynamics 365', 'Salesforce', 'SQL Server', 'Oracle']
    },
    {
      icon: Network,
      title: 'Networking',
      technologies: ['Cisco', 'Juniper', 'SD-WAN', 'VOIP']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Technical Expertise & Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-leading certifications and extensive experience across modern technology platforms.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white p-4 rounded-lg flex items-center">
                <Award className="mr-3 flex-shrink-0" size={20} />
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Core Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-sky-50 p-6 rounded-xl border-l-4 border-emerald-400">
                <div className="flex items-center mb-4">
                  <category.icon className="text-sky-600 mr-3" size={24} />
                  <h4 className="text-lg font-bold text-gray-800">{category.title}</h4>
                </div>
                <div className="space-y-2">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="bg-white px-3 py-2 rounded-lg text-sm text-gray-700 shadow-sm">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
