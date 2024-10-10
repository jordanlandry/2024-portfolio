import { WorkType } from "../types";

export const workData: WorkType[] = [
  {
    companyName: "Poket",
    position: "Software Engineer",
    startDate: new Date("2023-10-01"),
    endDate: "Present",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, ut officia sint repellendus voluptas, adipisci in reprehenderit sed exercitationem velit doloremque corporis commodi. Illum eum eveniet, vero molestiae harum voluptate ut non aspernatur voluptas, dolorem labore, ad modi rerum! Architecto quis praesentium consectetur aspernatur corrupti pariatur vel quasi ea nulla provident voluptatibus, culpa fuga quos. Voluptate, reprehenderit at? Ab facilis mollitia beatae ex adipisci illum? Architecto atque repellat amet itaque, illum nobis qui praesentium accusantium porro. Quis cupiditate dolorum odit voluptatibus commodi ipsam soluta dicta? Eligendi mollitia temporibus consequuntur facere dolore corrupti saepe nostrum recusandae voluptatem! Magni ipsam iste quod.",
    techStack: ["React Native", "TypeScript", "Angular", "Java", "Android", "Python", "AWS"],
    logo: "images/logos/poketapp_logo.jpeg",
    linkedin: "https://www.linkedin.com/company/poketapp",
  }
].sort((a, b) => b.startDate.getTime() - a.startDate.getTime());