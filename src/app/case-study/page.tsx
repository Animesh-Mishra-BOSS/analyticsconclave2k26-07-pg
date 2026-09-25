'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/shared/Navbar';
import { 
  BookOpen, Target, Database, Award, ShieldAlert, 
  Calendar, CheckCircle2, ChevronRight, Zap, ArrowLeft, ExternalLink, Download, FileText, Check,
  Plane, PlaneTakeoff, Fuel, Sun, CloudRain, Sparkles, Heart, Briefcase, IndianRupee, Users, Armchair, CloudLightning, Megaphone, Star, Crown, Palmtree
} from 'lucide-react';

export default function CaseStudyPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [copied, setCopied] = useState(false);

  const copyGuidelinesLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#030712] text-white selection:bg-[#17D059]/30">
      <Navbar />

      {/* Background Ambient Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-[#17D059]/10 blur-[130px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#074870]/20 blur-[160px]" />
      </div>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10">
        
        {/* Breadcrumb & Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} /> Back to Homepage
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={copyGuidelinesLink}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer border border-slate-700"
            >
              {copied ? <Check size={14} className="text-[#17D059]" /> : <FileText size={14} />}
              {copied ? 'Link Copied!' : 'Share Case Study'}
            </button>
            <Link
              href="/game/market"
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#17D059] text-slate-950 rounded-xl text-xs font-black hover:opacity-90 transition-opacity shadow-lg shadow-[#17D059]/20"
            >
              <Database size={14} /> Explore Historical Dataset
            </Link>
          </div>
        </div>

        {/* HERO TITLE HEADER */}
        <section className="mb-14 border-b border-slate-800/80 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#17D059]/10 border border-[#17D059]/30 text-[#17D059] mb-4">
            Official Case Study & Tournament Rulebook
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4">
            PG BUSINESS ANALYTICS GAME 2026
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#17D059] via-emerald-300 to-cyan-400 bg-clip-text text-transparent mb-6">
            AIRLINE SEAT OCCUPANCY FORECASTING CHALLENGE
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            Theme: <strong className="text-white">AERO NEXUS</strong>. Master the interplay of seasonal demand patterns, competitive dynamics, promotional intensities, fuel prices, and macroeconomic indices across 6 live scenario rounds.
          </p>
        </section>

        {/* SUMMARY STATS / HIGHLIGHTS */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          <div className="p-5 rounded-2xl bg-[#0B1222] border border-slate-800">
            <div className="text-xs font-mono uppercase text-slate-400 mb-1">Historical Dataset</div>
            <div className="text-2xl sm:text-3xl font-black text-[#17D059]">60 Rounds</div>
            <div className="text-xs text-slate-500 mt-1">Robust training data archive</div>
          </div>
          <div className="p-5 rounded-2xl bg-[#0B1222] border border-slate-800">
            <div className="text-xs font-mono uppercase text-slate-400 mb-1">Live Rounds</div>
            <div className="text-2xl sm:text-3xl font-black text-cyan-400">6 Rounds</div>
            <div className="text-xs text-slate-500 mt-1">10 minutes per round</div>
          </div>
          <div className="p-5 rounded-2xl bg-[#0B1222] border border-slate-800">
            <div className="text-xs font-mono uppercase text-slate-400 mb-1">Forecast Targets</div>
            <div className="text-2xl sm:text-3xl font-black text-purple-400">2 Streams</div>
            <div className="text-xs text-slate-500 mt-1">Economy & Premium Economy Seats</div>
          </div>
          <div className="p-5 rounded-2xl bg-[#0B1222] border border-slate-800">
            <div className="text-xs font-mono uppercase text-slate-400 mb-1">Scoring Balance</div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400">60% / 40%</div>
            <div className="text-xs text-slate-500 mt-1">Accuracy vs Analytical Logic</div>
          </div>
        </section>

        {/* SECTION 1: BUSINESS SCENARIO */}
        <section id="business-scenario" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-[#17D059]/10 text-[#17D059] border border-[#17D059]/20">
              <PlaneTakeoff size={24} />
            </div>
            <div>
              <span className="text-xs font-mono text-[#17D059] uppercase font-bold tracking-wider">Section 01</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">The Business Scenario</h2>
            </div>
          </div>

          <div className="bg-[#0B1222] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 text-slate-300">
            <p className="text-base sm:text-lg leading-relaxed">
              You are part of the <strong className="text-white font-bold">Business Analytics Team</strong> of a growing Indian airline operating domestic trunk routes.
              Before each operating period is fully executed, senior management requires precision forecasts of expected seat occupancy to optimize ticket pricing thresholds, flight capacity, and commercial logistics.
            </p>

            <div className="p-5 rounded-2xl bg-[#030712] border border-slate-800">
              <h3 className="text-white font-bold text-lg mb-3">16 Core Factors Governing Seat Demand:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                
                <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <Calendar className="text-[#17D059] shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-white">1. Month of Year (1-12):</strong> Calendar month affecting seasonal patterns.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <Sun className="text-amber-400 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-white">2. Summer Vacation (0/1):</strong> Binary flag for summer months (Apr-Jun). Boosts leisure demand.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <CloudRain className="text-blue-400 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-white">3. Monsoon (0/1):</strong> Binary flag for monsoon months (Jul-Sep). Depresses demand.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <Sparkles className="text-yellow-400 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-white">4. Festive Holiday (0/1):</strong> Binary flag for festive periods (Diwali, Christmas). Strong demand driver.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <Heart className="text-pink-400 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-white">5. Wedding Season (0/1):</strong> Binary flag for wedding season. Lifts Premium Economy demand.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <Fuel className="text-slate-400 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-white">6. Fuel Price Index (~90-110):</strong> Higher fuel costs may reduce capacity and raise fares.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <Palmtree className="text-emerald-400 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-white">7. Leisure Demand Index (~95-160):</strong> Direct driver of Economy cabin demand.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <Briefcase className="text-blue-500 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-white">8. Corporate Activity Index (~98-130):</strong> Primary driver of Premium Economy demand.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <Armchair className="text-cyan-400 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-white">9. Economy Capacity (seats):</strong> Sets upper bound for Economy occupancy (~17,800-22,000).
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <Crown className="text-purple-400 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-white">10. Premium Capacity (seats):</strong> Sets upper bound for Premium occupancy (~2,100-2,600).
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <Users className="text-orange-400 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-white">11. Competitor Capacity Index (~92-112):</strong> Higher competition dilutes market share.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <IndianRupee className="text-[#17D059] shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-white">12. Avg Economy Fare (₹):</strong> Lower fares stimulate demand (~3,200-4,300).
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <IndianRupee className="text-cyan-400 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-white">13. Avg Premium Fare (₹):</strong> Premium passengers less fare-sensitive (~9,200-10,800).
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <Megaphone className="text-red-400 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-white">14. Promo Intensity (0-3):</strong> 0=none, 1=light, 2=moderate, 3=heavy. Boosts Economy demand.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
                  <CloudLightning className="text-indigo-400 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-white">15. Weather Disruption Index (0-10):</strong> 0=clear, 10=severe. High disruption reduces demand.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 md:col-span-2">
                  <Star className="text-amber-400 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-white">16. Special Event Flag (0/1):</strong> Binary for special events (Independence Day, etc.).
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>






        {/* SECTION 3: HISTORICAL DATASET */}
        <section id="historical-dataset" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Database size={24} />
            </div>
            <div>
              <span className="text-xs font-mono text-purple-400 uppercase font-bold tracking-wider">Section 03</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Historical Data variables</h2>
            </div>
          </div>

          <div className="bg-[#0B1222] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Teams are provided with a robust training dataset comprising <strong className="text-white">60 historical rounds</strong> containing all primary independent variables and observed outcomes.
                </p>
              </div>
              <Link 
                href="/game/market" 
                className="px-5 py-2.5 bg-gradient-to-r from-[#17D059] to-emerald-600 text-slate-950 font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2 hover:opacity-90 transition-all shrink-0 cursor-pointer"
              >
                Open Historical Data Explorer <ExternalLink size={16} />
              </Link>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#070D18] text-slate-400 text-xs font-mono uppercase">
                  <tr>
                    <th className="px-5 py-3.5">Variable Name</th>
                    <th className="px-5 py-3.5">Definition & Analytical Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans text-xs sm:text-sm">
                  <tr>
                    <td className="px-5 py-3.5 font-mono text-[#17D059] font-bold">Month of Year</td>
                    <td className="px-5 py-3.5 text-slate-300">Calendar month affecting seasonal patterns (1-12)</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-mono text-amber-400 font-bold">Summer Vacation</td>
                    <td className="px-5 py-3.5 text-slate-300">Binary flag for summer months (0/1)</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-mono text-blue-400 font-bold">Monsoon</td>
                    <td className="px-5 py-3.5 text-slate-300">Binary flag for monsoon months (0/1)</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-mono text-yellow-400 font-bold">Festive Holiday</td>
                    <td className="px-5 py-3.5 text-slate-300">Binary flag for festive periods (0/1)</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-mono text-pink-400 font-bold">Wedding Season</td>
                    <td className="px-5 py-3.5 text-slate-300">Binary flag for wedding season (0/1)</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-mono text-slate-400 font-bold">Fuel Price Index</td>
                    <td className="px-5 py-3.5 text-slate-300">Tracks relative fuel costs (~90-110)</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-mono text-emerald-400 font-bold">Leisure Demand Index</td>
                    <td className="px-5 py-3.5 text-slate-300">Economy travel driver (~95-160)</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-mono text-blue-500 font-bold">Corporate Activity Index</td>
                    <td className="px-5 py-3.5 text-slate-300">Premium travel driver (~98-130)</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-mono text-cyan-400 font-bold">Economy Capacity</td>
                    <td className="px-5 py-3.5 text-slate-300">Upper bound for economy seats (~17,800-22,000)</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-mono text-purple-400 font-bold">Premium Capacity</td>
                    <td className="px-5 py-3.5 text-slate-300">Upper bound for premium seats (~2,100-2,600)</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-mono text-orange-400 font-bold">Competitor Capacity Index</td>
                    <td className="px-5 py-3.5 text-slate-300">Measures market competition (~92-112)</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-mono text-[#17D059] font-bold">Avg Economy Fare</td>
                    <td className="px-5 py-3.5 text-slate-300">Ticket pricing influencing demand (~₹3,200-4,300)</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-mono text-cyan-400 font-bold">Avg Premium Fare</td>
                    <td className="px-5 py-3.5 text-slate-300">Premium class pricing (~₹9,200-10,800)</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-mono text-red-400 font-bold">Promo Intensity</td>
                    <td className="px-5 py-3.5 text-slate-300">Scale of promotional marketing (0-3)</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-mono text-indigo-400 font-bold">Weather Disruption Index</td>
                    <td className="px-5 py-3.5 text-slate-300">Level of adverse weather impact (0-10)</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-mono text-amber-400 font-bold">Special Event Flag</td>
                    <td className="px-5 py-3.5 text-slate-300">Binary for key calendar events (0/1)</td>
                  </tr>
                  <tr className="bg-[#17D059]/5">
                    <td className="px-5 py-3.5 font-mono text-[#17D059] font-bold">Economy Occupancy</td>
                    <td className="px-5 py-3.5 text-white font-semibold">Historical Economy turnout (Target 1)</td>
                  </tr>
                  <tr className="bg-cyan-500/5">
                    <td className="px-5 py-3.5 font-mono text-cyan-400 font-bold">Premium Occupancy</td>
                    <td className="px-5 py-3.5 text-white font-semibold">Historical Premium turnout (Target 2)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 4: SCORING & EVALUATION */}
        <section id="scoring-evaluation" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Award size={24} />
            </div>
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider">Section 04</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Scoring System & Evaluation Rubric (100 Points)</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-8 rounded-3xl bg-[#0B1222] border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-black text-[#17D059]">60%</span>
                <span className="px-3 py-1 rounded-full bg-[#17D059]/20 text-[#17D059] text-xs font-black uppercase">Weightage</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Forecast Accuracy</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                Forecasts are matched against actual event turnouts using a balanced relative percentage accuracy model:
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#17D059] shrink-0 mt-0.5" />
                  <span><strong>Balanced Accuracy:</strong> Evaluates Economy and Premium Economy categories separately to ensure fair weighting.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#17D059] shrink-0 mt-0.5" />
                  <span><strong>Relative Error Normalization:</strong> Prevents smaller absolute Premium numbers from being overshadowed by large Economy volumes.</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#0B1222] border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-black text-cyan-400">40%</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-black uppercase">Weightage</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Analytical Logic & Strategy</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                Evaluated by faculty and judges across six core analytical competencies:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">1. Data Understanding</div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">2. Demand Driver ID</div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">3. Method Appropriateness</div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">4. Validation & Rigor</div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">5. Scenario Interpretation</div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">6. Explanatory Clarity</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: THE SIX LIVE ROUNDS */}
        <section id="six-rounds" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Calendar size={24} />
            </div>
            <div>
              <span className="text-xs font-mono text-blue-400 uppercase font-bold tracking-wider">Section 05</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">The Six Live Forecasting Rounds</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { round: 1, code: 'T061', title: 'Monsoon Disruption', month: '7', detail1Label: 'Season', detail1Val: 'Monsoon', detail2Label: 'Weather Disruption', detail2Val: 'Level 8/10', badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
              { round: 2, code: 'T062', title: 'Fuel Duty Hike + Independence Day', month: '8', detail1Label: 'Flags', detail1Val: 'Monsoon + Festive', detail2Label: 'Special Event', detail2Val: 'Independence Day', badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30' },
              { round: 3, code: 'T063', title: 'GST Rate Cut', month: '9', detail1Label: 'Avg Fares', detail1Val: 'Lowered', detail2Label: 'Booking Pattern', detail2Val: 'Pre-festive Spike', badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30' },
              { round: 4, code: 'T064', title: 'Diwali Festive Peak', month: '10', detail1Label: 'Flags', detail1Val: 'Festive + Special Event', detail2Label: 'Leisure Demand', detail2Val: 'Very High', badgeColor: 'bg-red-500/10 text-red-400 border-red-500/30' },
              { round: 5, code: 'T065', title: 'Wedding Season + Corporate Year-End', month: '11', detail1Label: 'Flags', detail1Val: 'Wedding Season', detail2Label: 'Corporate Activity', detail2Val: 'High Index', badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/30' },
              { round: 6, code: 'T066', title: 'New Year Holidays', month: '12', detail1Label: 'Flags', detail1Val: 'Festive + Wedding', detail2Label: 'Leisure Demand', detail2Val: 'Strong', badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30' },
            ].map((r) => (
              <div key={r.round} className="bg-[#0B1222] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-slate-400">ROUND 0{r.round}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${r.badgeColor}`}>
                      {r.code}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{r.title}</h3>
                  <div className="text-xs text-slate-400 mb-4 font-semibold">Month: {r.month}</div>
                  
                  <div className="space-y-2 text-xs text-slate-300 bg-[#030712] p-4 rounded-xl border border-slate-800">
                    <div className="flex justify-between">
                      <span className="text-slate-500">{r.detail1Label}:</span>
                      <span className="font-semibold text-white">{r.detail1Val}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">{r.detail2Label}:</span>
                      <span className="font-semibold text-[#17D059]">{r.detail2Val}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Duration: 10 mins</span>
                  <span className="text-[#17D059]">Live Evaluated</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: TOURNAMENT RULES & CHECKLIST */}
        <section id="rules-checklist" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
              <ShieldAlert size={24} />
            </div>
            <div>
              <span className="text-xs font-mono text-red-400 uppercase font-bold tracking-wider">Section 06</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Rules of the Game & Pre-Submission Checklist</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-[#0B1222] border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Rule I: Strict 10-Minute Time Limit</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Each round provides exactly 10 minutes of active forecasting time. Countdown commences automatically upon round reveal.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0B1222] border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Rule II: Final Submissions Only</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Once the 10-minute round closes, no modifications can be submitted. The server's recorded submission is treated as final.
              </p>
            </div>
          </div>

          {/* CHECKLIST */}
          <div className="bg-gradient-to-r from-emerald-950/40 via-[#0B1222] to-[#0B1222] border border-emerald-800/40 rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-[#17D059]" size={22} />
              Before Submitting, Verify the 4 Mandatory Checks:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-200">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#030712] border border-slate-800">
                <span className="w-5 h-5 rounded-full bg-[#17D059]/20 text-[#17D059] flex items-center justify-center font-bold text-xs">✓</span>
                <span>Economy forecast is strictly between <strong>0 and 25,000</strong></span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#030712] border border-slate-800">
                <span className="w-5 h-5 rounded-full bg-[#17D059]/20 text-[#17D059] flex items-center justify-center font-bold text-xs">✓</span>
                <span>Premium Economy forecast is strictly between <strong>0 and 5,000</strong></span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#030712] border border-slate-800">
                <span className="w-5 h-5 rounded-full bg-[#17D059]/20 text-[#17D059] flex items-center justify-center font-bold text-xs">✓</span>
                <span>Both numerical forecast fields are populated</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#030712] border border-slate-800">
                <span className="w-5 h-5 rounded-full bg-[#17D059]/20 text-[#17D059] flex items-center justify-center font-bold text-xs">✓</span>
                <span>Analytical reasoning and methodology are entered</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BOTTOM BAR */}
        <section className="text-center bg-gradient-to-br from-[#074870]/40 via-slate-900 to-[#17D059]/10 border border-slate-800 rounded-3xl p-8 sm:p-12">
          <h2 className="text-3xl font-black text-white mb-3">Ready to Enter the Arena?</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Historical Data + Analytics + Scenario Interpretation + Business Judgment = Defensible Forecast.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/login"
              className="px-8 py-4 bg-gradient-to-r from-[#17D059] to-emerald-600 text-slate-950 font-black text-base rounded-full hover:scale-105 transition-all shadow-xl shadow-[#17D059]/20 flex items-center gap-2"
            >
              <Target size={20} /> ENTER THE WAR ROOM
            </Link>
            <Link
              href="/game/market"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold text-base rounded-full transition-colors flex items-center gap-2 border border-slate-700"
            >
              <Database size={20} /> View Historical Data Archive
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
