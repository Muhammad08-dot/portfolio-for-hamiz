import type { SkillCategory } from "@/data/site";

export default function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <div className="border border-[#D9D4C7] bg-[#F6F3EC] p-6 rounded-[3px]">
      <div className="mb-4 flex items-baseline justify-between border-b border-[#D9D4C7] pb-2">
        <div className="flex items-baseline gap-2">
          <h3 className="font-heading text-lg font-bold text-[#1A1A17]">{category.title}</h3>
          {category.proficiencyTag && (
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#D9480F]">
              · {category.proficiencyTag}
            </span>
          )}
        </div>
        <span className="font-mono text-[11px] uppercase tracking-wider text-[#5C5A52]">
          [{category.skills.length}]
        </span>
      </div>

      {/* Clean list with thin dividers, no fake percentages */}
      <ul className="divide-y divide-[#D9D4C7]/60">
        {category.skills.map((skill) => (
          <li
            key={skill}
            className="py-2 text-sm text-[#1A1A17] font-medium"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

