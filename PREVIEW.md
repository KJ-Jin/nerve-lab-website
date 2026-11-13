# Website preview and publishing

The Nerve Lab website has two versions hosted under the same GitHub Pages site.

| Version | URL | Code branch |
| --- | --- | --- |
| **Live (public)** | https://kj-jin.github.io/nerve-lab-website/ | `published` |
| **Preview (public but unlinked)** | https://kj-jin.github.io/nerve-lab-website/preview/ | `main` |

## Editing and reviewing

1. Make content and design edits on `main`. GitHub Actions rebuilds the website, keeping the approved `published` branch at the live URL and updating only the `preview/` version.
2. Review the **preview** link, including mobile and desktop layouts.
3. **Only after approval**, publish by merging `main` into `published` (a GitHub pull request targeting `published` from `main` works), or explicitly ask the assistant to promote the approved `main` commit to `published`.
4. The same workflow redeploys the approved version as the live website.

Preview pages are **not password-protected**. The preview index includes `noindex`, but anyone with the preview URL can view it. Do not add confidential material to `main`.

## Technical implementation

A single GitHub Pages deployment assembles two independent Vite builds: `published/dist/` at the site root and `main/dist/` at `preview/`. Relative Vite URLs let the same site run under either path.

The production branch was initialized at commit `dae442c0a66b19d5c5dc8847c9cb364e17ca9dd2`, the last successful live deployment before the November 2026 homepage revisions. Changes to `main` alone never alter the live root content.

Note: GitHub Actions must be operational for new preview builds to become visible. If the build job fails before executing any steps, check the GitHub Actions run and account/runner status rather than assuming the site build failed.
