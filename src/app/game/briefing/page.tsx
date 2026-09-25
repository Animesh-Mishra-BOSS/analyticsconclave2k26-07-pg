'use client';

import { useState, useEffect, useMemo, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer
} from 'recharts';
import {
  BookOpen, Database, Download, ChevronDown, ChevronUp,
  Sun, CloudRain, Sparkles, Heart, Fuel, Palmtree, Briefcase, PlaneTakeoff,
  Armchair, Crown, Users, IndianRupee, Megaphone, CloudLightning, Star,
  TrendingUp, Target, Filter, DollarSign, Gem
} from 'lucide-react';

/* ── Collapsible Section ─────────────────────────────────── */
function Section({ title, children, defaultOpen = true }: {
  title: string; children: React.ReactNode; defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl border border-slate-700 overflow-hidden bg-[#0B1222]">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-8 py-5 hover:bg-slate-800/40 transition-colors text-left"
      >
        <span className="font-bold text-white text-lg">{title}</span>
        {open ? <ChevronUp size={18} className="text-slate-400" /> : <ChevronDown size={18} className="text-slate-400" />}
      </button>
      {open && <div className="px-8 pb-6 text-slate-300 text-base leading-7">{children}</div>}
    </div>
  );
}

/* ── Custom Tooltip for Chart ─────────────────────────────── */
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div className="bg-[#0B1222] border border-slate-700 rounded-xl p-3 text-xs shadow-xl">
        <div className="font-mono font-bold text-slate-300 mb-1">{label}</div>
        {payload.map((p: any) => (
          <div key={p.name} style={{ color: p.color }} className="font-bold">
            {p.name}: {p.value?.toLocaleString()}
          </div>
        ))}
      </div>
    );
  }
  return null;
};

