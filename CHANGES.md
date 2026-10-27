# Wave 3 changes — 2026-10-25

Working-tree changes only. $0 spend; no installs, accounts, sends, purchases, commits, pushes, merges or deployments. Existing RUNBOOK-WAVE3.md was already untracked and is preserved.

## Audit summary

1,528 records and unique slugs; 1,528 empty cities; 190 duplicate-name groups covering 468 records (278 excess occurrences); 52 classified generic/placeholder names covering 106 records. 1,418 unique descriptions before and after, 228 templates after replacing the leading record name, and 1,528 descriptions matching the repeated structure. Zero out-of-range coordinates, stateSlug mismatches or invalid slug formats. 303 slug/name differences are documented, including disambiguating suffixes; none changed. Zero leading/trailing whitespace in names or descriptions.

Full per-state counts, all duplicate groups, classification names/reasons, slug comparisons, and ranked proposals: [audit](docs/wave3-audit-2026-10-25.md).

## Applied fixes

- `src/app/layout.tsx`: removed Browse; navigation retains Home and About. Replaced default description and footer directory sentence with review posture and access/permission verification language. Canonical, publisher verification, robots and styles preserved.
- `src/app/[state]/page.tsx`: metadata describes mapped mineral records and ownership, land manager, claims and current-rule checks. Robots remain exactly unchanged (`index: false`, follow true, including Googlebot).
- `src/app/[state]/[slug]/page.tsx`: title now `${loc.name} — Rockhounding Record in ${loc.state}`. Description still truncates the record description at 155 characters; robots unchanged.
- `src/data/locations.json`: 435 exact `is a occurrence` → `is an occurrence` replacements and 100 exact `is a unknown` → `is an unknown` replacements. Both old patterns now occur zero times. Zero trims needed. Preserved two-space formatting, order, fields, all names and all 1,528 records/slugs.
- `docs/wave3-audit-2026-10-25.md`: full audit and proposals only; no proposed schema, identity, imagery or access changes applied.

## Browse bug evidence

Before the edit, layout linked `/browse-states`, with no matching static page. The dynamic state route accepts unknown state strings, turns this slug into “Browse States,” filters zero records and renders “COMING SOON.” This source evidence confirms the broken navigation promise. Live request failed with `curl: (6) Could not resolve host: rockhoundingfinder.com`; the reported live behavior could not be independently verified from this environment.

## Proposals only

See the ranked audit fix list: evidence-based descriptions and amenities; v2 schema (`landManager`, `accessStatus`, `sourceUrl`, `sourcePublisher`, `reviewDate`); Mapbox requests across noindex routes and misleading picsum related-card imagery; duplicate/generic identities and proper-name capitalization; empty cities and source verification. Recon correction: both page files already use an environment Mapbox token, not a hardcoded token. No token rotated/replaced. No location deleted or renamed, mineral/access/permit/city data invented, or indexing rules changed.

## Commands and results

Commands ran from the repository root. Temporary analysis and verification scripts live outside the repository.

- `pwd && rg --files -g 'RUNBOOK-WAVE3.md' -g 'AGENTS.md' -g '!node_modules' -g '!vendor'`: located runbook, no repository AGENTS.md found.
- `cat RUNBOOK-WAVE3.md`: read task and gates.
- `git status --short`: initial status only `?? RUNBOOK-WAVE3.md`.
- `ls node_modules`: `ls: node_modules: No such file or directory`. This was checked before verification.
- `cat package.json`; `cat src/app/layout.tsx`; `cat 'src/app/[state]/page.tsx'`; `cat 'src/app/[state]/[slug]/page.tsx'`: verified versions, scripts, route behavior, metadata and imagery/token handling.
- `cat tests/privacy-security.test.mjs tests/index-quality.test.mjs src/app/page.tsx src/app/sitemap.ts`; `head -25 src/data/locations.json`: read all test logic, rebuild posture, sitemap allowlist and formatting.
- `command -v node`; `command -v npm`: `/usr/local/bin/node`, `/usr/local/bin/npm`.
- `rg --files -g '*AGENTS*' -g '*CHANGES*'`: no matches. `ls /Users/jasonramirez/empire/AGENTS.md /Users/jasonramirez/AGENTS.md 2>/dev/null`: neither present (exit 1).
- `cat /Users/jasonramirez/.codex/plugins/cache/openai-curated-remote/vercel/0.54.1/skills/react-best-practices/SKILL.md`: read React review skill. Review of changed TSX found no new hooks, fetching, dependencies, rendering structure or accessibility issue; changes limited to text/removing a link.
- Inline `python3` preflight with `collections.Counter`, exact article regex `\bis a [aeiouAEIOU]\w*`, and leading-name template normalization: found only 435 occurrence and 100 unknown article artifacts; enumerated placeholder candidates.
- `curl -L --max-time 20 -sS https://rockhoundingfinder.com/browse-states -o /tmp/wave3-browse.html`: curl DNS failure (6). Following inline Python found no downloaded file; the combined shell command exited 0, which does not mean the request succeeded.
- `cat > /tmp/wave3-audit.py <<'PY' … PY`; `python3 /tmp/wave3-audit.py`: created and ran the analysis/edit/report script; exit 0, exact metrics recorded in audit and `/tmp/wave3-metrics.json`.
- `cat > /tmp/wave3-checks.mjs <<'JS' … JS`; `node /tmp/wave3-checks.mjs`: fallback reads original test files, substitutes synchronous assertion callbacks for the Node test runner, and preserves original file URLs. Verbatim totals: `{"file":"tests/privacy-security.test.mjs","passed":4,"failed":0}` and `{"file":"tests/index-quality.test.mjs","passed":9,"failed":0}`. Exit 0.
- Inline `python3` comparison against `git show HEAD:src/data/locations.json` and original TSX: `PASS: only authorized data changes; count/order/schema/slugs preserved; robots/canonicals/verification unchanged`.
- `git diff --check`: exit 0, no whitespace errors.
- `git diff --stat`: four tracked files changed, 539 insertions, 540 deletions, before new documentation is counted (535 description lines replaced).
- Inline `python3` wrote this CHANGES.md from verified results. Final `git diff --check`, `git status --short` and documentation presence check recorded below.

The official `npm run test:privacy` and `npm run test:index` test commands could not be executed under the runbook's absent-node_modules gate. Their complete assertion logic was evaluated via the fallback above, not via the official runner. `npx tsc --noEmit` was skipped because node_modules is absent. No npm ci/install or npx download attempted. TypeScript compilation and live route verification remain limitations.

## To go live

Owner reviews the diff and audit, commits, merges, and deploys. None of these actions was performed. Working tree intentionally remains dirty.

Final verification: `git diff --check` exit 0; documentation presence check PASS. `git status --short`: four modified tracked files (three TSX files and locations.json), plus untracked CHANGES.md, audit documentation, and the pre-existing runbook. No commits made.
