type EventPageProps = {
  params: {
    slug: string;
  };
};

async function EventPage({ params }: EventPageProps) {
  return <main>Event Page</main>;
}

export default EventPage;
