<template>
    <div>
        <div class="mx-auto max-w-6xl text-center">
            <div class="text-center">
                <h2 class="text-lg font-semibold text-primary uppercase">
                    {{ miniTitle }}
                </h2>
                <p
                    :class="theme === 'dark' ? 'text-white' : 'text-gray-900'"
                    class="mt-1 text-4xl font-bold tracking-tight lg:text-5xl"
                >
                    {{ title }}
                </p>
                <p
                    :class="theme === 'dark' ? 'text-white/[.8]' : 'text-gray-900'"
                    class="mx-auto mt-5 max-w-xl text-xl"
                >
                    {{ sub }}
                </p>
            </div>
            <a v-if="hasButton" href="#" class="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-5 py-3 text-lg font-medium text-white hover:bg-primary-dark sm:w-auto">
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
        },
        theme: {
            type: String,
            required: false,
            default: 'light'
        },
    }
}
</script>
