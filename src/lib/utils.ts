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

export const getEvent = unstable_cache(async (slug: string) => {
  // const res = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`,
  // );
  // const event: EventoEvent[] = await res.json();

  const event: EventoEvent | null = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }
  return event;
});

export const getEvents = unstable_cache(async (city: string, page = 1) => {
  // const res = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
  // );
  // const events: EventoEvent[] = await res.json();

  const events: EventoEvent[] = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  const totalCount = await prisma.eventoEvent.count({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
  });

  return { events, totalCount };
});

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
