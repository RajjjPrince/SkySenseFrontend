import { Button } from "@/components/ui/button";
import { Wind } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
              <Wind className="h-6 w-6 text-white" />
            </div>
            <span className="hidden text-lg font-bold text-gray-900 sm:inline">
              AirFore
            </span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
              Features
            </a>
            <a href="#pipeline" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
              Pipeline
            </a>
            <a href="#case-study" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
              Case Study
            </a>
          </nav>

          <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
