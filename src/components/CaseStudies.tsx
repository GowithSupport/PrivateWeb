
import { TrendingUp, Shield, Globe } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      icon: TrendingUp,
      title: 'Healthcare IT Transformation',
      description: 'Migrated entire healthcare organization to AWS cloud, implementing HIPAA-compliant infrastructure while saving $700K annually through NetSuite and Dynamics 365 integration.',
      results: ['$700K Annual Savings', 'HIPAA Compliance', 'AWS Migration', 'ERP Integration']
    },
    {
      icon: Shield,
      title: 'Financial Services Compliance',
      description: 'Led mortgage lending company through successful SOC 2 Type II audit, implementing comprehensive cybersecurity framework and ensuring regulatory compliance.',
      results: ['SOC 2 Type II Success', 'Cybersecurity Framework', 'Regulatory Compliance', 'Risk Mitigation']
    },
    {
      icon: Globe,
      title: 'Multi-Location VoIP Deployment',
      description: 'Designed and deployed global VoIP communications system connecting US, UK, and India offices with centralized teleconferencing at minimal cost.',
      results: ['Global Connectivity', 'Cost Optimization', 'Unified Communications', 'Scalable Infrastructure']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 via-sky-600 to-yellow-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
            Real-world results demonstrating our ability to deliver transformative IT solutions across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
              <caseStudy.icon className="text-yellow-200 mb-6" size={48} />
              <h3 className="text-xl font-bold mb-4">{caseStudy.title}</h3>
              <p className="text-yellow-100 mb-6 leading-relaxed">{caseStudy.description}</p>
              
              <div className="space-y-2">
                {caseStudy.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="bg-white/20 px-3 py-2 rounded-lg text-sm border border-white/30">
                    {result}
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

export default CaseStudies;
