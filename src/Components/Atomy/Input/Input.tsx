import {TextInput, type TextInputProps} from "@mantine/core";
import classes from './Input.module.css'
import type {RefObject} from "react";

export function Input({ref, ...props}: {ref: RefObject<HTMLInputElement | null>, props?:TextInputProps }) {
  return <TextInput {...props} ref={ref} classNames={classes}/>
}