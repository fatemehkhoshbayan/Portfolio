import JournalCard from './JournalCard';
import { JOURNAL_ENTRIES } from '../creativeLife/hobbiesData';

export default function JournalCards() {
  return (
    <section className="py-stack-xl lg:py-section-gap gap-stack-lg grid w-full max-w-7xl px-10 md:grid-cols-1 lg:grid-cols-3 lg:px-4">
      {JOURNAL_ENTRIES.map(entry => (
        <JournalCard key={entry.slug} entry={entry} />
      ))}
    </section>
  );
}
