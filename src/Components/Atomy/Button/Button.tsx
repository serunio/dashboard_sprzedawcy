import {Button as MantineButton, type ButtonProps} from "@mantine/core";
import * as React from "react";
import classes from './Button.module.css'

type Props = ButtonProps & React.ComponentPropsWithoutRef<'button'>

export function Button(props: Props){
  return <MantineButton {...props} classNames={classes}/>
}