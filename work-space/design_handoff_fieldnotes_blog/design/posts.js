const POSTS = [
  {
    slug: "learning-in-public",
    date: "Sep 14, 2026",
    read: "6 min",
    tag: "Habits",
    title: "Learning in public, quietly",
    excerpt: "Sharing work early is supposed to be terrifying. Mostly it is just slow, and that turns out to be the useful part.",
    body: [
      "For two years I kept a folder called drafts. Nothing left it. Every post needed one more pass, one more example, one more afternoon I never had. The folder grew to forty-one files and the blog stayed empty.",
      "What broke the pattern was lowering the bar to something almost embarrassing: publish the note, not the essay. A note can be four paragraphs and one code block. It can end without a conclusion. It can be wrong, and someone will tell me, which is faster than being right alone.",
      "The surprise was how little anyone cared about polish. The posts people wrote to me about were the ones where I showed the broken version first — the state that re-rendered eleven times, the effect that fired twice, the fix that took an hour to find and a line to write."
    ],
    quote: "Publish the note, not the essay.",
    close: "So the rule now is simple. If I learned something on a Tuesday, it goes up by Thursday. The drafts folder still exists. It has three files in it, and that feels about right."
  },
  {
    slug: "state-you-dont-need",
    date: "Sep 2, 2026",
    read: "8 min",
    tag: "React",
    title: "The state you don't need",
    excerpt: "Half the bugs I write come from storing something I could have derived. A short tour of the ones that keep catching me.",
    body: [
      "Every piece of state is a promise to keep two things in sync. Store a list and its length, and you have signed up to update both, forever, in every branch. Derive the length instead and the promise disappears.",
      "The version of this I hit most often is the filtered copy. You have items, you have a query, and it feels natural to keep filteredItems next to them. Now three things must agree. Compute the filtered list where you render it and there is only one source left to be wrong.",
      "The second is the mirrored prop. A value arrives from above, you copy it into local state so you can edit it, and then the parent changes it and your copy quietly stops matching. Sometimes that is what you want. Usually it is a bug you will find in a week."
    ],
    quote: "Every piece of state is a promise to keep two things in sync.",
    close: "The test I use before adding state: can I write this as a function of what I already have? If yes, write the function. It is fewer lines, and it cannot drift."
  },
  {
    slug: "reading-error-messages",
    date: "Aug 21, 2026",
    read: "5 min",
    tag: "Debugging",
    title: "How to actually read an error message",
    excerpt: "The stack trace is not punishment. It is the most specific documentation you will ever get about your own code.",
    body: [
      "I used to scan errors for a filename and start guessing. It works often enough to feel like a method, which is the worst kind of habit, because the times it fails are the times that cost you an afternoon.",
      "The slower version: read the first line completely. Not the shape of it — the words. Then find the topmost frame that belongs to you rather than a library, because that is where your assumption and reality parted ways.",
      "Then say the error out loud as a sentence about your code. Not 'cannot read properties of undefined' but 'the thing I assumed was an object was missing when this ran'. The translation is where the bug usually becomes obvious."
    ],
    quote: "The stack trace is documentation written specifically for you.",
    close: "This takes ninety seconds and replaces most of my guessing. It is the highest-leverage habit I have picked up, and it required learning nothing new."
  },
  {
    slug: "small-tools",
    date: "Aug 7, 2026",
    read: "4 min",
    tag: "Tooling",
    title: "In praise of small tools",
    excerpt: "A forty-line script I wrote in an afternoon has saved me more time than every productivity app I have installed.",
    body: [
      "The script renames screenshots. That is all it does. It reads the folder, pulls the date out of each filename, and files them by month. It took an afternoon and I have run it maybe six hundred times.",
      "Small tools win because they are shaped exactly like your problem. An app has to serve everyone, so it serves you approximately. A script serves only you, badly, in one direction, which is often all a problem needs.",
      "They also stay understood. I can read all forty lines in a minute and change any of them without fear. That is not true of anything else in my toolchain."
    ],
    quote: "An app serves everyone, so it serves you approximately.",
    close: "The cost of building one is usually lower than the cost of evaluating alternatives. I keep forgetting this, then remembering it in the middle of a comparison table."
  },
  {
    slug: "rebuilding-things",
    date: "Jul 25, 2026",
    read: "7 min",
    tag: "Learning",
    title: "Rebuild the thing you already understand",
    excerpt: "The fastest way I know to find the gaps in your knowledge is to write something you are sure you could write.",
    body: [
      "I thought I understood routing. I had used it for years. Then I sat down to build a tiny router — match a path, render a component — and found four separate things I had been taking on faith.",
      "That is the whole trick. Pick something you use daily and consider solved, then implement the smallest honest version of it. Not to replace the real one. To find out which parts you were only pattern-matching.",
      "It is uncomfortable in a specific way, because you expected the exercise to be easy and it is not. That discomfort is the signal. Easy rebuilds teach you nothing; you already knew that part."
    ],
    quote: "Easy rebuilds teach you nothing; you already knew that part.",
    close: "I try to do one every couple of months. A router, a form library, a state store, a diffing loop. None of them survive past the afternoon, and all of them change how I read the real thing afterwards."
  }
];

export default POSTS;
