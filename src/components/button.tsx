import * as React from "react"

import {
  Button as UiButton,
  type ButtonProps as UiButtonProps,
  buttonVariants,
} from "@/components/ui/button"

export type ButtonProps = UiButtonProps

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <UiButton ref={ref} {...props} />,
)

Button.displayName = "Button"

export { buttonVariants }
