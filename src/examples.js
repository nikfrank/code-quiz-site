export default [
  {
    code:
`['Bob', 'canada', 'moose']
   .sort((a, b)=> a.length - b.length)[0][2]`,
   answers: ['b', 'n', 'o', 'B'],
   correct: 0,
  },

  {
    code:
`[1, 2, 3]
  .flatMap(p => [3**p, 4**p, 5**p])
  .reduce((t, n)=> t+n, 0)`,
    answers: [256, 278, 345, 12],
    correct: 1,
  },

  {
    code:
`const name = 'nik';
(name > 'Dave' ? name > 'Yossi' ? 'BAM' : 'WHAM' :
 name > 'ike' ? 'OOPS' : 'monkey')`,
    answers: ['BAM', 'WHAM', 'OOPS', 'monkey'],
    correct: 0,
  },
];
