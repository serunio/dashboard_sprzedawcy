import {Text} from "@mantine/core";
import {colors} from "../../Colors.ts";
import type {ReactNode} from "react";

type Props = { children: ReactNode };

export function DefaultText({children}: Props) {
  return <Text fw={500} c={colors.text}>{children}</Text>
}