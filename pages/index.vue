<template>
    <div>
        <hero />
        <div class="py-12">
            <common-cta
                :mini-title="cta1.miniTitle"
                :title="cta1.title"
                :sub="cta1.sub"
            />
            <carousel />
            <div class="mx-auto max-w-screen-2xl py-12 px-4 text-center sm:py-14 sm:px-6 lg:px-8">
                <div class="text-left">
                    <div class="flex items-baseline">
                        <p class="mt-1 text-4xl pr-6 font-bold tracking-tight h-full text-gray-900 inline lg:text-5xl">
                            Psst. Do you want your review here?
                        </p>
                        <img src="@/assets/imgs/arrow.png" class="hidden md:inline h-20" />
                    </div>
                    <p class="max-w-2xl mt-5 text-xl text-gray-500">
                        Click the link below and leave us a review on your favorite product, and we’ll post it here. As a bonus, we’ll even reserve your username on BackIt, so it’ll be ready for you when we launch.
                    </p>
                    <a href="#" class="mt-8 inline-flex items-center rounded-md border border-transparent bg-primary px-5 py-3 text-base font-medium text-white hover:bg-primary-dark sm:w-auto md:text-lg">
                        Create a video
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Hero from '../components/homepage/Hero.vue'
import CommonCta from '../components/common/commonCta.vue'
import Carousel from '../components/homepage/Carousel.vue'

export default {
    name: 'index',
    components: {Carousel, Hero, CommonCta},
    data() {
        return {
            cta1: {
                miniTitle: 'authentic content',
                title: 'Backit is the TikTok of product reviews. We are private, community driven, product review site.',
                sub: 'No more bots, no more influencers. Just authentic reviews. Click a video below to check out some of out favorites!',
            }
        }
    }
}
</script>
