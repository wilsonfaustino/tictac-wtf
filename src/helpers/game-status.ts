export const victoryMessages = [
  "You win! Too bad there's no prize.",
  'Congrats, genius. Now go wash the dishes.',
  'X made history. Or was it O?',
  "Your mom always said you were special. Here's the proof.",
  'Epic victory in the world championship of... nothing.',
  'You won! Update your resume immediately.',
  'Now you just need to win at the game of life.',
  "You won! But don't get excited, it's still Tuesday.",
]

export const drawMessages = [
  'Technical tie: two respectable losers.',
  'A tie? What a surprise... not.',
  'Nobody wins. Everybody loses. Welcome to adult life.',
  'It is a tie. Now hold hands and go get ice cream.',
  'Epic draw! You achieved absolutely nothing together.',
]

/**
 * Returns a random message from the provided array of messages.
 * @param messages - Array of string messages to choose from
 * @returns A randomly selected message from the array
 */
export function getRandomMessage(messages: string[]) {
  const index = Math.floor(Math.random() * messages.length)
  return messages[index]
}
