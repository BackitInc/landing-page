<template>
    <div class="mx-4">
        <div
            class="mx-auto grid w-full grid-cols-2 overflow-hidden gap-x-6 rounded-xl max-h-96 max-w-screen-2xl sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-7 "
        >
            <div class="relative h-96 w-full bg-gray-300 rounded-xl" v-for="video in videos">
                <SpeakerWaveIcon class="h-8 w-8 absolute bottom-0 right-0 m-4 text-gray-900" />
            </div>
        </div>
    </div>
</template>

<script>
import { SpeakerWaveIcon } from '@heroicons/vue/24/outline'
export default {
    //TODO: a) Make this carousel an actual carousel
    //TODO: b) Add in the videos (which will actually be gifs)
    name: 'Carousel',
    components: { SpeakerWaveIcon },
    data() {
        return {
            videos: [
                '',
                '',
                '',
                '',
                '',
                '',
                '',
            ]
        }
    }
}
</script>
