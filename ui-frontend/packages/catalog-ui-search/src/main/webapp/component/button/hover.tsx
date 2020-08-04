import * as React from 'react'
import Button, { ButtonProps } from '@material-ui/core/Button'

/**
 * Allows a button that displays different components when hovering.
 * Otherwise everything else is the same.
 */
export const HoverButton = (
  props: ButtonProps & {
    children: ({ hover }: { hover: boolean }) => JSX.Element
  }
) => {
  const [hover, setHover] = React.useState(false)
  const { children: Children, ...buttonProps } = props
  return (
    <Button
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseOver={() => {
        setHover(true)
      }}
      onMouseOut={() => {
        setHover(false)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
      {...buttonProps}
    >
      <Children hover={hover} />
    </Button>
  )
}
