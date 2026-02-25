function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

export default Section;

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
      {children}
    </p>
  );
}

export { SectionHeading, SectionContent };
