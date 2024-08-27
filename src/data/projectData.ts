import { ProjectType } from "../types";


export const projectData: ProjectType[] = [
  {
    title: "Chess AI",
    description: "Chess AI that uses the minimax algorithm with alpha-beta pruning to determine the best move.",
    techStack: ["TypeScript", "React"],
    github: "https://www.github.com/jordanlandry/chess-ai",
    demo: "https://jordanlandry.github.io/chess-ai",
    thumbnail: "./images/chess-thumbnail.png",
  },
  {
    title: "Guitar Hero Bot",
    description: "My portfolio website built with TypeScript and React.",
    techStack: ["Python", "C++"],
    thumbnail: "portfolio-thumbnail.png",
  },
  {
    title: "Rubik's Cube Solver",
    description: "A Rubik's Cube solver that uses the CFOP method.",
    techStack: ["TypeScript", " Three.js"],
    github: "https://github.com/jordanlandry/threejs-rubiks-cube-solver",
    demo: "https://jordanlandry.github.io/threejs-rubiks-cube-solver",
    thumbnail: "./images/rubiks-cube-thumbnail.png",
  },
]