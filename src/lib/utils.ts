import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { EventoEvent } from "@/generated/prisma";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";

const prisma = new PrismaClient();

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
