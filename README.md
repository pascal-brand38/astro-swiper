# astro-swiper

Doc of `astro-swiper`: [astro-dev](https://pascal-brand38.github.io/astro-dev/packages/astro-swiper/)

This `astro-swiper` is a monorepo made of

* `astro-swiper`: the source of the [astro-swiper npm package](https://www.npmjs.com/package/astro-swiper)
* `demo`: used to run tests


Note that the doc is not part of this monorepo (yet?), but is part of
[astro-dev](https://pascal-brand38.github.io/astro-dev/packages/astro-swiper/) and
[github of astro-dev](https://github.com/pascal-brand38/astro-dev).


## Installation

```pnpm install``` installs all repo in this monorepo.



## npm package

In order to develop and publish the [astro-swiper npm package](https://www.npmjs.com/package/astro-swiper), please

```bash
cd astro-swiper
```

Then commands are:

* `npm run lint`
* `npm run format`

To publish a new version on npm,

```bash
# build and test the demo
pnpm run build
pnpm run test

# update package.json and pnpm-lock.yaml, commit and create a tag
pnpm version <patch | minor | major>

git push  && git push --tags
npm login
npm publish
# And then create a release in github
```

## Demo

Demo website using astro-swiper can be found in `demo`.
It is used for testing. In order to see it, and test it:

```bash
cd demo
pnpm run dev
pnpm run test
```
