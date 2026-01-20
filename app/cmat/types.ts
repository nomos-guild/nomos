export type TaskStatus = "done" | "in_progress" | "planned" | "upcoming";

export type Link = {
  label: string;
  url: string;
};

export type TaskData = {
  title: string;
  description: string;
  status: TaskStatus;
  assignees?: string[];
  date?: string;
  links?: Link[];
  additionalContent?: string;
};

export type RoadmapPhase = {
  name: string;
  description: string;
  tasks: TaskData[];
};

export type AboutCard = {
  title: string;
  content: string;
  blockPosition: "top" | "middle" | "bottom";
};

export type CmatData = {
  hero: {
    title: string;
    subtitle: string;
  };
  about: {
    intro: string;
    cards: AboutCard[];
  };
  roadmap: RoadmapPhase[];
};
