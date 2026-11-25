# The GPS Swears It Was a Shortcut

[![make.fun](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![rank](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/chepster4/gps-shortcut-excuse/rank.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![reward](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/chepster4/gps-shortcut-excuse/reward.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)

Entry for [The GPS Swears It Was a Shortcut](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9) on make.fun.

## What it does

`main.ts` (Node 22, standard library only, no network access) writes the GPS's
one-line excuse for sending the driver down the wrong road to
`/output/entry.txt`. The program is fully deterministic: every run produces the
exact same bytes.

The line (122 characters):

> I took you past the lake because the map promised a bridge. There is no bridge. There is, however, a very judgmental swan.

## How to run

```sh
node main.ts
```

The excuse is written to `/output/entry.txt` — a single line of 1–200
characters, UTF-8.

## License

MIT

---
Built with [make.fun](https://make.fun/?ref=b5gt2sm0)
