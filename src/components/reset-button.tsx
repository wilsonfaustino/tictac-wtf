import { RotateCcw } from 'lucide-react'

export function ResetButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="group bg-pink hover:bg-pink/80 mt-4 flex items-center gap-2 rounded-lg px-4 py-2 text-white"
      onClick={onClick}
    >
      Reset Game
      <RotateCcw className="transition-transform duration-500 group-hover:-rotate-180" />
    </button>
  )
}
