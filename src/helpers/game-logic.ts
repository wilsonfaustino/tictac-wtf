import { BoardState, Player } from '../types'

export const WINNING_COMBINATIONS = [
  // Horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonal
  [0, 4, 8],
  [2, 4, 6],
]

/**
 * Check if there is a winner in the TicTacWTF game.
 * @param board - The current state of the game board.
 * @returns The winning player ('X' or 'O') or null if there is no winner.
 */
export function checkWinner(board: BoardState): Player | null {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination
    const isEmpty = board[a] === null || board[b] === null || board[c] === null
    if (isEmpty) continue

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}