/* ── Main Briefing Page ───────────────────────────────────── */
function BriefingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  // When opened in a new tab from the game page (?ref=game), hide the Enter Round CTA
  const isReferenceTab = searchParams.get('ref') === 'game';
  const [activeTab, setActiveTab] = useState<'study' | 'data'>('study');
  const [histData, setHistData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [monthFilter, setMonthFilter] = useState('');
  const [currentRound, setCurrentRound] = useState(1);

  // Fetch current round number so the CTA shows the right round
  useEffect(() => {
    fetch('/api/game/status')
      .then(r => r.json())
      .then(d => { if (d.currentRound) setCurrentRound(d.currentRound); })
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetch('/api/game/training-data')
      .then(r => r.json())
      .then(json => setHistData(json.data || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const uniqueMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const filtered = useMemo(() =>
    histData.filter((d: any) =>
      (!monthFilter || d.monthOfYear === parseInt(monthFilter))
    ), [histData, monthFilter]);

  /* Chart data — x axis = eventId, two lines = economy & premium */
  const chartData = useMemo(() =>
    filtered.map((d: any) => ({
      id: d.eventId,
      Economy: d.economySeats,
      Premium: d.premiumEconomySeats,
      month: d.monthOfYear,
    })), [filtered]);

  /* Download CSV */
  const downloadCSV = () => {
    const headers = ['Event_ID','Month_Of_Year','Summer_Vacation','Monsoon','Festive_Holiday','Wedding_Season','Fuel_Price_Index',
                     'Leisure_Demand_Index','Corporate_Activity_Index','Economy_Capacity','Premium_Capacity','Competitor_Capacity_Index',
                     'Avg_Economy_Fare','Avg_Premium_Fare','Promo_Intensity','Weather_Disruption_Index','Special_Event_Flag',
                     'Economy_Seats','Premium_Economy_Seats'];
    const rows = histData.map((d: any) => [
      d.eventId, d.monthOfYear, d.isSummerVacation, d.isMonsoon, d.isFestiveHoliday, d.isWeddingSeason, d.fuelPriceIndex,
      d.leisureDemandIndex, d.corporateActivityIndex, d.capacityEconomy, d.capacityPremium, d.competitorCapacityIndex,
      d.avgFareEconomy, d.avgFarePremium, d.promoIntensity, d.weatherDisruptionIndex, d.specialEventFlag,
      d.economySeats, d.premiumEconomySeats
    ]);
    const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = 'AeroNexus_HistoricalData.csv';
    a.click(); URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-[#030712] text-white pb-28">

      {/* ── Hero strip ──────────────────────────────── */}
      <div className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-r from-[#030712] via-[#06111F] to-[#030712] py-8 px-6 text-center">
        {/* Airplane background accent */}
        <img
          src="/airplane.png"
          alt=""
          className="absolute right-[-5%] top-[50%] -translate-y-1/2 w-[45%] max-w-lg opacity-[0.06] rotate-[-3deg] select-none pointer-events-none"
          draggable={false}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#17D059]/10 border border-[#17D059]/30 text-[#17D059] text-xs font-mono font-bold uppercase tracking-widest mb-3">
            PG Business Analytics Game 2026
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mb-2 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            War Room Briefing
          </h1>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Study the airline data, analyse 60 historical monthly records, and download the data.
          </p>
        </div>
      </div>

      {/* ── Tab bar ── sticky, full-width, flush under header ── */}
      <div className="sticky top-0 z-40 bg-[#030712] backdrop-blur-md border-b-2 border-slate-700 shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
        <div className="flex max-w-6xl mx-auto">
          {([
            { id: 'study', label: 'Case Study',     Icon: BookOpen },
            { id: 'data',  label: 'Historical Data', Icon: Database },
          ] as const).map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex-1 flex items-center justify-center gap-2.5 py-4 text-base font-bold border-b-2 -mb-[2px] transition-all whitespace-nowrap ${
                activeTab === id
                  ? 'border-[#17D059] text-[#17D059]'
                  : 'border-transparent text-slate-400 hover:text-white hover:border-slate-600'
              }`}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 pb-32">

        {/* ═══════════════ CASE STUDY ═══════════════ */}
        {activeTab === 'study' && (
          <div className="space-y-6">

            <Section title="📋 Business Scenario">
              <p className="mb-3">
                You are a team of Business Analytics Consultants supporting the demand-planning team of a growing Indian airline. The airline operates a fleet of narrow-body aircraft on domestic trunk routes and needs accurate seat-demand forecasts for both Economy and Premium Economy cabins. Your forecasts feed into the Revenue Management System (RMS) that sets fare buckets and inventory controls. Over-forecasting leads to surplus unsold inventory and discounted last-minute fares; under-forecasting means rejected bookings and revenue leakage. Your task: use the 60 historical monthly records (T001–T060) to identify demand patterns and predict Economy Seats (range: ~16,000–22,000) and Premium Economy Seats (range: ~1,600–2,500) for each of 6 future scenario months.
              </p>
            </Section>




            <Section title="📊 Variable Dictionary — The 15 Demand Drivers">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 pr-4 text-slate-400 font-mono text-xs uppercase">Variable</th>
                      <th className="text-left py-2 text-slate-400 font-mono text-xs uppercase">Description &amp; Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {[
                      { icon: Sun, color: 'text-amber-400', var: 'Summer Vacation (0/1)', desc: 'Binary flag for summer months (Apr-Jun). Boosts leisure demand and Economy occupancy.' },
                      { icon: CloudRain, color: 'text-blue-400', var: 'Monsoon (0/1)', desc: 'Binary flag for monsoon months (Jul-Sep). Depresses overall demand, especially with weather disruptions.' },
                      { icon: Sparkles, color: 'text-yellow-400', var: 'Festive Holiday (0/1)', desc: 'Binary flag for festive periods (Diwali, Christmas, etc.). Strong demand driver for both cabins.' },
                      { icon: Heart, color: 'text-pink-400', var: 'Wedding Season (0/1)', desc: 'Binary flag for wedding season. Lifts Premium Economy demand significantly.' },
                      { icon: Fuel, color: 'text-slate-400', var: 'Fuel Price Index', desc: 'Index value (~90-110). Higher fuel costs may reduce capacity and raise fares, indirectly affecting demand.' },
                      { icon: Palmtree, color: 'text-green-400', var: 'Leisure Demand Index', desc: 'Index value (~95-160). Direct driver of Economy cabin demand. Holiday and festive peaks push this high.' },
                      { icon: Briefcase, color: 'text-indigo-400', var: 'Corporate Activity Index', desc: 'Index value (~98-130). Primary driver of Premium Economy demand. Year-end corporate travel pushes this up.' },
                      { icon: Armchair, color: 'text-emerald-400', var: 'Economy Capacity (seats)', desc: 'Available Economy seats (~17,800-22,000). Sets the upper bound for Economy occupancy.' },
                      { icon: Crown, color: 'text-cyan-400', var: 'Premium Capacity (seats)', desc: 'Available Premium Economy seats (~2,100-2,600). Sets the upper bound for Premium occupancy.' },
                      { icon: Users, color: 'text-red-400', var: 'Competitor Capacity Index', desc: 'Index value (~92-112). Higher competition can dilute your airline\'s market share.' },
                      { icon: IndianRupee, color: 'text-teal-400', var: 'Avg Economy Fare (₹)', desc: 'Average Economy fare (~₹3,200-4,300). Lower fares can stimulate demand; higher fares may suppress it.' },
                      { icon: DollarSign, color: 'text-blue-500', var: 'Avg Premium Fare (₹)', desc: 'Average Premium Economy fare (~₹9,200-10,800). Premium passengers are less fare-sensitive.' },
                      { icon: Megaphone, color: 'text-orange-400', var: 'Promo Intensity (0-3)', desc: '0=none, 1=light, 2=moderate, 3=heavy. Higher promotions boost Economy demand more than Premium.' },
                      { icon: CloudLightning, color: 'text-gray-400', var: 'Weather Disruption Index (0-10)', desc: '0=clear, 10=severe. High disruption (monsoon floods) significantly reduces demand.' },
                      { icon: Star, color: 'text-purple-400', var: 'Special Event Flag (0/1)', desc: 'Binary flag for special events (Independence Day, etc.). Can provide demand boost.' }
                    ].map((d, i) => (
                      <tr key={i} className="hover:bg-slate-800/20 transition-colors">
                        <td className="py-3 pr-4 align-top">
                          <div className="flex items-center gap-2">
                            <d.icon size={14} className={d.color} />
                            <span className="font-bold text-white text-xs whitespace-nowrap">{d.var}</span>
                          </div>
                        </td>
                        <td className="py-3 text-slate-400 text-xs leading-relaxed">{d.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            <Section title="🏆 Evaluation Rubric">
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="p-4 rounded-xl bg-[#17D059]/5 border border-[#17D059]/20">
                  <div className="text-3xl font-black text-[#17D059] mb-1">60%</div>
                  <div className="font-bold text-white text-sm">Forecast Accuracy</div>
                  <div className="text-xs text-slate-400 mt-1">How close your Economy &amp; Premium predictions are to actual figures</div>
                </div>
                <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                  <div className="text-3xl font-black text-cyan-400 mb-1">40%</div>
                  <div className="font-bold text-white text-sm">Analytical Reasoning</div>
                  <div className="text-xs text-slate-400 mt-1">Quality of logic, use of historical data, and variable analysis in your write-up</div>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-amber-900/20 border border-amber-800/30">
                <div className="text-amber-300 font-bold text-xs mb-1">💡 Judge's Note</div>
                <div className="text-amber-200/80 text-xs">A well-reasoned answer with moderate accuracy can outscore a lucky guess with poor reasoning. Always explain WHY — which historical patterns, which variables, and how you adjusted.</div>
              </div>
            </Section>

            <Section title="⏱ Rules & Format" defaultOpen={false}>
              <ul className="space-y-2 text-slate-400 text-sm">
                {[
                  ['10 minutes per round', 'Strictly enforced. Auto-submits zeros if time expires.'],
                  ['Submit anytime', 'Use the green Submit button at the top of the game screen. Submit early if confident.'],
                  ['Submissions are final', 'No edits after submission. Double-check before clicking Submit.'],
                  ['Both fields required', 'Economy AND Premium Economy must be filled for every round.'],
                  ['6 rounds total', 'Records T061 to T066. Briefing data (T001–T060) is your training set.'],
                  ['No team sharing', 'Do not share answers between teams during live rounds.'],
                ].map(([rule, detail], i) => (
                  <li key={i} className="flex gap-3 p-3 rounded-lg bg-[#0A111F] border border-slate-800">
                    <span className="text-[#17D059] font-black shrink-0">→</span>
                    <div>
                      <div className="font-bold text-white text-sm">{rule}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{detail}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </Section>

          </div>
        )}

        {/* ═══════════════ HISTORICAL DATA ═══════════════ */}
        {activeTab === 'data' && (
          <div className="space-y-6">

            {/* Controls row */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 bg-[#0B1222] border border-slate-700 rounded-xl px-3 py-2">
                <Filter size={14} className="text-slate-500" />
                <select
                  value={monthFilter}
                  onChange={e => setMonthFilter(e.target.value)}
                  className="bg-transparent text-sm text-white focus:outline-none"
                >
                  <option value="">All Months</option>
                  {uniqueMonths.map(m => <option key={m} value={m}>Month {m}</option>)}
                </select>
              </div>
              
              {monthFilter && (
                <button
                  onClick={() => setMonthFilter('')}
                  className="text-xs text-red-400 hover:text-red-300 px-3 py-2 border border-red-800/40 rounded-xl"
                >✕ Clear filter</button>
              )}
              <div className="ml-auto">
                <button
                  onClick={downloadCSV}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#17D059] to-emerald-500 text-slate-950 font-black text-sm rounded-xl hover:opacity-90 transition-all shadow-lg shadow-[#17D059]/20"
                >
                  <Download size={15} /> Download CSV
                </button>
              </div>
            </div>

            {/* Stats summary */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Records Shown',     value: filtered.length, color: 'text-white' },
                { label: 'Avg Economy',         value: filtered.length ? Math.round(filtered.reduce((s,d)=>s+d.economySeats,0)/filtered.length).toLocaleString() : '—', color: 'text-[#17D059]' },
                { label: 'Avg Premium',       value: filtered.length ? Math.round(filtered.reduce((s,d)=>s+d.premiumEconomySeats,0)/filtered.length).toLocaleString() : '—', color: 'text-cyan-400'   },
                { label: 'Max Economy',         value: filtered.length ? Math.max(...filtered.map(d=>d.economySeats)).toLocaleString() : '—', color: 'text-amber-400' },
              ].map((s,i) => (
                <div key={i} className="bg-[#0B1222] border border-slate-700 rounded-xl p-3 text-center">
                  <div className="text-xs text-slate-500 mb-1">{s.label}</div>
                  <div className={`text-xl font-black ${s.color}`}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* Line Chart */}
            <div className="bg-[#0B1222] border border-slate-700 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="font-bold text-white">Occupancy Trend Chart</div>
                  <div className="text-xs text-slate-500 mt-0.5">Economy &amp; Premium occupancy across {filtered.length} records</div>
                </div>
                <div className="flex gap-4 text-xs">
                  <div className="flex items-center gap-1.5"><div className="w-3 h-0.5 bg-[#17D059] rounded" /><span className="text-slate-400">Economy</span></div>
                  <div className="flex items-center gap-1.5"><div className="w-3 h-0.5 bg-cyan-400 rounded" /><span className="text-slate-400">Premium</span></div>
                </div>
              </div>
              {loading ? (
                <div className="flex items-center justify-center h-48">
                  <div className="w-8 h-8 border-2 border-[#17D059] border-t-transparent rounded-full animate-spin" />
                </div>
              ) : (
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis
                      dataKey="id"
                      tick={{ fill: '#64748b', fontSize: 9, fontFamily: 'monospace' }}
                      interval={4}
                      tickLine={false}
                      axisLine={{ stroke: '#1e293b' }}
                    />
                    <YAxis
                      tick={{ fill: '#64748b', fontSize: 10 }}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(v) => `${(v/1000).toFixed(0)}k`}
                      width={36}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                      type="monotone"
                      dataKey="Economy"
                      stroke="#17D059"
                      strokeWidth={2}
                      dot={{ fill: '#17D059', r: 2, strokeWidth: 0 }}
                      activeDot={{ r: 5 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="Premium"
                      stroke="#22d3ee"
                      strokeWidth={2}
                      dot={{ fill: '#22d3ee', r: 2, strokeWidth: 0 }}
                      activeDot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>

            {/* Full data table */}
            <div className="bg-[#0B1222] border border-slate-700 rounded-2xl overflow-hidden">
              <div className="px-5 py-3 border-b border-slate-700 flex items-center justify-between">
                <div className="font-bold text-white text-sm">Full Event Log — {filtered.length} records</div>
                <div className="text-xs text-slate-500 font-mono">T001 – T060</div>
              </div>
              <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
                <table className="w-full text-xs">
                  <thead className="sticky top-0 bg-[#060C1A] border-b border-slate-700">
                    <tr>
                      {['Event ID','Month','Summer/Monsoon','Festive/Wedding','Fuel/Leis/Corp Ind','Cap Eco/Prem','Comp Cap/Promo/Weath','Eco Fare','Prem Fare','Eco Seats','Prem Seats'].map(h => (
                        <th key={h} className="px-3 py-2.5 text-left text-slate-400 font-mono uppercase text-[10px] whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {filtered.map((d: any, i: number) => (
                      <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                        <td className="px-3 py-2 font-mono text-slate-400 text-[11px]">{d.eventId}</td>
                        <td className="px-3 py-2 font-bold text-white">{d.monthOfYear}</td>
                        <td className="px-3 py-2 text-slate-300">{d.isSummerVacation ? '1(Yes)' : '0(No)'}/{d.isMonsoon ? '1(Yes)' : '0(No)'}</td>
                        <td className="px-3 py-2 text-center text-amber-400 font-bold">{d.isFestiveHoliday ? '1(Yes)' : '0(No)'}/{d.isWeddingSeason ? '1(Yes)' : '0(No)'}</td>
                        <td className="px-3 py-2 text-center text-purple-400 font-bold">{d.fuelPriceIndex}/{d.leisureDemandIndex}/{d.corporateActivityIndex}</td>
                        <td className="px-3 py-2 text-slate-300">{d.capacityEconomy}/{d.capacityPremium}</td>
                        <td className="px-3 py-2 text-slate-300">{d.competitorCapacityIndex}/{d.promoIntensity}/{d.weatherDisruptionIndex}</td>
                        <td className="px-3 py-2 text-slate-300">₹{d.avgFareEconomy}</td>
                        <td className="px-3 py-2 text-slate-300">₹{d.avgFarePremium}</td>
                        <td className="px-3 py-2 font-mono font-black text-[#17D059] text-right">{d.economySeats?.toLocaleString()}</td>
                        <td className="px-3 py-2 font-mono font-black text-cyan-400 text-right">{d.premiumEconomySeats?.toLocaleString()}</td>
                      </tr>
                    ))}
                    {filtered.length === 0 && (
                      <tr><td colSpan={11} className="px-3 py-10 text-center text-slate-600">No events match current filters</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}
      </div>

      {/* ── Sticky Enter Round CTA ── only shown when navigating directly (not opened as reference tab) */}
      {!isReferenceTab && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-800 bg-[#030712]/95 backdrop-blur-md">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-6 py-4">
            <div className="text-sm text-slate-400 hidden sm:block">
              {currentRound > 6 ? (
                <><span className="text-emerald-400 font-bold">✓ All rounds complete.</span> Thank you for participating!</>
              ) : (
                <span className="text-amber-400 font-bold">⚠️ Once you enter the round, you're locked in. You cannot exit until the round ends.</span>
              )}
            </div>
            {currentRound <= 6 ? (
              <button
                onClick={() => router.push('/game')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#17D059] to-emerald-400 text-slate-950 font-black text-base rounded-xl hover:scale-105 transition-all shadow-xl shadow-[#17D059]/25 cursor-pointer"
              >
                Enter Round {currentRound} →
              </button>
            ) : (
              <div className="px-6 py-3 rounded-xl bg-emerald-950/50 border border-emerald-700/50 text-emerald-400 font-bold text-sm">
                ✓ Game Completed
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default function BriefingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#030712]" />}>
      <BriefingContent />
    </Suspense>
  );
}
