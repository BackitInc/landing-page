<template>
    <div class="flex min-h-full h-screen bg-gray-50 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img class="mx-auto h-12 w-auto" src="@/assets/imgs/logos/backit_mini_logo.svg" />
        </div>

        <div class="mt-8 px-5 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="text-center py-3 px-6 sm:px-10">
                <p class="text-xl md:text-lg font-semibold">
                    Looks great! Hang tight while we upload your masterpiece
                </p>
                <p class="pt-2 text-gray-500 text-lg md:text-base font-normal">
                    Please remain on this screen so BackIt can receive your video
                </p>
                <div class="mt-6">
                    <!--TODO: Add progress circle-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Uploading'
}
</script>
