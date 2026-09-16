# public/assets/images/careers/jobs/

This folder is empty and nothing reads from it.

The job listing images ended up one level up, in `/assets/images/careers/`,
because each role's path is set explicitly in `lib/site.ts` rather than being
matched from the filename. Upload new role photography there, not here.

The folder is kept so the path stays valid if we ever switch to slug-matched
filenames.
