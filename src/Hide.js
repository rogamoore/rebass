import React from 'react'
import sys from 'system-components'
import { Box } from 'grid-styled'

const withHidden = Component => ({
  xs,
  sm,
  md,
  lg,
  xl,
  xsmall,
  small,
  medium,
  large,
  xlarge,
  display,
  ...props
}) => {
  const Hidden = (
    <Component
      {...props}
      display={display || [
        xs || xsmall,
        sm || small,
        md || medium,
        lg || large,
        xl || xlarge
      ].map(n => n ? 'none' : 'block')}
    />
  )
  return Hidden
}

export const Hide = withHidden(sys({
  is: Box
}, 'display'))

Hide.displayName = 'Hide'

export default Hide
