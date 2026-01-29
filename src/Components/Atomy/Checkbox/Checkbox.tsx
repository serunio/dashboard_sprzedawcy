import {Checkbox as MantineCheckbox, type CheckboxProps} from "@mantine/core";
import {colors} from "../../../Colors.ts";
import classes from './Checkbox.module.css'

export function Checkbox(props:CheckboxProps) {
  return <MantineCheckbox {...props} variant={'outline'} classNames={classes} color={colors.primary}/>
}