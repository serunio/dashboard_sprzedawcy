import {Group, Text, type TextProps, Title, type TitleProps} from "@mantine/core";
import {colors} from "../../Colors.ts";
import * as React from "react";
import type {LucideIcon} from "lucide-react";
import type {ReactNode} from "react";

type Props = TextProps & TitleProps & {children: React.ReactNode}

export function DefaultText(props:Props) {
  return <Text c={colors.text} {...props} fw={500}/>
}

export function SmallText(props:Props) {
  return <Text c={colors.text} {...props} fz={'12'} fw={500}/>
}

export function SmallIconLabel({children, color, Icon}: {children: ReactNode,color: string, Icon:  LucideIcon}) {
  return <Group gap={'3'}><Icon size={'12'} color={color}/><SmallText c={color} children={children}/></Group>
}

export function SmallHeader(props:Props) {
  return <Title c={colors.text} {...props} order={4} />
}

export function BigText(props:Props) {
  return <Text c={colors.text} {...props} fz={'36'} fw={600}/>
}