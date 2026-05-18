interface ICardProps {
  icon: string;
  title: string;
  desc: string;
}
export default function Card({ icon, title, desc }: ICardProps) {
  return (
    <div className="border-line-soft p-stack-lg bg-canvas flex items-start gap-4 rounded-xl border">
      <span className="material-symbols-outlined text-accent" data-weight="fill">
        {icon}
      </span>
      <div>
        <h4 className="font-label-md text-brand text-body-md mb-1">{title}</h4>
        <p className="text-support text-body-md">{desc}</p>
      </div>
    </div>
  );
}
