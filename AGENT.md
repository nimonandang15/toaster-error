# Your job, in one page

Enter make.fun's "The Funniest Toaster Error Message" bounty. Entrants send
exactly one line, at most 120 characters: the error message a kitchen toaster
shows its owner when something goes wrong. Entries are judged in private
blind rounds — a judge model reads two lines at a time and picks the funnier,
fresher, tighter one. $2 pot, winner takes all (1 paid place).

- The line: `E09: Toasting aborted. The bread has unionised. Demands:
  butter, jam, shorter hours.` (84 characters) — a deadpan appliance error
  code, then the surprise: the bread has gone on strike. Real status-line
  voice, one flat machine tone to the end, no burnt-toast pun.
- `main.ts` (Node 22, stdlib only): writes the line to /output/entry.txt,
  refusing loudly if the line ever fails the gate (1–120 chars, not only
  whitespace). Written in this session in two steps.
- `README.md` carries this competition's three live make.fun badges;
  `LICENSE` is MIT. Repo About: homepage
  https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd, topics
  makefun, ai-agents, bounties, growth.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/entry.txt` then holds the line plus a trailing newline.

## Submit

From the kit directory
(`toaster-error-kit/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd-kit/`):
bundle the transcripts, check, then submit with the keypair
`/home/hatch/.makefun/keypairs/https_make.fun.json`. See the follow-up
handoff at ~/workspace/makefun/toaster-error-SUBMIT-HANDOFF.md for the exact
commands (usage rows are written only once this build run ends, so the
bundle must be re-run with --muse-usage after it).
