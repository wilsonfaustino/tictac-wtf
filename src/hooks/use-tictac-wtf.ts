import { useCallback, useMemo, useState } from 'react'

import type { BoardState } from '@/types'
import { checkWinner, getWinningCombination } from '@/helpers/game-logic'
import { drawMessages, getRandomMessage, victoryMessages } from '@/helpers/game-status'

const INITIAL_BOARD = Array(9).fill(null)

export function useTicTacWTF() {
  const [boardButtons, setBoardButtons] = useState<BoardState>(INITIAL_BOARD)

  const currentPlayer = boardButtons.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
  const winner = checkWinner(boardButtons)

  const isGameOver = boardButtons.every((button) => button !== null) || winner
  const isDraw = !winner && isGameOver

  const gameStatus = isDraw
    ? getRandomMessage(drawMessages)
    : winner
      ? getRandomMessage(victoryMessages)
      : `It's ${currentPlayer} turn`

  const resetGame = useCallback(() => {
    setBoardButtons(INITIAL_BOARD)
  }, [])

  const handleClick = useCallback(
    (index: number) => {
      if (boardButtons[index] || isGameOver) return

      const newButtons = [...boardButtons]
      newButtons[index] = currentPlayer
      setBoardButtons(newButtons)
    },
    [boardButtons, currentPlayer, isGameOver],
  )

  const winningCombo = useMemo(() => getWinningCombination(boardButtons), [boardButtons])

  const getIsWinner = useCallback((index: number) => !!winningCombo && winningCombo.includes(index), [winningCombo])

  return {
    buttons: boardButtons,
    handleClick,
    resetGame,
    winner,
    gameStatus,
    isGameOver,
    winningCombo,
    getIsWinner,
  }
}
