<template>
    <div>
        <div class="mx-auto max-w-6xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-lg font-semibold text-primary uppercase">
                    {{ miniTitle }}
                </h2>
                <p class="mt-1 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                    {{ title }}
                </p>
                <p class="mx-auto mt-5 max-w-xl text-xl text-gray-500">
                    {{ sub }}
                </p>
            </div>
            <a v-if="hasButton" href="#" class="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 sm:w-auto">
                {{ buttonText }}
            </a>
        </div>
    </div>
</template>


<script>
export default {
    name: 'commonCta',
    props: {
        miniTitle: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        sub: {
            type: String,
            required: true
        },
        buttonText: {
            type: String,
            required: false,
            default: ''
        },
        hasButton: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>
