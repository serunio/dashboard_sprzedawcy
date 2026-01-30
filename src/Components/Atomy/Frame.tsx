import {colors} from "../../Colors.ts";
import {type BoxProps, Paper, type PaperProps} from "@mantine/core";
import * as React from "react";

interface FrameProps extends BoxProps, PaperProps {
  children: React.ReactNode
}

export function Frame(props:FrameProps) {
  return <Paper bg={colors.widget} py={'7'} px={'10'} shadow={'0'} withBorder bdrs={'lg'} bd={`2px solid ${colors.secondary} `} {...props}/>
}