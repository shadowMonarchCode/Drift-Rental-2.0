import React, { Children } from 'react'

export const PrimaryButton = ({children}) => {
  return (
    <div className='primary btn'>{children}</div>
  )
}
export const SecondaryButton = ({children}) => {
  return (
    <div className='secondary btn'>{children}</div>
  )
}