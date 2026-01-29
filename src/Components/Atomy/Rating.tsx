import {Rating as MantineRating, type RatingProps} from "@mantine/core";
import {Star} from "lucide-react";
import {colors} from "../../Colors.ts";

export function Rating(props:RatingProps) {
  return <MantineRating {...props} emptySymbol={<Star size={'20'} fill={colors.secondary} stroke={'none'}/>} fullSymbol={<Star size={'20'} fill={colors.star} stroke={'none'}/>}/>
}