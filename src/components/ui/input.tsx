import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-slate-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "border-none bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3 py-2 text-sm",
        sm: "h-9 px-3 py-1.5 text-xs",
        lg: "h-12 px-4 py-3 text-base",
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

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  label?: string
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, radius, label, error, type, ...props }, ref) => {
    const inputId = React.useId()
    
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={inputId}
            className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2 sm:mb-3"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          type={type}
          className={cn(inputVariants({ variant, size, radius, className  }))}
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
Input.displayName = "Input"

export { Input, inputVariants }