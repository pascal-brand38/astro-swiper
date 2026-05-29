<div align="center" style="background-color: dark-grey; padding: 1rem;">
  <a href="https://swiperjs.com" target="_blank"><img width="70" width="auto" src="images/swiper-logo.svg"></a>
  <a href="https://astro.build/" target="_blank"><img height="68" width="auto" src="images/astro-logo.png"></a>

  # Astro Swiper

> Astro Swiper - native component for [Swiper](https://github.com/nolimits4web/swiper).
> Use for slides, carousel, photo swiper.

  <img src="images/astro-swiper.gif" />

## [Check demo](https://pascal-brand38.github.io/astro-dev/packages/astro-swiper)

</div>

## Installation

```bash
npm install astro-swiper
pnpm add astro-swiper
bun install astro-swiper
```

## Usage

Carousel with loop, 3 pictures, 1 second interval:

```jsx
---
import { Swiper, SwiperWrapper, SwiperSlide } from "astro-swiper";
---

<Swiper
  options={{
    loop: true,   // check options at https://swiperjs.com/swiper-api
    autoplay: {
      delay: 700,
      disableOnInteraction: false,
      waitForTransition: false
    }
  }}>
  <SwiperWrapper>
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

## Examples

Check the [online doc](https://pascal-brand38.github.io/astro-dev/packages/astro-swiper) for a fullset of examples, including navigation and thumbnails. Full code is provided.

You can also look at how others are using `astro-swiper` in public github repo:

- the famous astro template [astroplate](https://github.com/zeon-studio/astroplate) in the
  [testominial section](https://zeon.studio/preview?project=astroplate)
  (cf. **_What Users Are Saying About Astroplate_**):
  autoplay, pagination and breakpoints are used.
- the popular astro template [pinwheel-astro](https://github.com/themefisher/pinwheel-astro)
  is using `astro-swiper` in several places:
  [testimonial section](https://pinwheel-astro.vercel.app/),
  [signin](https://pinwheel-astro.vercel.app/signin),
  [password reset](https://pinwheel-astro.vercel.app/password-reset) and
  [signup](https://pinwheel-astro.vercel.app/signup) pages. Pagination and
  breakpoints are used.
- the well-known astro template [hello-astro](https://github.com/hellotham/hello-astro)
  uses swiper in the [carousel page](https://hellotham.github.io/hello-astro/carousel/)
  as well as in [blog article](https://hellotham.github.io/hello-astro/blog/2022-08-19-sample-carousel/).
  It makes use of navigation arrow, pagination and autoplay.
- [bigspring-light-astro](https://github.com/themefisher/bigspring-light-astro) astro theme is
  also using `astro-swiper` in several places in the
  [main page](https://tf-bigspring-light-astro.vercel.app/) with customized pagination.
- [Women Techmakers organized by GDG Madrid](https://github.com/wtmgdgmadrid/wtmgdgmadrid.github.io)
  is using pagination and autoplay at different places in their
  [page](http://wtmgdgmadrid.github.io/).
- [kando-menu](https://github.com/make-42/kando-menu.github.io) is using `astro-swiper`
  with pagination, card effect, and coverflow effect as displayed in [kando.menu](https://kando.menu/).
- [astroimagej](https://github.com/AstroImageJ/astroimagej) is using pagination with progress bar.
- [rustdesk.com](https://github.com/rustdesk/doc.rustdesk.com) makes use of `<SwiperLazyPreloader/>`
  to add a preloader element.
- ... and many others such as
  [Cinerama](https://github.com/RaiderMr3003/Cinerama) and
  [pfm-landing-page](https://github.com/RichardAgain/pfm-landing-page)
  using `astro-swiper` in the hero section,
  [folex-lite-astro](https://github.com/getastrothemes/folex-lite-astro)
  using it in the portfolio page,...

## API

### `<Swiper/>`
Main Swiper element. Inherits all `HTMLAttributes<'div'>` (class...) attributes.
| Name | Type | Default | Description |
| ---- | -----|-------- | -----------|
| options | SwiperOptions | Swiperjs default | cf. [Swiperjs doc](https://swiperjs.com/swiper-api#parameters) |
| options.astro | Cf. below description | undefined | astro specific options |
| addDefaultClass | Boolean | true | Add class `.swiper` when true |

`options.astro` is as follows:
| Name | Type | Default | Description |
| ---- | -----|-------- | -----------|
| useCustomElement | boolean | true | when false, use a `<div>` to be as close as possible to swiperjs default. Use a custom element `<astro-swiper>` otherwise. |
| thumbSwiperUniqueSelector | string starting with `#` or `.` | undefined | unique selector of the thumbnail swiper to link with, when using the thumbs module. When a thumbnail swiper is build, this parameter is provided on the main slider (the one with big slides, not the one to track the progress) and equal the unique selector of the thumbnail swiper (the one to track the progress). It is used to link the main swiper with the thumbnail swiper when using the thumbs module. |
| intersectionObserver<br>.initSwiper | boolean | false | true to initialize the swiper when the element appears in the screen |
| intersectionObserver<br>.disconnectOnInit | boolean | false | true to disconnect the observer once the swiper is initialized |
| intersectionObserver<br>.controlAutoplay | boolean | false | true to start and stop the autoplay when the swiper appears and disappears from the screen, respectively |
| intersectionObserver<br>.options | [Intersection Observer Init options](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) | undefined | cf. [mdn docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) |

### `<SwiperWrapper/>`
Wrapper of all slides. Inherits all `HTMLAttributes<'div'>` (class...)  attributes.
| Name | Type | Default | Description |
| ---- | -----|-------- | -----------|
| addDefaultClass | Boolean | true | Add class `.swiper-wrapper` when true |

### `<SwiperSlide/>`
A single slide. Inherits all `HTMLAttributes<'div'>` (class...) attributes.
| Name | Type | Default | Description |
| ---- | -----|-------- | -----------|
| addDefaultClass | Boolean | true | Add class `.swiper-slide` when true |

### `<SwiperPagination/>`
Pagination dots. Inherits all `HTMLAttributes<'div'>` (class...) attributes.
| Name | Type | Default | Description |
| ---- | -----|-------- | -----------|
| addDefaultClass | Boolean | true | Add class `.swiper-pagination` when true |

### `<SwiperButtonPrev/>` and `<SwiperButtonNext/>`
Navigation arrows. Inherits all `HTMLAttributes<'div'>` (class...) attributes.
| Name | Type | Default | Description |
| ---- | -----|-------- | -----------|
| addDefaultClass | Boolean | true | Add class `.swiper-button-prev` or `swiper-button-next` when true |

### `<SwiperScrollbar/>`
Scrollbar. Inherits all `HTMLAttributes<'div'>` (class...) attributes.
| Name | Type | Default | Description |
| ---- | -----|-------- | -----------|
| addDefaultClass | Boolean | true | Add class `.swiper-scrollbar` when true |

### `<SwiperLazyPreloader/>`
Slide lazy loader. To be used inside a `<SwiperSlide/>`. Inherits all `HTMLAttributes<'div'>` (class...) attributes.
| Name | Type | Default | Description |
| ---- | -----|-------- | -----------|
| addDefaultClass | Boolean | true | Add class `.swiper-lazy-preloader` when true |

### `getSwiperFromUniqueSelector()`
Function to be used in script part, to be able to retrieve the swiper instance given
a unique selector (starting with a `.` or a `#`), once the `load` event is fired.
This allows to use functions and events in swiper.

Here is a snipset of the
[Custom Pagination Demo](https://github.com/pascal-brand38/astro-dev/blob/main/src/content/docs/packages/astro-swiper/DemoPaginationCustom.astro):

```jsx
<Swiper
  class="swiper-demo-pagination-custom"
  options={{
    ...
    init: false,  // init in the script part
  }}
>
  ...
  <SwiperPagination />
</Swiper>

<script>
  import type { PaginationOptions } from 'astro-swiper/swiper';
  import { getSwiperFromUniqueSelector } from 'astro-swiper'
  window.addEventListener('load', () => {
    const swiper = getSwiperFromUniqueSelector('.swiper-demo-pagination-custom');
    (swiper!.params.pagination as PaginationOptions)!.renderBullet = function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
    swiper!.init()
  })
</script>
```

### Swiper types

Swiper types are available importing types from `astro-swiper/swiper`, such as

```js
import type { PaginationOptions } from 'astro-swiper/swiper';
```

## Help needed?

**Do you need help to integrate `astro-swiper` in your astro template / component?**
I'll be happy to help!

- mention me with `@pascal-brand38` in an issue on your own github repo
- or [fill a GitHub issue](https://github.com/pascal-brand38/astro-swiper/issues/new?template=help-needed.md)
  in `astro-swiper` github

### Support us

**Let's star the project as you like it.**
