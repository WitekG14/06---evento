import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "./loading";
import { capitalize } from "@/lib/utils";

type EventsPageProps = {
  params: {
    city: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export function generateMetadata({ params }: EventsPageProps) {
  const city = params.city;

  return {
    title: `Evento - Events in ${capitalize(city === "all" ? "All Cities" : city)}`,
  };
}

async function EventsPage({ params, searchParams }: EventsPageProps) {
  const city = params.city;
  const page = searchParams.page ?? 1;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + params.city.slice(1)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventsList city={city} page={+page} />
      </Suspense>
    </main>
  );
}

export default EventsPage;
