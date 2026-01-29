import type {ReviewData} from "./Components/Widgets/Customer reviews.tsx";
import type {QualityAspect} from "./Components/Widgets/Seller quality.tsx";
import patelnia from "./img/patelnia-z-pokrywka.jpg"
import serwis from "./img/serwis-obiadowy.jpeg"
import fartuch from "./img/fartuch-kuchenny.avif"
import torebki from "./img/torebki-strunowe.jpg"
import obciazniki from "./img/obciaznki-usb.jfif"


export const reviews: Array<ReviewData> = [
  {
    review: 'Chujowe',
    date: new Date(),
    stars: 2.5
  },
  {
    review: 'Chujowe',
    date: new Date(),
    stars: 1.5
  },
  {
    review: 'Chujowe',
    date: new Date(),
    stars: 4.5
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
    views: 1213,
    trade: 230,
    sold: 30
  },
  {
    name: "Serwis obiadowy",
    img: serwis,
    views: 2534,
    trade: 573,
    sold: 73
  },
  {
    name: "Fartuch kuchenny",
    img: fartuch,
    views: 4562,
    trade: 174,
    sold: 32
  },
  {
    name: "Torebki strunowe",
    img: torebki,
    views: 3951,
    trade: 841,
    sold: 53
  },
  {
    name: "Obciążniki USB",
    img: obciazniki,
    views: 3694,
    trade: 341,
    sold: 70
  },
]

export const chartData = {
    day: Array.from({ length: 24 }, (_, h) => ({
      time: h+':00',
      revenue: 200 + (Math.random() * 100 - 50),
      units: Math.round(20 + Math.random() * 10),
      revenueLast: 180 + (Math.random() * 90 - 45),
      unitsLast: Math.round(18 + Math.random() * 9)
    })),

    week: [
      { time: "Mon", revenue: 4200, units: 72, revenueLast: 3800, unitsLast: 65 },
      { time: "Tue", revenue: 3900, units: 68, revenueLast: 3600, unitsLast: 61 },
      { time: "Wed", revenue: 4500, units: 75, revenueLast: 4100, unitsLast: 70 },
      { time: "Thu", revenue: 4800, units: 81, revenueLast: 4300, unitsLast: 73 },
      { time: "Fri", revenue: 5200, units: 88, revenueLast: 4700, unitsLast: 79 },
      { time: "Sat", revenue: 6100, units: 102, revenueLast: 5800, unitsLast: 97 },
      { time: "Sun", revenue: 5600, units: 95, revenueLast: 5300, unitsLast: 90 }
    ],

    year: [
      { time: "Jan", revenue: 42000, units: 710, revenueLast: 39000, unitsLast: 660 },
      { time: "Feb", revenue: 39800, units: 680, revenueLast: 36500, unitsLast: 630 },
      { time: "Mar", revenue: 45500, units: 760, revenueLast: 42000, unitsLast: 700 },
      { time: "Apr", revenue: 47200, units: 790, revenueLast: 44000, unitsLast: 730 },
      { time: "May", revenue: 51000, units: 840, revenueLast: 48000, unitsLast: 790 },
      { time: "Jun", revenue: 53000, units: 870, revenueLast: 50000, unitsLast: 820 },
      { time: "Jul", revenue: 56000, units: 910, revenueLast: 52000, unitsLast: 850 },
      { time: "Aug", revenue: 54800, units: 890, revenueLast: 51000, unitsLast: 830 },
      { time: "Sep", revenue: 50000, units: 820, revenueLast: 47000, unitsLast: 780 },
      { time: "Oct", revenue: 52000, units: 850, revenueLast: 49000, unitsLast: 810 },
      { time: "Nov", revenue: 48000, units: 790, revenueLast: 45000, unitsLast: 760 },
      { time: "Dec", revenue: 60000, units: 980, revenueLast: 56000, unitsLast: 920 }
    ]
  };
