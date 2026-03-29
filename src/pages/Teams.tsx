import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import SectionHeader from "../components/SectionHeader";
import TeamCard from "../components/TeamCard";
import type { TeamMember } from "../types";

const Teams = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=8")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data.results);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <MainLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader label="Personnel" title="Our Operators" description="The specialists and researchers that make Rhodes Island's mission possible." />

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="border border-border bg-card animate-pulse">
                  <div className="aspect-square bg-secondary" />
                  <div className="p-4 space-y-2">
                    <div className="h-5 bg-secondary rounded w-3/4" />
                    <div className="h-3 bg-secondary rounded w-1/2" />
                    <div className="h-3 bg-secondary rounded w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {members.map((member) => (
                <TeamCard key={member.login.uuid} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Teams;
