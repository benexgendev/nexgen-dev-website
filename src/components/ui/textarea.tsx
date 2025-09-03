import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "flex min-h-[80px] w-full transition-all duration-300 placeholder:text-slate-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-none",
  {
    variants: {
      variant: {
        default: "bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "px-3 py-2 text-sm",
        sm: "px-3 py-1.5 text-xs",
        lg: "px-4 py-3 text-base",
      },
      radius: {
        default: "rounded-sm",
        sm: "rounded-sm", 
        lg: "rounded-sm",
        none: "rounded-none",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default",
    },
  }
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: string
  error?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, size, radius, label, error, ...props }, ref) => {
    const textareaId = React.useId()
    
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={textareaId}
            className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2 sm:mb-3"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(textareaVariants({ variant, size, radius, className }))}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-red-400 text-xs mt-1">{error}</p>
        )}
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea, textareaVariants }