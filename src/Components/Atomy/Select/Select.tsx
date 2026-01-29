import {NativeSelect, type NativeSelectProps} from "@mantine/core";
import classes from './Select.module.css'

export function Select(props:NativeSelectProps) {

  return <NativeSelect {...props} classNames={classes}/>
}