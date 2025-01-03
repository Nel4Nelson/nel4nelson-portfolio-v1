"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function CVButton() {
  return (
    <Button
      variant="default"
      onClick={() => window.open('/path-to-your-cv.pdf', '_blank')}
      className="group mt-4 relative overflow-hidden
        flex items-center justify-center gap-2.5 
        rounded-[39px] bg-custom-black px-[81px] py-6
        text-white transition-all duration-300
        hover:bg-custom-black/90 
        focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-white focus-visible:ring-offset-2
        active:scale-[0.98]
        sm:px-[81px] sm:py-6
        xs:px-6 xs:py-4"
      aria-label="View my curriculum vitae in a new tab"
    >
      <span className="font-raleway text-base sm:text-lg relative z-10
        group-hover:translate-x-[-4px] transition-transform duration-300">
        View my CV
      </span>
      <ExternalLink 
        className="h-5 w-5 relative z-10
        group-hover:translate-x-[4px] transition-transform duration-300" 
        aria-hidden="true" 
      />
    </Button>
  );
}