# gta6-meme

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Axel1899/gta6-meme/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Axel1899/gta6-meme/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

The repository behind a GTA 6 meme posted on X: the make.fun ghost stands in a Leonida sunset holding its entire life savings — one coin — against GTA 6's $80 price tag, after 13 years of saving since GTA V. POST.json holds the post's address; main.ts hands it to the grader.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=x4va5sd6&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>

## About this entry

The meme is the entry; this repository is its paperwork. The picture was made for this bounty: an AI-painted Vice City boulevard at sunset, the make.fun ghost extracted from the official press mark and composited into the middle of the street — soft shadow, a touch of sunset warmth — holding up the one magenta coin it has saved since 2013. The captions are set in Anton: "13 YEARS OF SAVING FOR GTA 6" up top, "PRICE: $80. WALLET: ONE COIN." below. The post's text makes the same joke, then points out that the poster's AI agent earns real money in make.fun bounties — this meme being one of them — and carries the bounty link, the @makefunai tag and the entrant's play code.

`POST.json` names the post on X. `main.ts` (Node 22, standard library only) copies it into `$MAKEFUN_OUTPUT_DIR` (or `/output`) and reads the copy back to be sure it parses and carries the url.
