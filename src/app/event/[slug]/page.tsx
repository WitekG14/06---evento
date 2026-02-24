type EventPageProps = {
  params: {
    slug: string;
  };
};

async function EventPage({ params }: EventPageProps) {
  const slug = params.slug;
  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`,
  );
  const event = await res.json();

  return <main>Event Page</main>;
}

export default EventPage;
