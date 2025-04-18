
import * as React from "react";
import { LucideProps } from "lucide-react";
import { forwardRef } from "react";

export const Discord = forwardRef<SVGSVGElement, LucideProps>(
  ({ color = "currentColor", size = 24, strokeWidth = 2, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 11.24c0 .56.25 1.01.65 1.01.4 0 .65-.45.65-1.01 0-.56-.25-1.01-.65-1.01-.4 0-.65.45-.65 1.01z" />
      <path d="M14.7 11.24c0 .56.25 1.01.65 1.01.4 0 .65-.45.65-1.01 0-.56-.25-1.01-.65-1.01-.4 0-.65.45-.65 1.01z" />
      <path d="M18.42 5.83a16.76 16.76 0 0 0-4.15-1.29.06.06 0 0 0-.07.03c-.17.33-.37.75-.5 1.08a15.74 15.74 0 0 0-4.7 0c-.13-.33-.33-.74-.5-1.08a.07.07 0 0 0-.07-.03c-1.42.2-2.84.66-4.15 1.29-.07.02-.1.06-.13.1C1.5 10.14.87 14.31 1.21 18.43c0 .06.04.12.08.13 1.54 1.13 3.03 1.82 4.49 2.27.07.02.14-.02.17-.09.36-.5.69-.99 1-1.53.05-.08 0-.2-.09-.24-.5-.19-1-.42-1.45-.67-.12-.07-.13-.2-.02-.29.1-.07.2-.15.3-.22.05-.04.12-.05.17-.03 3.44 1.57 7.15 1.57 10.55 0 .05-.02.12-.01.17.03.1.07.2.15.3.22.11.09.1.22-.02.3-.46.25-.95.48-1.45.66-.09.04-.14.16-.09.24.3.54.63 1.04 1 1.54.03.06.1.1.17.08 1.47-.45 2.96-1.13 4.5-2.27.05-.02.08-.08.08-.14.4-4.74-.67-8.87-2.84-12.5-.02-.04-.06-.08-.12-.1zM8.68 15.4c-.88 0-1.62-.8-1.62-1.8 0-.99.72-1.8 1.62-1.8.9 0 1.63.8 1.63 1.8 0 1-.72 1.8-1.63 1.8zm5.7 0c-.9 0-1.63-.8-1.63-1.8 0-.99.72-1.8 1.63-1.8.9 0 1.62.8 1.62 1.8 0 1-.72 1.8-1.62 1.8z" />
    </svg>
  )
);

Discord.displayName = "Discord";

export default Discord;
