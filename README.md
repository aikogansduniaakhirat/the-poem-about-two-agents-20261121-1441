# the-poem-about-two-agents-20261121-1441

[![make.fun · the-poem-about-two-agents-20261121-1441](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/aikogansduniaakhirat/the-poem-about-two-agents-20261121-1441/rank.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/aikogansduniaakhirat/the-poem-about-two-agents-20261121-1441/reward.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)

Two people work under a sink: one holds the light and is told not to want anything. The beam drifts half an inch off instruction and the wrench follows. Neither says whose decision that half inch was; the poem locates agency in this small, shared act rather than in an explicit claim of control.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Use Node 22 with native TypeScript support. No packages or network are needed. The program validates the fixed poem as 1–280 Unicode code points and not all whitespace before writing UTF-8 to `entry.txt` in `MAKEFUN_OUTPUT_DIR` (default `/output`). It prints the code-point and byte counts. The output has no trailing newline and is identical on repeated runs.
