<template>
    <TransitionRoot as="template" :show="isOpen">
        <Dialog as="div" class="relative z-10" @close="$emit('closeVideo')">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto max-h-screen max-w-md mx-auto xl:max-w-lg">
                <div class="flex min-h-full items-center justify-center text-center">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative w-full transform overflow-hidden bg-none transition-all">
                            <div class="flex justify-end z-10 sm:absolute sm:top-0 sm:right-0 md:ml-3">
                                <button type="button" class="text-white focus:outline-none" @click="$emit('closeVideo')">
                                    <XMarkIcon class="h-12 w-12" aria-hidden="true" />
                                </button>
                            </div>
                            <div class="relative max-w-[85%] mx-auto w-full sm:flex sm:p-7 md:max-w-sm xl:max-w-md">
                                <video
                                    :src="review.video"
                                    autoplay
                                    loop
                                    class="rounded-lg shadow-xl"
                                />
                                <div class="absolute bottom-0 w-full left-0 right-0">
                                    <div class="w-3/4 mx-auto flex mb-5 items-center text-center rounded-md border border-transparent bg-primary px-4 py-2 text-xl font-medium text-white shadow-sm sm:mb-14 hover:bg-primary-dark focus:outline-none">
                                        <a
                                            :href="review.productLink"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="w-full flex items-center justify-center"
                                        >
                                            <ShoppingCartIcon class="-ml-1 mr-3 h-6 w-6" aria-hidden="true" />
                                            Buy it!
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/20/solid'
import { ShoppingCartIcon } from '@heroicons/vue/20/solid'
export default {
    name: 'ViewVideoModal',
    props: {
        isOpen: {
            type: Boolean,
            required: true,
            default: false
        },
        review: {
            required: false,
            type: Object,
            default: {}
        }
    },
    components: {Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, XMarkIcon, ShoppingCartIcon },
    emits: ['closeVideo'],

}
</script>