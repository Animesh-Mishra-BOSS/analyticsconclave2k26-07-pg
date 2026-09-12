export interface RoundData {
  roundNumber: number;
  title: string;
  theme: string;
  monthOfYear: number;
  isSummerVacation: number;
  isMonsoon: number;
  isFestiveHoliday: number;
  isWeddingSeason: number;
  fuelPriceIndex: number;
  leisureDemandIndex: number;
  corporateActivityIndex: number;
  capacityEconomy: number;
  capacityPremium: number;
  competitorCapacityIndex: number;
  avgFareEconomy: number;
  avgFarePremium: number;
  promoIntensity: number;
  weatherDisruptionIndex: number;
  specialEventFlag: number;
  instructions: string;
  status: string;
  timerSeconds: number;
}

export interface SubmissionResult {
  predictedGa: number;
  predictedVip: number;
  actualGa?: number;
  actualVip?: number;
  gaError?: number;
  vipError?: number;
  accuracy?: number;
  score?: number;
}

export interface GameResults {
  totalScore: number;
  submissions: SubmissionResult[];
}

export interface TrainingEvent {
  eventId: string;
  t: number;
  monthOfYear: number;
  isSummerVacation: number;
  isMonsoon: number;
  isFestiveHoliday: number;
  isWeddingSeason: number;
  fuelPriceIndex: number;
  leisureDemandIndex: number;
  corporateActivityIndex: number;
  capacityEconomy: number;
  capacityPremium: number;
  competitorCapacityIndex: number;
  avgFareEconomy: number;
  avgFarePremium: number;
  promoIntensity: number;
  weatherDisruptionIndex: number;
  specialEventFlag: number;
  economySeats: number;
  premiumEconomySeats: number;
}

export interface TeamData {
  id: string;
  name: string;
  teamCode: string;
  currentRound: number;
  totalScore: number;
  status: string;
}

export const ROUND_THEMES: Record<number, { name: string; code: string; emoji: string; color: string }> = {
  1: { name: 'Standard Flight Baseline', code: 'T061', emoji: '✈️', color: '#17D059' },
  2: { name: 'Holiday Surge & Competition', code: 'T062', emoji: '🌧', color: '#2563EB' },
  3: { name: 'Monsoon Impact', code: 'T063', emoji: '💰', color: '#7C3AED' },
  4: { name: 'Wedding Season Clash', code: 'T064', emoji: '🎉', color: '#DC2626' },
  5: { name: 'High Promo / High Fuel', code: 'T065', emoji: '💒', color: '#EA580C' },
  6: { name: 'Peak Corporate Finale', code: 'T066', emoji: '🎄', color: '#F59E0B' }
};

export const HOW_IT_WORKS_STEPS = [
  "Analyze the 60 historical events & demand drivers",
  "Evaluate round parameters (Fares, Capacities, Seasonality, Fuel, Promos)",
  "Submit Economy (0–25k) & Premium (0–5k) occupancy forecasts + written reasoning",
  "Score on 60% Forecast Accuracy + 40% Analytical Logic & Strategy"
];

