import React, { ReactNode, ComponentType } from 'react'

interface ChildType {
  type?: {
    displayName?: string
    name?: string
  }
}

// https://medium.com/maxime-heckel/react-sub-components-513f6679abed
export const findByType = (
  children: ReactNode,
  component: ComponentType
): ReactNode | undefined => {
  const result: ReactNode[] = []
  /* This is the array of result since Article can have multiple times the same sub-component */
  const type = [component.displayName] || [component.name]
  /* We can store the actual name of the component through the displayName or name property of our sub-component */
  React.Children.forEach(children, (_child) => {
    const child = (_child as unknown) as ReactNode & ChildType
    const childType =
      child && child.type && (child.type.displayName || child.type.name)

    if (type.includes(childType)) {
      result.push(child)
    }
  })
  /* Then we go through each React children, if one of matches the name of the sub-component we’re looking for we put it in the result array */
  return result[0]
}
