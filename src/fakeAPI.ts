import type {ReviewData} from "./Components/Widgets/Customer reviews.tsx";
import type {QualityAspect} from "./Components/Widgets/Seller quality.tsx";
import patelnia from "./img/patelnia-z-pokrywka.jpg"
import serwis from "./img/serwis-obiadowy.jpeg"
import fartuch from "./img/fartuch-kuchenny.avif"
import torebki from "./img/torebki-strunowe.jpg"
import obciazniki from "./img/obciaznki-usb.jfif"


export const reviews: Array<ReviewData> = [
  {
    review: 'Słabiutko',
    date: new Date(2025, 3, 24),
    stars: 2.5
  },
  {
    review: 'Nie polecam',
    date: new Date(2026, 0, 24),
    stars: 1.5
  },
  {
    review: 'Może być',
    date: new Date(2025, 11, 6),
    stars: 4.0
  },
  {
    review: 'Dobry sklep',
    date: new Date(2025, 9, 11),
    stars: 4.5
  },
  {
    review: 'Tak sobie',
    date: new Date(2026, 0, 30),
    stars: 3.0
  },
  {
    review: 'Może być lepiej',
    date: new Date(2025, 11, 12),
    stars: 3.5
  },
]

export const qualityAspects: Array<QualityAspect> = [
  {
    name: 'aspect1',
    value: 0,
    maxValue: 10
  },
  {
    name: 'aspect2',
    value: 1,
    maxValue: 8
  },
  {
    name: 'aspect3',
    value: 1,
    maxValue: 3
  },
  {
    name: 'aspect4',
    value: 1,
    maxValue: 9
  },
  {
    name: 'aspect5',
    value: 1,
    maxValue: 3
  },
]

export const products = [
  {
    name: "Patelnia z pokrywką",
    img: patelnia,
    views: 2534,
    trade: 573,
    sold: 73
  },
  {
    name: "Serwis obiadowy",
    img: serwis,
    views: 3694,
    trade: 341,
    sold: 70
  },
  {
    name: "Fartuch kuchenny",
    img: fartuch,
    views: 3951,
    trade: 841,
    sold: 53
  },
  {
    name: "Torebki strunowe",
    img: torebki,
    views: 4562,
    trade: 174,
    sold: 32
  },
  {
    name: "Obciążniki USB",
    img: obciazniki,
    views: 1213,
    trade: 230,
    sold: 30
  },
]

export const chartData = {
  day: Array.from({length: 24}, (_, h) => ({
    time: h + ':00',
    revenue: Math.round(200 + (Math.random() * 100 - 50)),
    units: Math.round(20 + Math.random() * 10),
    revenueLast: Math.round(180 + (Math.random() * 90 - 45)),
    unitsLast: Math.round(18 + Math.random() * 9)
  })),

  week: Array.from({length: 7}, (_, d) => ({
    time: ['Mon', 'Tue', 'Wed', 'Thu', "Fri", "Sat", "Sun"][d],
    revenue: Math.round(5000 + (Math.random() * 1000 - 500)),
    units: Math.round(80 + Math.random() * 20),
    revenueLast: Math.round(4000 + (Math.random() * 2000 - 1000)),
    unitsLast: Math.round(60 + Math.random() * 15)
  })),

  year: Array.from({length: 12}, (_, m) => ({
    time: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][m],
    revenue: Math.round(3000 * m + 50000 + (Math.random() * 10000 - 5000)),
    units: Math.round(800 + Math.random() * 200),
    revenueLast: Math.round(40000 + (Math.random() * 20000 - 10000)),
    unitsLast: Math.round(600 + Math.random() * 150)
  })),
};

export const profiles = [
  "Przybory kuchenne", "Elektronika", "Narzędzia"
]

