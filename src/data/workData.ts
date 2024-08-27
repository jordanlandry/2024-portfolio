import { WorkType } from "../types";

export const workData: WorkType[] = [
  {
    companyName: "Poket",
    position: "Software Engineer",
    startDate: new Date("2023-09-01"),
    endDate: new Date("2024-09-01"),
    description: "",
    techStack: ["React Native", "TypeScript", "Angular"],
    logo: "poket-logo.webp",
    linkedin: "https://www.linkedin.com/company/poketapp",
  }
].sort((a, b) => b.startDate.getTime() - a.startDate.getTime());