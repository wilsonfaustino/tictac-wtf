import { motion } from 'motion/react'
import { Circle, X } from 'lucide-react'

import { cn } from '@/lib/cn'
import type { Player } from '@/types'

const iconMap = new Map([
  ['X', <X size={40} />],
  ['O', <Circle size={40} />],
  [null, null],
])

interface ButtonSquareProps {
  children: 'X' | 'O' | null
  onClick?: () => void
  winner: Player | null
}

export function ButtonSquare({ children, onClick, winner }: ButtonSquareProps) {
  if (!iconMap.has(children)) return null

  const hasValue = children !== null
  const isX = children === 'X'
  const isO = children === 'O'
  const isWinner = winner && winner === children
  const winnerColor = (winner: Player | null) => (winner === 'X' ? 'border-pink' : 'border-white')

  return (
    <motion.button
      className={cn(
        'flex size-32 items-center justify-center rounded-lg border-2 text-4xl font-bold text-white',
        isX ? 'text-pink' : isO ? 'text-white' : '',
        isWinner ? winnerColor(winner) : 'border-gray-200',
      )}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
    >
      {!hasValue ? null : (
        <motion.span initial={{ scale: 0 }} animate={{ scale: 1, rotate: -180 }}>
          {iconMap.get(children)}
        </motion.span>
      )}
    </motion.button>
  )
}
