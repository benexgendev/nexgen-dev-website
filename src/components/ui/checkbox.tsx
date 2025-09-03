import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority" 
import { cn } from "@/lib/utils"

const checkboxVariants = cva(
  "flex-shrink-0 transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:ring-offset-0 rounded",
  {
    variants: {
      variant: {
        default: "text-blue-500 bg-white/10 border-white/30 focus:ring-blue-400",
        outline: "border-input bg-background",
      },
      size: {
        default: "w-4 h-4 sm:w-5 sm:h-5",
        sm: "w-3.5 h-3.5",
        lg: "w-6 h-6",
      }
    },
    defaultVariants: {
      variant: "default", 
      size: "default",
    },
  }
)

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof checkboxVariants> {
  label?: string
  error?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, variant, size, label, error, ...props }, ref) => {
    const checkboxId = React.useId()
    
    return (
      <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-sm sm:rounded-sm bg-white/5 backdrop-blur-sm border border-white/10">
        <input
          id={checkboxId}
          type="checkbox"
          className={cn(checkboxVariants({ variant, size, className }), "mt-0.5")}
          ref={ref}
          {...props}
        />
        {label && (
          <label 
            htmlFor={checkboxId}
            className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed cursor-pointer"
          >
            {label}
          </label>
        )}
        {error && (
          <p className="text-red-400 text-xs mt-1">{error}</p>
        )}
      </div>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox, checkboxVariants }