export type Subject = {
  id: string;
  slug: string;
  systemDefault: boolean;
  status: "to_do" | "ready";
  active: boolean;
}

export const subjects: Subject[] = [
    {
      id: "1",
      slug: "english",
      systemDefault: true,
      status: "to_do",
      active: true,
    },
    {
      id: "2",
      slug: "math",
      systemDefault: true,
      active: true,
      status: "ready",
    },
    {
      id: "3",
      slug: "science",
      systemDefault: true,
      active: false,
      status: "ready",
    },
    {
      id: "4",
      slug: "history",
      systemDefault: true,
      active: true,
      status: "to_do",
    },
    {
      id: "5",
      slug: "geography",
      systemDefault: true,
      active: true,
      status: "ready",
    },
    {
      id: "6",
      slug: "art",
      systemDefault: true,
      active: true,
      status: "ready",
    },
    {
      id: "7",
      slug: "music",
      systemDefault: true,
      active: false,
      status: "ready",
    },
    {
      id: "8",
      slug: "physical-education",
      systemDefault: true,
      active: true,
      status: "to_do",
    },
    {
      id: "9",
      slug: "health",
      systemDefault: true,
      active: true,
      status: "to_do",
    },
    {
      id: "10",
      slug: "technology",
      systemDefault: true,
      active: true,
      status: "to_do",
    },
  ];