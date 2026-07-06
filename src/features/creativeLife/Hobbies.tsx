import { Link } from 'react-router-dom';
import HobbyCard from './HobbyCard';
import JournalCard from '../journal/JournalCard';
import { HOBBIES, JOURNAL_ENTRIES } from './hobbiesData';

const PREVIEW_ENTRIES = JOURNAL_ENTRIES.slice(0, 3);

export default function Hobbies() {
  const watercolor = HOBBIES.find(h => h.id === 'watercolor')!;
  const pateh = HOBBIES.find(h => h.id === 'pateh')!;
  const baking = HOBBIES.find(h => h.id === 'baking-cooking')!;
  const natureJournal = HOBBIES.find(h => h.id === 'nature-journal')!;
  const yoga = HOBBIES.find(h => h.id === 'yoga')!;
  const walking = HOBBIES.find(h => h.id === 'walking-nature')!;
  const reading = HOBBIES.find(h => h.id === 'reading')!;
  const birds = HOBBIES.find(h => h.id === 'birds-animals')!;

  return (
    <>
      <section className="w-full max-w-7xl px-4 md:px-8 lg:px-4">
        <div className="mb-stack-lg flex items-end justify-between">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-stone-800">My Hobbies</h2>
            <p className="font-body-md text-body-lg text-stone-500 italic">
              The textures of a creative life.
            </p>
          </div>
        </div>

        <div className="grid h-auto grid-cols-1 gap-6 md:grid-cols-12">
          {/* Row 1: Watercoloring (8) + Pateh (4) */}
          <HobbyCard {...watercolor} />
          <HobbyCard {...pateh} />

          {/* Row 2: Baking (4) + Nature Journal (8) */}
          <HobbyCard {...baking} />
          <HobbyCard {...natureJournal} colorClass="bg-white" />

          {/* Row 3: Yoga (4) + Walking in Nature (8) */}
          <HobbyCard {...walking} colorClass="bg-white" imgLeft />
          <HobbyCard {...yoga} />

          {/* Row 4: Reading (6) + Bird Watching (6) */}

          <HobbyCard
            {...birds}
            colSpanClass="col-span-full md:col-span-6"
            colorClass="bg-surface-container-lowest"
          />
          <HobbyCard
            {...reading}
            colSpanClass="col-span-full md:col-span-6"
            colorClass="bg-white"
          />
        </div>
      </section>

      <section className="py-stack-xl lg:py-section-gap w-full max-w-7xl px-4 md:px-8 lg:px-4">
        <div className="mb-stack-lg mx-auto max-w-3xl text-center">
          <h2 className="font-headline-lg text-headline-lg text-stone-800">Process Journal</h2>
          <p className="font-body-lg mt-2 text-stone-500 italic">
            Thoughts from the studio and the field.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {PREVIEW_ENTRIES.map(entry => (
            <JournalCard key={entry.slug} entry={entry} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/journal"
            className="font-label-md text-secondary border-secondary/20 hover:border-secondary border-b-2 pb-1 transition-all"
          >
            View all journal entries
          </Link>
        </div>
      </section>
    </>
  );
}
