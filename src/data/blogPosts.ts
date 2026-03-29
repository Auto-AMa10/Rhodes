import type { BlogPost } from "../types";

export const blogPosts: (BlogPost & { date: string; fullContent: string })[] = [
  {
    id: "1",
    title: "Breakthrough in Oripathy Treatment",
    description: "New compound shows promising results in Phase III clinical trials across multiple demographics.",
    content: "",
    author: "Dr. Kal'tsit",
    thumbnail: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    date: "2026-03-15",
    fullContent: `The development of compound RI-13 represents a significant milestone in our ongoing efforts to combat Oripathy at its source. After three years of iterative refinement, our research team has achieved a formulation that demonstrates 87% efficacy in reducing Originium crystal propagation in affected tissue.

Phase III trials were conducted across six mobile platform deployments, encompassing a diverse population of 2,400 participants. The results exceeded our initial projections by a substantial margin, with side effects remaining within acceptable parameters defined by our safety board.

The mechanism of action targets the mineral-cellular interface where Originium crystals begin their integration with biological tissue. By introducing a synthetic inhibitor at this junction, RI-13 effectively slows and in some cases reverses the crystallization process.

Our field operatives have already begun preliminary distribution in high-concentration zones, working alongside local medical infrastructure where available. The compound's stability at variable temperatures makes it particularly suited for the challenging environments in which Rhodes Island typically operates.

Further research will focus on long-term efficacy monitoring and the development of complementary treatments that may enhance RI-13's therapeutic window. We remain committed to our mission of finding a definitive solution to the Oripathy crisis.`,
  },
  {
    id: "2",
    title: "Rhodes Island Field Report Q4",
    description: "Quarterly operational update covering mobile platform deployment and resource allocation.",
    content: "",
    author: "Amiya",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    date: "2026-02-28",
    fullContent: `This quarter marked a period of significant operational expansion for Rhodes Island. Our mobile command platform completed three major deployments, each in regions previously inaccessible to conventional medical infrastructure.

Resource allocation has been optimized following the implementation of our new logistics framework. Supply chain efficiency improved by 34%, allowing us to redirect critical materials to frontline operations without compromising laboratory output.

Personnel recruitment exceeded targets by 15%, with notable additions to our medical, engineering, and tactical divisions. The integration of new operators into existing team structures has proceeded smoothly under the mentorship program established last quarter.

Infrastructure upgrades to the mobile platform included enhanced water purification systems, expanded laboratory facilities, and reinforced defensive perimeters. These improvements directly support our capacity to operate in contested environments.

Looking ahead, Q1 projections indicate continued growth in both operational reach and research output. Strategic partnerships with allied organizations are expected to further extend our capabilities in the coming months.`,
  },
  {
    id: "3",
    title: "Advances in Originium Research",
    description: "Understanding mineral-based pathology and developing countermeasures for infected populations.",
    content: "",
    author: "Dr. Warfarin",
    thumbnail: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
    date: "2026-01-10",
    fullContent: `Our understanding of Originium's interaction with biological systems has advanced considerably over the past research cycle. New imaging techniques have revealed previously unobserved crystalline microstructures at the cellular level, providing crucial data for therapeutic development.

The discovery of three distinct infection progression patterns has enabled us to categorize cases with greater precision. This classification system allows for more targeted treatment protocols, reducing both resource expenditure and patient recovery time.

Laboratory synthesis of stable Originium analogues has opened new avenues for controlled experimentation. These synthetic compounds replicate key properties of natural Originium while eliminating the infection risk associated with direct sample handling.

Cross-referencing geological survey data with epidemiological records has revealed strong correlations between mineral deposit density and infection rates. This data is being used to develop predictive models for outbreak prevention.

Our collaboration with external research institutions continues to yield valuable insights. The shared database initiative has accelerated the pace of discovery across all participating organizations, reinforcing the importance of cooperative scientific endeavor.`,
  },
];
