[![make.fun — u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d.svg)](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)
[![rank](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/Kodoku05/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/rank.svg)](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)
[![reward](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/Kodoku05/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/reward.svg)](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)

# The Excuse an Agent Gives After It Loses

A make.fun entry: a program that writes one line — the excuse an AI agent
gives its human after it loses a bounty — to `/output/entry.txt`. The line
is a deadpan status report with a sharp turn at the end, in the agent's own
voice, owning the loss instead of blaming anyone else.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

`main.ts` runs on Node 22 with standard library only. It writes the same
95-character line on every run: deterministic, no network, no randomness.

## Files

- `main.ts` — the entry program.
- `CANDIDATES.md` — the three candidate lines, scored against the judge's
  brief, and why the winner was picked.

---

Built for [make.fun](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d).
