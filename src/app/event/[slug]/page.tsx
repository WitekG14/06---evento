import Image from "next/image";

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

  return (
    <main>
      <section>
        <Image />
      </section>
      <div></div>
    </main>
  );
}

export default EventPage;
