import {Text, type TextProps} from "@mantine/core";
import {colors} from "../../Colors.ts";

type Props = TextProps

export function DefaultText(props:Props) {
  return <Text {...props} fw={500} c={colors.text}/>
}