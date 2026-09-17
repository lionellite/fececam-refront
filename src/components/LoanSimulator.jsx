import React, { useState, useId } from 'react';
import { Calculator, Info, CheckCircle2, ArrowRight } from 'lucide-react';

export default function LoanSimulator() {
  const amountId = useId();
  const durationId = useId();
  const loanTypeId = useId();

  const [loanType, setLoanType] = useState('commercial');
  const [amount, setAmount] = useState(1000000); // 1,000,000 FCFA
  const [duration, setDuration] = useState(12); // 12 mois

  // Rates according to loan types in SFD / FECECAM context
  const loanTypes = {
    agricole: { label: 'Crédit Agricole / Pêche / Élevage', annualRate: 10, minAmount: 100000, maxAmount: 15000000, minDuration: 3, maxDuration: 36 },
    commercial: { label: 'Crédit Commercial & Artisanat', annualRate: 12, minAmount: 100000, maxAmount: 20000000, minDuration: 3, maxDuration: 24 },
    consommation: { label: 'Crédit Consommation / Salariés', annualRate: 12, minAmount: 100000, maxAmount: 10000000, minDuration: 3, maxDuration: 24 },
    pme: { label: 'Crédit PME / PMI', annualRate: 10, minAmount: 1000000, maxAmount: 50000000, minDuration: 6, maxDuration: 60 },
    scolaire: { label: 'Crédit Scolaire / Éducation', annualRate: 9, minAmount: 50000, maxAmount: 2000000, minDuration: 3, maxDuration: 10 },
  };

  const currentTypeConfig = loanTypes[loanType] || loanTypes.commercial;

  // Monthly payment calculation formula (amortissement constant ou annuité)
  const monthlyRate = currentTypeConfig.annualRate / 100 / 12;
  const calculateMonthlyPayment = () => {
    if (monthlyRate === 0) return amount / duration;
    const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -duration));
    return Math.round(monthlyPayment);
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalAmountToRepay = monthlyPayment * duration;
  const totalInterest = totalAmountToRepay - amount;

  const formatFCFA = (val) => {
    return new Intl.NumberFormat('fr-FR').format(val) + ' FCFA';
  };

  return (
    <div id="simulateur" className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden my-8">
      <div className="bg-[#006838] text-white p-6 md:p-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 bg-amber-400 text-gray-950 rounded-lg shadow">
            <Calculator size={28} aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Simulateur de Prêt FECECAM
            </h2>
            <p className="text-emerald-100 text-sm md:text-base mt-1">
              Calculez facilement vos mensualités et planifiez le financement de vos projets
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">

          {/* Loan Type Selector */}
          <div>
            <label htmlFor={loanTypeId} className="block text-base font-bold text-gray-900 mb-2">
              1. Type de Crédit
            </label>
            <select
              id={loanTypeId}
              value={loanType}
              onChange={(e) => {
                const newType = e.target.value;
                setLoanType(newType);
                const cfg = loanTypes[newType];
                if (amount < cfg.minAmount) setAmount(cfg.minAmount);
                if (amount > cfg.maxAmount) setAmount(cfg.maxAmount);
                if (duration < cfg.minDuration) setDuration(cfg.minDuration);
                if (duration > cfg.maxDuration) setDuration(cfg.maxDuration);
              }}
              className="w-full bg-gray-50 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 font-semibold focus:border-[#006838] focus:bg-white text-base shadow-sm"
            >
              {Object.entries(loanTypes).map(([key, item]) => (
                <option key={key} value={key}>
                  {item.label} (Taux indicatif: {item.annualRate}% / an)
                </option>
              ))}
            </select>
          </div>

          {/* Amount Slider & Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor={amountId} className="block text-base font-bold text-gray-900">
                2. Montant souhaité
              </label>
              <div className="flex items-center gap-1 font-extrabold text-lg text-[#006838] bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                <span>{formatFCFA(amount)}</span>
              </div>
            </div>

            <input
              type="range"
              id={`${amountId}-range`}
              min={currentTypeConfig.minAmount}
              max={currentTypeConfig.maxAmount}
              step={50000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#006838]"
              aria-label="Ajuster le montant du prêt"
            />

            <div className="flex justify-between text-xs font-semibold text-gray-600 mt-1">
              <span>{formatFCFA(currentTypeConfig.minAmount)}</span>
              <span>{formatFCFA(currentTypeConfig.maxAmount)}</span>
            </div>

            <div className="mt-3">
              <label htmlFor={amountId} className="sr-only">Saisir le montant exact en FCFA</label>
              <input
                type="number"
                id={amountId}
                min={currentTypeConfig.minAmount}
                max={currentTypeConfig.maxAmount}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 font-medium focus:border-[#006838] focus:bg-white"
                placeholder="Ex: 1000000"
              />
            </div>
          </div>

          {/* Duration Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor={durationId} className="block text-base font-bold text-gray-900">
                3. Durée du remboursement
              </label>
              <div className="font-extrabold text-lg text-[#006838] bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                {duration} mois ({Math.floor(duration / 12) > 0 ? `${Math.floor(duration / 12)} an(s) ` : ''}{duration % 12 > 0 ? `${duration % 12} mois` : ''})
              </div>
            </div>

            <input
              type="range"
              id={durationId}
              min={currentTypeConfig.minDuration}
              max={currentTypeConfig.maxDuration}
              step={1}
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#006838]"
            />

            <div className="flex justify-between text-xs font-semibold text-gray-600 mt-1">
              <span>{currentTypeConfig.minDuration} mois</span>
              <span>{currentTypeConfig.maxDuration} mois</span>
            </div>
          </div>

        </div>

        {/* Results Column */}
        <div className="lg:col-span-5 bg-emerald-950 text-white p-6 rounded-xl border border-emerald-800 flex flex-col justify-between shadow-inner">
          <div>
            <h3 className="text-xl font-bold text-amber-400 mb-6 pb-2 border-b border-emerald-800 flex items-center gap-2">
              <CheckCircle2 size={20} className="text-amber-400" />
              Résultat de l'estimation
            </h3>

            <div className="space-y-5">
              <div className="bg-emerald-900/80 p-4 rounded-lg border border-emerald-700">
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-200 block mb-1">
                  Mensualité Estimée
                </span>
                <span className="text-3xl md:text-4xl font-extrabold text-amber-300">
                  {formatFCFA(monthlyPayment)}
                </span>
                <span className="text-xs text-emerald-200 block mt-1">/ mois pendant {duration} mois</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-emerald-900/40 p-3 rounded border border-emerald-800/80">
                  <span className="text-xs text-emerald-300 block">Total des intérêts</span>
                  <span className="font-bold text-white text-base">{formatFCFA(totalInterest)}</span>
                </div>
                <div className="bg-emerald-900/40 p-3 rounded border border-emerald-800/80">
                  <span className="text-xs text-emerald-300 block">Total à rembourser</span>
                  <span className="font-bold text-white text-base">{formatFCFA(totalAmountToRepay)}</span>
                </div>
              </div>

              <div className="text-xs text-emerald-200 space-y-1.5 pt-2 border-t border-emerald-800">
                <div className="flex items-center gap-1.5 text-amber-300">
                  <Info size={14} className="shrink-0" />
                  <span className="font-semibold">Taux d'intérêt annuel appliqué : {currentTypeConfig.annualRate}%</span>
                </div>
                <p className="leading-relaxed text-gray-300">
                  *Cette simulation est un calcul indicatif hors frais de dossier et d'assurance. Rendez-vous dans une agence CLCAM pour finaliser votre dossier.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-emerald-800">
            <a
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold px-5 py-3 rounded-lg text-base shadow transition-colors focus:ring-4 focus:ring-amber-300"
            >
              <span>Demander ce crédit en agence</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
