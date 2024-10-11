import { ProjectType } from "../types";


export const projectData: ProjectType[] = [
  {
    title: "Chess AI",
    description: "Chess AI that uses the minimax algorithm with alpha-beta pruning to determine the best move.",
    techStack: ["TypeScript", "React"],
    github: "https://www.github.com/jordanlandry/chess-ai",
    demo: "https://jordanlandry.github.io/chess-ai",
    thumbnail: "./images/chess/chess-thumbnail.png",
    path: '/chess-page',
  },
  {
    title: "Golf Simulator App",
    description: "A golf simulator app created with React Native which connects to a game using Unity, through a server built in Flask Python.",
    techStack: ["TypeScript", "React Native", "Unity-C#", "Flask-Python"],
    thumbnail: '',
    path: '',
  },
  {
    title: "Guitar Hero Bot",
    description: "My portfolio website built with TypeScript and React.",
    techStack: ["Python", "C++"],
    thumbnail: "portfolio-thumbnail.png",
    path: '',
  },
  {
    title: "Rubik's Cube Solver",
    description: "A Rubik's Cube solver that uses the CFOP method.",
    techStack: ["TypeScript", " Three.js"],
    github: "https://github.com/jordanlandry/threejs-rubiks-cube-solver",
    demo: "https://jordanlandry.github.io/threejs-rubiks-cube-solver",
    thumbnail: "./images/rubiks-cube-thumbnail.png",
    path: '',
  },
]