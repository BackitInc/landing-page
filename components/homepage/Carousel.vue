<template>
    <div class="mx-4">
        <div
            :class="showAllMobileVideos ? 'gap-y-6' : 'max-h-96 overflow-hidden'"
            class="mx-auto grid w-full grid-cols-2  gap-x-6 rounded-xl  max-w-screen-2xl xs:max-w-lg smed:max-w-none smed:grid-cols-3 mdplus:grid-cols-4 lg:max-w-screen-lg xl:max-w-none xl:grid-cols-5 2xl:grid-cols-6 2xl:max-w-screen-2xl"
        >
            <div class="relative h-96 w-full cursor-pointer" v-for="review in REVIEW_VIDEOS" @click="$emit('selectReview', review)">
                <video :src="review.preview" muted autoplay loop class="rounded-xl h-full w-full object-cover" />
                <SpeakerWaveIcon class="h-8 w-8 absolute bottom-0 right-0 m-4 text-white" />
            </div>
        </div>
        <div class="items-end justify-end w-full mt-4 mx-auto flex xs:max-w-lg smed:max-w-none">
            <button class="inline-flex focus:outline-none text-primary mdplus:hidden" @click="showAllMobileVideos = !showAllMobileVideos">
                <p class="font-semibold text-right text-lg">
                    See <span v-if="!showAllMobileVideos">more</span> <span v-else>less</span>
                </p>
                <PlusIcon v-if="!showAllMobileVideos" class="ml-1 h-5 w-5 mt-1" />
                <MinusIcon v-else class="ml-1 h-5 w-5 mt-1" />
            </button>
        </div>
    </div>
</template>

<script>
import { SpeakerWaveIcon, ChevronDownIcon, PlusIcon, MinusIcon } from '@heroicons/vue/20/solid'
import ViewVideoModal from './ViewVideoModal'
import {REVIEW_VIDEOS} from '../../constants'

export default {
    //TODO: Make this carousel an actual carousel
    name: 'Carousel',
    components: {ViewVideoModal, SpeakerWaveIcon, ChevronDownIcon, PlusIcon, MinusIcon },
    data() {
        return {
            showAllMobileVideos: false,
            REVIEW_VIDEOS,
        }
    },
    emits: ['selectReview'],
}
</script>
