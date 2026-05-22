import React, { createContext, useContext, useState } from "react";
import { cn } from "./utils";

const TabsContext = createContext(null);

export function Tabs({ defaultValue, value, onValueChange, className = "", children }) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const activeValue = value ?? internalValue;

  const setValue = (nextValue) => {
    setInternalValue(nextValue);
    onValueChange?.(nextValue);
  };

  return (
    <TabsContext.Provider value={{ activeValue, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className = "", children }) {
  return (
    <div className={cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className)}>
      {children}
    </div>
  );
}

export function TabsTrigger({ value, className = "", children }) {
  const context = useContext(TabsContext);
  const isActive = context?.activeValue === value;

  return (
    <button
      type="button"
      onClick={() => context?.setValue(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all",
        isActive ? "bg-background text-foreground shadow-sm" : "hover:text-foreground",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, className = "", children }) {
  const context = useContext(TabsContext);

  if (context?.activeValue !== value) return null;
  return <div className={cn("mt-2", className)}>{children}</div>;
}
