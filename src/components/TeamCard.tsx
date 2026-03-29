import type { TeamMember } from "../types";

const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="group border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_hsl(210_100%_65%/0.15)]">
    <div className="relative overflow-hidden">
      <img
        src={member.picture.large}
        alt={`${member.name.first} ${member.name.last}`}
        className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-linier-to-t from-card to-transparent" />
    </div>
    <div className="p-4 space-y-1">
      <h3 className="font-heading font-semibold text-lg text-foreground">
        {member.name.first} {member.name.last}
      </h3>
      <p className="text-xs font-mono text-primary tracking-wider uppercase">Specialist</p>
      <p className="text-sm text-muted-foreground truncate">{member.email}</p>
      <p className="text-xs text-muted-foreground">
        {member.location.city}, {member.location.country}
      </p>
    </div>
  </div>
);

export default TeamCard;
