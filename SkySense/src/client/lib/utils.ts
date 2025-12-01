import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  // ensure we pass the values as separate arguments to clsx so it processes
  // nested arrays/objects correctly, then merge tailwind classes
  return twMerge(clsx(...inputs));
}
