# TH PyCon 2025

This is the repo that hosts the website of Thailand Python Conference for the year 2025.

We use Astro to build this site. The deployment pipeline is configured on Netlify.

As long as the build command runs succesfully the code should be ready to the deploy.

When a pull request is created, an automation is triggered so feel free to check the preview in the PR.

It may take a while for one of the maintainer to merge. We apologize in advance...

# Commands

We use mise to setup dev tooling. Check the installation guide [here](https://mise.jdx.dev/installing-mise.html).

```
mise trust
mise install
```

Then, install node dependencies with the usual
`npm install`

Do install pre-commit hook with `npm run pre-commit` to automatically format code

Start a dev server with
`npm run dev`

Build the artifact with (verify locally for faster feedback)
`npm run build`

## Image transformations

Check this document for available transformations available from Netlify
https://docs.netlify.com/image-cdn/overview/#transform-images
