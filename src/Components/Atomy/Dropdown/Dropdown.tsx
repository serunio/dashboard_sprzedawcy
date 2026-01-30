import {NativeSelect, type NativeSelectProps} from "@mantine/core";
import classes from './Dropdown.module.css'

export function Dropdown(props:NativeSelectProps) {

  return <NativeSelect {...props} classNames={classes}/>
}