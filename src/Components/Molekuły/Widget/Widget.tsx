import * as React from "react";
import style from './Widget.module.css'

type WidgetProps = {children?: React.ReactNode, className?: string}

function Widget({children, className} : WidgetProps) {
    return <>
        <div className={`${style.widget} ${className}`}>
            {children}
        </div>
    </>
}

export default Widget