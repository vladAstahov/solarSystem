import React from "react";
// import ReactTransitionGroup from 'react-addons-transition-group'
import {DefaultProps, IconName, TagPropsType, ViewPropsType} from "../../../types/helpers";
import {IconBase} from "../IconBase";
import {useEffect, useRef} from "react";

export type ButtonProps = {
    tag?: Extract<TagPropsType, 'button' | 'a'>
    view?: Extract<ViewPropsType, 'brand' | 'secondary' | 'flat' | 'flat-brand' | 'critical'>
    loading?: boolean
    disabled?: boolean
    href?: string
    iconLeft?: IconName
    iconRight?: IconName
    ariaLabel: string
} & ButtonHandlers & DefaultProps

export type ButtonHandlers = {
    clickHandler: () => void
}

export default function Button(props: ButtonProps): JSX.Element {
    const buttonRef = useRef(null)

    // let width: Maybe<string> = null
    let timeout = {} as ReturnType<typeof setTimeout>
    // let timeoutDelay = 300

    const classes = () => {
        const classes = [
            'button',
            `button--view-${props.view || 'brand'}`
        ]

        if (props.loading) {
            classes.push('is-loading')
        }

        if (props.disabled) {
            classes.push('is-disabled')
        }

        return classes.join(' ')
    }

    const buttonIcon = (icon: IconName) => <IconBase name={icon}></IconBase>
    const buttonMain = <div className="button__main">
        {props.children}
    </div>

    const buttonContent = <div className="button__content">
        {props.iconLeft ? buttonIcon(props.iconLeft) : null}
        {props.children ? buttonMain : null}
        {props.iconRight ? buttonIcon(props.iconRight) : null}
    </div>

    const buttonTransition = <div>
        {!props.loading ? buttonContent : null}
    </div>

    // const buttonTransition = <ReactTransitionGroup component="div">
    //     {!props.loading ? buttonContent : null}
    // </ReactTransitionGroup>

    const buttonWrapper = <>
        {props.tag === 'a' ? <a ref={buttonRef} className={classes()} href={props.href}>{buttonTransition}</a> : null }
        {props.tag !== 'a' ? <button ref={buttonRef} className={classes()} onClick={() => props.clickHandler()}>{buttonTransition}</button> : null }
    </>

    useEffect(() => {
        clearTimeout(timeout)

        if (props.loading) {
            console.log(buttonRef)
        } else {

        }
    }, [props.loading])

    return buttonWrapper
}