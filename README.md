# Gatsby based TTRPG Campaign Tracker

A (possibly) impractical crack at a Gatsby based campaign manager for your TTRPG game. More a proof of concept project rather than something real. There are tons of fantastic campaign managers out there for you to use that would probably be a lot easier than manually generating MDX files.

The idea is to use MDX and a few custom components to quickly prop-up a page for you and your party to reference.

I used the Gatsby Default Starter to scaffold this pretty quickly, and then just grabbed ideas from the Gatsby docs. 

### Features planned

- [ ] An overview page giving you a snapshot view of your party
- [ ] Unique views for items, characters, locations and NPCs
- [ ] Parsing manually created D&D Beyond character sheet JSON (while I imagine a world with a D&D Beyond API)
- [ ] Themes for different types of campaigns
- [ ] Auth for the GM to view "secrets" on articles

### Tech used

- Gatsby
- MDX Files
- Styled Components


### About D&D Beyond Character Sheets

D&D Beyond doens't have an API (yet) so we have to go about this a bit goofy, but this is how it works:

1) Head to your character sheet URL and add `json` to the end of it. It'll look like `https://www.dndbeyond.com/profile/yourname/characters/12345678/json`
2) Wait for the page to load, then grab that json and drop it in a file inside `data/ddb-char-sheets`
3) Query info like so:
```
  allDdbCharSheetsJson {
    edges {
      node {
        character {
          name
        }
      }
    }
  }
```