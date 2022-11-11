<template>
    <div class="relative overflow-hidden bg-brand-black min-h-screen h-full flex">
        <img src="@/assets/imgs/gradient_blob.png" class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"/>
        <div class="relative h-full mx-auto sm:my-auto flex justify-center flex-col">
            <main class="my-16 mx-auto max-w-7xl px-4 sm:px-6 lg:my-0">
                <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div class="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left lg:flex lg:flex-col lg:justify-center">
                        <h1>
                            <span class="block uppercase text-base font-semibold text-white/[.8] sm:text-lg lg:text-base xl:text-lg">Coming soon</span>
                            <span class="mt-1 block uppercase text-4xl font-extrabold sm:text-5xl xl:text-6xl">
                                <span class="block text-white">Discover, Shop, Share</span>
                            </span>
                        </h1>
                        <div class="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                            <p class="text-base font-medium text-white/[.8]">Sign up to join the waitlist & get notified when it’s ready.</p>
                            <form action="#" method="POST" class="mt-3 sm:flex">
                                <div class="relative mt-1 w-full rounded-md shadow-sm">
                                    <input type="text" name="account-number" id="account-number" class="py-3 pl-6 border-2 border-primary block w-full rounded-full pr-12 focus:outline-none focus:border-primary-dark focus:ring-primary-dark" placeholder="email@email.com" />
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                                        <button type="submit" class="w-full rounded-full bg-primary px-6 py-3 text-base font-medium text-white shadow shadow-primary-soft hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-0 ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center">
                                            Join the waitlist
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
                        <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                            <!--TODO: Replace with video-->
                            <img class="w-auto mx-auto" src="@/assets/imgs/temp.png" alt="" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

