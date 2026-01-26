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