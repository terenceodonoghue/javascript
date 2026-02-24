const pickRandom = <T>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)];

export const loginSubtitle = () =>
  pickRandom([
    'Welcome back 👋',
    'Good to see you 😊',
    'Hey there 🙌',
    'Ready when you are 🚀',
    'Nice to see you again ✨',
    'Look who it is 👀',
    'Reporting for duty 🫡',
  ]);
