<template>
    <div class="flex min-h-full h-screen bg-gray-50 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img class="mx-auto h-12 w-auto" src="@/assets/imgs/logos/backit_mini_logo.svg" />
        </div>

        <div class="mt-8 px-5 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-6 shadow rounded-md sm:rounded-lg sm:px-10">
                <p>
                    Enter the <span class="font-semibold">Amazon link</span> to your product to get started. We can’t wait to see your review!
                </p>
                <form class="space-y-6" action="#" method="POST">
                    <div class="mt-5">
                        <label for="email" class="block text-sm font-medium text-gray-700">Amazon link to product</label>
                        <div class="mt-1">
                            <input id="email" name="email" type="email" placeholder="https://www.amazon.com/asupercoolproduct" autocomplete="email" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="flex w-full max-w-xs mx-auto justify-center rounded-md border border-transparent bg-primary py-3 text-sm font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none">
                            Start Recording
                        </button>
                        <p class="pt-4 text-primary text-sm text-center">
                            Upload video from my device
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EnterProduct'
}
</script>
