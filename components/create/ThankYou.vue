<template>
    <div class="flex min-h-full h-screen bg-gray-50 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img class="mx-auto h-12 w-auto" src="@/assets/imgs/logos/backit_mini_logo.svg" />
        </div>

        <div class="mt-8 px-5 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-6 shadow rounded-md sm:rounded-lg sm:px-10">
                <p class="text-xl md:text-lg font-semibold">
                    Thank you for your video! &#x1F973;
                </p>
                <p class="pt-2 text-gray-500 text-lg md:text-base font-normal">
                    We will process it and review it shortly. Check back soon to see if your video makes it on the frontpage!
                </p>
                <div class="mt-6">
                    <button type="submit" class="flex w-full max-w-xs mx-auto justify-center rounded-md border border-transparent bg-primary py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Record another
                    </button>
                    <p class="pt-4 text-primary text-base text-center">
                        Finish
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ThankYou'
}
</script>
