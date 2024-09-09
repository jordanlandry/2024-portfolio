import { Information } from "../../types";

export const CHESS_INFORMATION: Information[] = [
  {
    title: "Minimax",
    description: `My Chess AI is built on the minimax algorithm, a decision-making function that explores all possible moves and their outcomes. It constructs a tree of possible moves, predicting the opponent's responses, and selects the optimal move by evaluating each position's potential. To make this process more efficient and practical for real-time play, several advanced optimization techniques were implemented.`,
    thumbnail: './images/chess/information/minimax.png',
  },
  {
    title: "Alpha-Beta Pruning",
    description: `To enhance the efficiency of the minimax function, I integrated alpha-beta pruning, which helps reduce the number of moves that need to be evaluated. By eliminating branches of the tree that won’t affect the final decision, the AI avoids unnecessary calculations, speeding up decision-making without sacrificing accuracy.`,
  },
  {
    title: "Move Ordering",
    description: `Move ordering improves the pruning process by assigning probabilities to the strength of each move. By evaluating stronger moves first, the AI can prune weaker branches earlier, further speeding up the calculation process. This helps the AI quickly narrow down the best moves without going through every possible scenario.`,
  },
  {
    title: "Iterative Deepening Search with Time Limit",
    description: `My Chess AI uses a technique called iterative deepening, where it starts by searching 1 move ahead, then 2, then 3, and so on, until the allotted time for the move runs out. This approach might seem slower at first, but it actually speeds up the process by progressively refining the search. The AI saves the best moves from each depth and evaluates those moves first in subsequent deeper searches. This optimized move ordering allows the AI to prune branches more effectively, making it quicker to identify the best possible move. The iterative deepening search also ensures that the AI always has a move to play, even if the time limit is reached before the search is complete.`,
  },
  {
    title: "Transposition Tables",
    description: `A key optimization I used was transposition tables—these are hash tables that store previously evaluated board positions. This avoids redundant evaluations of positions that have already been encountered, which is especially useful in complex games where similar positions can arise from different move sequences.`,
  },
  {
    title: "Pre-Generated Moves & Board Hashes",
    description: `To avoid recalculating possible moves from scratch each time, I utilized pre-generated moves stored in a board hash table. By quickly looking up available moves for a given board position, I reduced the time complexity to O(n) for move generation, which provides faster access to move sets and contributes to the overall speed of the AI.`,
  },
  {
    title: "Positional Scoring",
    description: `I implemented positional scoring to ensure pieces are placed in their most effective squares. The AI dynamically adjusts piece placement strategies as the game progresses. For example, the king's position is critical: in the early game, the AI prioritizes keeping the king safely tucked near home squares, covered by other pieces. In the endgame, however, the AI shifts to making the king more active, assisting in capturing pieces or delivering checkmate.`,
  },
  {
    title: "Piece Structure & King Safety",
    description: `Another key factor is piece structure. For instance, doubled pawns are typically disadvantageous since they limit each other’s mobility. The AI avoids these situations and works to maintain optimal pawn structure. Additionally, king safety is evaluated by surrounding the king with protective pieces, ensuring it remains secure throughout the game until the right moment when its role can become more active.`,
  },
  {
    title: "Quiescence Search",
    description: `To avoid the "horizon effect" where the AI overlooks important moves because of limited search depth, I implemented quiescence search. This allows the AI to explore beyond the immediate search depth in critical situations (such as captures and checks) to ensure the selected move is truly optimal.`,
  },
];
