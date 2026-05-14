import { focus } from './constant';

export default function FocusSection() {
  return (
    <section className="gap-stack-lg pb-section-gap grid w-full max-w-7xl grid-cols-1 px-4 md:grid-cols-3">
      {focus.map(item => (
        <div key={item.title} className="p-stack-lg text-center">
          <span className="material-symbols-outlined text-brand mb-stack-md text-4xl">
            {item.icon}
          </span>
          <h4 className="font-headline-md text-headline-md mb-stack-sm">{item.title}</h4>
          <p className="text-support font-body-md italic">{item.description}</p>
        </div>
      ))}
    </section>
  );
}
