# Contribution Guide

Thank you for helping empower kid's learning!

## Verisioning

We use [CalVer] for versioning; format is `YY.MM.DD.MINOR`, where `MINOR` is
zero-based. When you commit, **don't forget to update the version** in
`package.json`. Remember, date is in UTC.

## Commits

Use [Conventional Commits] for your commit messages. We recommend commit types
based on [Angulars's rules].

Our (changes) scopes, and what to mark as breaking:

- `front`: **Frontend**; i.e. the website stuff. **Don't mark these as**
  **breaking changes** unless the changes are REALLY major, because if you think
  about it, pretty much every frontend change "breaks" something in someway.
  Also,
- `back`: **Backend**; i.e. the server/database stuff. **For breaking changes,**
  **use your reasoning** for this one. Always mark breaking changes for _really_
  major changes, but also mark for nontrivial model changes, and anything you
  think could disrupt backend development if devs aren't aware.
- `dev`: **Dev Workflow**; stuff like configs, `husky`, `package.json` scripts,
  adding (just) `devDependencies`, and **anything relating to developer
  workflow**. Again, use reasoning. If it's one rule added to `.prettierrc`,
  it's not breaking. On the other hand, if you change the value of `ssr` in
  `react-router.config.ts`, mark it as breaking.
- Remember, if you don't feel like your changes fit any of these scopes, you
  don't need to mark a scope, just explain in the body what you think your
  changes affected.

If you think your commit has multiple commit _types_, please try to split them
up into several commits, and if you try your hardest but you _just can't_, put
the most prominent one at the top and list the rest in the body.

[Conventional Commits]: https://www.conventionalcommits.org/en/v1.0.0/
[Angular's rules]:
  https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines
[CalVer]: https://calver.org/
