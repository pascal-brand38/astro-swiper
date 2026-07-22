# astro-swiper

<div align="center" style="background-color: dark-grey; padding: 1rem;">
  <a href="https://swiperjs.com" target="_blank"><img width="70" width="auto" src="packages/astro-swiper/images/swiper-logo.svg"></a>
  <a href="https://astro.build/" target="_blank"><img height="68" width="auto" src="packages/astro-swiper/images/astro-logo.png"></a>

  # Astro Swiper

> Astro Swiper - native component for [Swiper](https://github.com/nolimits4web/swiper).
> Use for slides, carousel, photo swiper.

  <img src="packages/astro-swiper/images/astro-swiper.gif" />

## [Check demo](https://pascal-brand38.github.io/astro-dev/packages/astro-swiper)

</div>

Doc of `astro-swiper`: [astro-dev](https://pascal-brand38.github.io/astro-dev/packages/astro-swiper/)

This `astro-swiper` is a monorepo made of

* [astro-swiper](https://github.com/pascal-brand38/astro-swiper/tree/main/packages/astro-swiper): the source of the [astro-swiper npm package](https://www.npmjs.com/package/astro-swiper)
* [demo](https://github.com/pascal-brand38/astro-swiper/tree/main/demo): used to run tests


Note that the doc is not part of this monorepo (yet?), but is part of
[astro-dev](https://pascal-brand38.github.io/astro-dev/packages/astro-swiper/) and
[github of astro-dev](https://github.com/pascal-brand38/astro-dev).


## Installation

```pnpm install``` installs all repo in this monorepo.



## npm package

In order to develop and publish the [astro-swiper npm package](https://www.npmjs.com/package/astro-swiper), please

```bash
cd packages/astro-swiper
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
