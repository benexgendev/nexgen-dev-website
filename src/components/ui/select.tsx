import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const selectVariants = cva(
  "flex w-full transition-all duration-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
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

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof selectVariants> {
  label?: string
  error?: string
  options: Array<{ value: string; label: string }>
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant, size, radius, label, error, options, ...props }, ref) => {
    const selectId = React.useId()
    
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={selectId}
            className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2 sm:mb-3"
          >
            {label}
          </label>
        )}
        <select
          id={selectId}
          className={cn(selectVariants({ variant, size, radius, className }))}
          ref={ref}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-slate-800">
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-red-400 text-xs mt-1">{error}</p>
        )}
      </div>
    )
  }
)
Select.displayName = "Select"

export { Select, selectVariants }