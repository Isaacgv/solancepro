import { forwardRef, type ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TextAreaProps = ComponentProps<'textarea'>

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        className={twMerge(
          'px-4 h-36 bg-black border border-zinc-900 rounded-lg placeholder-zinc-400 outline-none text-sm hover:border-zinc-800 focus-visible:border-pink-500 focus-visible:ring-4 ring-pink-500/10',
          props.className
        )}
      />
    )
  }
)

TextArea.displayName = 'TextArea'