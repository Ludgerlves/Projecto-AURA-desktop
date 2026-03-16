import React from "react"
import { cn } from "@/lib/utils"

export function AuraLogo({ className, ...props }: React.ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={cn("w-full h-full", className)}
            {...props}
        >
            {/* Back/Left side of A (Dark) */}
            <path
                d="M 50 15 L 25 85 L 42 85 L 53 50 Z"
                fill="currentColor"
                className="text-foreground"
            />
            {/* Front/Right part of A (Primary Cyan) */}
            <path
                d="M 50 15 L 53 50 L 64 85 L 81 85 Z"
                fill="var(--color-primary)"
            />
            {/* Crossbar (Dark) */}
            <path
                d="M 33 65 L 58 65 L 55 55 L 36 55 Z"
                fill="currentColor"
                className="text-foreground"
            />

            {/* Clock joint cut-out & hands */}
            <circle cx="61" cy="45" r="4" fill="var(--color-background)" />
            <circle cx="61" cy="45" r="2.5" fill="var(--color-primary)" />
            {/* Minute hand */}
            <line x1="61" y1="45" x2="85" y2="30" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" />
            {/* Hour hand */}
            <line x1="61" y1="45" x2="80" y2="45" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" />

            {/* Clock ticks on circle edge around (61,45) with radius 28 */}
            <line x1="61" y1="17" x2="61" y2="23" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="75" y1="20.8" x2="72" y2="25.9" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="85.2" y1="31" x2="80.1" y2="34" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="89" y1="45" x2="83" y2="45" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="85.2" y1="59" x2="80.1" y2="56" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="75" y1="69.2" x2="72" y2="64.1" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    )
}
