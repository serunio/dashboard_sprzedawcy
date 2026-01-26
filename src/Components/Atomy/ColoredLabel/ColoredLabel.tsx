import {Group, Paper, ThemeIcon, Badge, type BadgeProps} from "@mantine/core";
import {type LucideIcon} from "lucide-react";
import classes from './ColoredLabelSmall.module.css'
import {SmallHeader} from "../Label.tsx";

type BigColoredLabelProps = { title: string, Icon: LucideIcon, count?: number, color: string, textColor: string }

export function BigColoredLabel({title, Icon, count, color, textColor}: BigColoredLabelProps) {
  return <Paper bg={color} p={'sm'} bdrs={'md'} shadow={'0'}>
    <Group justify={'space-between'}>
      <Group gap={'xs'}>
        <ThemeIcon color={textColor} variant={'transparent'} size={'sm'}>
          <Icon size={'80%'}/>
        </ThemeIcon>
        <SmallHeader c={textColor}>{title}</SmallHeader>
      </Group>
      <SmallHeader c={textColor} >{count}</SmallHeader>
    </Group>
  </Paper>
}

export function SmallColoredLabel(props:BadgeProps) {
  return (<Badge {...props} lh={'md'} fz={'16'}  fw={'600'} tt={'capitalize'} px={'50'} py={'20'} size={'30'} classNames={classes}/>)
}
