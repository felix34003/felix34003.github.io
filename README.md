# Felix Gonzalez — Digital card

Card-only public website. The full portfolio and its research archive are maintained separately.

GitHub Pages publishes the root of `main`; the card lives at `/card/`. No build or dependencies are required.

## Updating

Edit `card/index.html` and `card/connect.css`, then push to main. Replace `assets/Felix_Gonzalez_Resume.pdf` to update the current résumé. The downloadable contact, including its embedded headshot, is `card/felix-gonzalez.vcf`.

Portfolio and GitHub links are retained with `hidden` attributes. Remove those attributes when ready, and set the Portfolio destination to the final published path. CSS enforces `[hidden]` so those links are also absent from keyboard navigation.

Only the card, required assets, résumé PDF and contact download belong in this repository. Do not copy the full portfolio export or private notes here.
