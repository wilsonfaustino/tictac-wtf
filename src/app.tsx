import { AnimatePresence, motion } from 'motion/react'

import { ButtonSquare } from '@/components/button-square'
import { ResetButton } from '@/components/reset-button'
import { TicTacIcon } from '@/components/icon/tictac-icon'
import { useTicTacWTF } from '@/hooks/use-tictac-wtf'

export function App() {
  const { buttons, handleClick, resetGame, gameStatus, winner, isGameOver } = useTicTacWTF()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-200 text-white">
      <div className="w-full max-w-md space-y-4 rounded-lg bg-blue-100 p-4">
        <div className="text-pink flex items-center justify-center gap-2">
          <TicTacIcon />
          <h1 className="text-2xl font-bold text-white">TicTac WTF</h1>
        </div>
        <p className="text-center font-light text-zinc-400">{gameStatus}</p>
        <div className="mx-auto grid grid-cols-3 gap-4">
          {buttons.map((_, index) => (
            <ButtonSquare key={index} onClick={() => handleClick(index)} winner={winner}>
              {buttons[index]}
            </ButtonSquare>
          ))}
        </div>
        <AnimatePresence>
          {isGameOver && (
            <motion.div
              key="game-over"
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <ResetButton onClick={resetGame} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
