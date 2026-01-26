import {colors} from "../../Colors.ts";
import {Paper} from "@mantine/core";
import * as React from "react";

export function Frame({children}:{children?: React.ReactNode}) {
  return <Paper children={children} bg={colors.widget} py={'7'} px={'10'} shadow={'0'} withBorder bdrs={'lg'} bd={`2px solid ${colors.secondary}`}/>
}