/**
 * All the demotivational messages. Original list taken from https://github.com/joranE/demotivr/blob/master/data-raw/quotes.txt
 * @hidden
 */
const demotivational = [
  'Just give up.',
  "It's not worth it, go back to bed.",
  "Don't worry about errors; either way your existence has no meaning.",
  'Your life is a failure.',
  "Why bother? You'll just get another error.",
  "Don't worry! Nothing exists, including this error.",
  'Life is just a bunch of failures and then we die.',
  'No one will notice this bug because no one cares about anything you do.',
  "This error isn't important because nothing matters.",
  'This code is written by an idiot, full of errors, signifying nothing. - W. Shakespeare',
  'What if this is all there is?',
  'Is this really how you want to spend your short, brutal existence?',
  'If you delete all your code, it will run without errors!',
  'Have you tried fixing the error by throwing your computer out the window?',
  'It was probably going to give you the wrong result anyway.',
  'Once you get this code running, your life will still have no meaning.',
  "It's always worse than it seems.",
  'The only thing standing between you and total happiness is that happiness is an illusion.',
  "Remember, your frustration, like everything else, doesn't exist.",
  'The only thing worse than broken code is code that works but no one cares about.',
  "No one cares about this code. They're just pretending.",
  'Is your soul as broken as this code?',
  'Remember, this code is doing *precisely* what you told it to.',
  'Life sucks, then you die.',
  'You are never more alone than when you are debugging.',
  "Whether you like it or not, alone is something you'll be quite a lot! - Dr. Seuss",
  'From the moment we are born, we begin to die. - Janne Teller',
  'Death comes to us all; we can only choose how to face it when it comes. - Robert Jordan',
  "Time doesn't heal all wounds, or fix all bugs.",
  'To perceive is to suffer. - Aristotle',
  'Just start typing random shit; that might actually work better.',
  "You still haven't fixed it?",
  'Still not working, huh?',
  'Have you tried turning your computer off and then on again?',
  'Think hard on this failure. It will not be your last.',
  "The computer knows what you're trying to do. It's just screwing with you.",
  'There is no spoon.',
  'This is why no one loves you.',
  "You could ask someone for help, but you're all alone, aren't you?",
  'Nothing matters.',
  'In the grand scheme of things, this error is as insignificant as you are.',
  "In 100 years no one will remember anything that you've done, including this error.",
  'Trying is the first step toward failure.',
  'Failure is always an option.',
  'Happiness is an illusion.',
  'Nothing good exists because nothing exists.',
  'Life is meaningless.',
  'Everything is nothing.',
  'Nothing is all there is.',
  "Civilization will end soon and then software bugs won't matter.",
  "It doesn't matter than no one loves you because love is an illusion.",
  'Nothing exists, including this bug, so just ignore it.',
  'There is no hope, because nothing is all there is.',
  'Optimism is just a form of self-delusion.',
  "Don't feel too bad, most other people are failures too.",
  'Mistakes are a normal part of life. (For you.)',
  'Things will only get worse from here.',
  "Pretty soon we'll all be dead, but this code will continue failing forever.",
  'How many times have you tried running the exact same code expecting different results?',
  'No one can fail forever. (Probably.)',
];

/**
 * Chooses a random, nihilistic message suitable for embedding dismay
 * and despair into the psyche of the sad people who have caused the error.
 */
export function demotivate() {
  const index = Math.floor(Math.random() * demotivational.length);
  const demotivated = demotivational[index];
  return demotivated;
}
