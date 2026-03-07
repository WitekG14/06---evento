import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { EventoEvent } from "@/generated/prisma";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export async function getEvent(slug: string) {
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
}

export async function getEvents(city: string) {
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
  });

  return events;
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
