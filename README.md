<div align="center" style="background-color: black; padding: 16px;">
  <a href="https://swiperjs.com" target="_blank"><img width="70" src="images/swiper-logo.svg"></a>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://astro.build/" target="_blank"><img height="70" src="images/astro-logo.png"></a>

  <h1>Astro Swiper</h1>

  <p>
    Astro Swiper is the native Astro component for
    <a href="https://github.com/nolimits4web/swiper">Swiper</a>,
    dedicated to slides / carousel / photo swiper.
  </p>

  [Demo](https://pascal-brand38.github.io/astro-dev/packages/astro-swiper)

  <a href="https://pascal-brand38.github.io/astro-dev/packages/astro-swiper" target="_blank">
    <img src="images/astro-swiper.gif">
  </a>

</div>

<br>
<br>



<br>

# Installation
Get the latest version from NPM:
```
$ npm install astro-swiper
```

# Usage

## First Example

Here is the astro code of a loop carousel, of 3 pictures, with 1 second interval:

```jsx
---
import { Swiper, SwiperWrapper, SwiperSlide } from "astro-swiper";
---
<Swiper
  options={{    // check options at https://swiperjs.com/swiper-api
    autoplay: {
      delay: 700,
      disableOnInteraction: false,
      waitForTransition: false,
    },
    loop: true,
  }}>
  <SwiperWrapper>
    <!-- Slides -->
    <SwiperSlide>
      <img src="https://picsum.photos/455/256?nb=1" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://picsum.photos/455/256?nb=2" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://picsum.photos/455/256?nb=3" alt="" />
    </SwiperSlide>
  </SwiperWrapper>
</Swiper>

<style>
  .swiper {
    max-width: 455px;
    aspect-ratio: 16/9;
  }

  img {
    width: 100%;
  }
</style>
```

## Complex Examples

Please check the [online doc](https://pascal-brand38.github.io/astro-dev/packages/astro-swiper) for a fullset of examples, including navigation and thumbnails.

Full code is provided.


# Support astro-swiper

Please [star the project](https://github.com/pascal-brand38/astro-swiper) if you like it!
