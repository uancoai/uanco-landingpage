
import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, XCircle, ChevronDown, ShieldCheck } from 'lucide-react';

interface StatusItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  desc: string;
  criteria: string[];
  disclaimer: string;
  color: string;
}

const SuitabilityReview: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const statuses: StatusItem[] = [
    { 
      id: 'safe',
      label: "Safe to Proceed", 
      icon: <CheckCircle2 className="text-emerald-500" />, 
      desc: "Client meets all standard suitability criteria.",
      color: "emerald",
      criteria: [
        "No contraindicating medical history identified",
        "Realistic treatment expectations and goals",
        "Demonstrated understanding of post-procedure care",
        "Stable treatment history with no recent complications"
      ],
      disclaimer: "System screening provides a clinical baseline; final suitability is always at the sole discretion of the attending practitioner."
    },
    { 
      id: 'review',
      label: "Requires Review", 
      icon: <AlertCircle className="text-amber-500" />, 
      desc: "Flags detected (e.g. medical history, psychological markers).",
      color: "amber",
      criteria: [
        "Potential medical interactions (e.g., specific medications)",
        "Ambiguous responses regarding past complications",
        "Recent treatments that may affect the safe window",
        "Psychological markers requiring focused consultation"
      ],
      disclaimer: "Clinical flags are provided to support your consultation. The practitioner must perform a full physical and psychological assessment before proceeding."
    },
    { 
      id: 'unsuitable',
      label: "Unsuitable", 
      icon: <XCircle className="text-rose-500" />, 
      desc: "Inquiry does not meet your clinic's minimum safety standards.",
      color: "rose",
      criteria: [
        "Major medical contraindications identified",
        "High risk indicated on BDD (Body Dysmorphic Disorder) screening",
        "Incongruent treatment requests outside safe clinical practice",
        "Age or consent verification failure"
      ],
      disclaimer: "Safety first. The system flags known high-risk factors, but professional review remains the final safeguard for patient wellbeing."
    }
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-24 lg:py-32 bg-[#F9F9FB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-4">The Triage Framework</p>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] mb-8">
            Manual Review. <br />
            <span className="font-serif italic font-light text-zinc-400">Final Review.</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Uanco provides a sophisticated triage overview by categorising inquiries based on your clinical parameters. Professional oversight remains the cornerstone of every outcome.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto grid gap-6">
          {statuses.map((status) => (
            <div 
              key={status.id} 
              className={`group flex flex-col p-8 bg-white rounded-[2rem] border transition-all duration-300 cursor-pointer ${
                expandedId === status.id 
                  ? 'border-zinc-300 shadow-lg scale-[1.02]' 
                  : 'border-zinc-100 shadow-sm hover:border-zinc-200 hover:shadow-md'
              }`}
              onClick={() => toggleExpand(status.id)}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center transition-transform group-hover:scale-110">
                  {status.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-lg text-[#1A1A1A]">{status.label}</p>
                    <ChevronDown 
                      className={`text-zinc-300 transition-transform duration-300 ${expandedId === status.id ? 'rotate-180' : ''}`} 
                      size={20} 
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{status.desc}</p>
                </div>
                <div className="hidden md:block px-4 py-2 rounded-full bg-zinc-50 text-[10px] font-bold text-zinc-400 uppercase tracking-widest border border-zinc-100">
                  Click to Expand
                </div>
              </div>

              {/* Expanded Content */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedId === status.id ? 'max-h-[500px] mt-8 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="pt-6 border-t border-zinc-50">
                  <h5 className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">Screening Criteria</h5>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {status.criteria.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-zinc-600">
                        <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-zinc-200"></div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-start gap-4">
                    <ShieldCheck className="text-zinc-400 flex-shrink-0 mt-0.5" size={18} />
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Practitioner Disclaimer</p>
                      <p className="text-xs text-zinc-500 leading-relaxed italic">
                        {status.disclaimer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs text-zinc-400 italic">
            * All screening algorithms are custom-aligned to your clinic's specific medical policies and insurance requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuitabilityReview;
