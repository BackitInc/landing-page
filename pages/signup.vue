<template>
    <div class="relative flex h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img class="mx-auto h-12 w-auto" src="@/assets/imgs/logos/backit_mini_logo.svg" alt="Your Company" />
            <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign Up</h2>
            <p class="mt-2 text-center text-base text-gray-600 max-w-sm mx-auto">
                Sign up to leave video reviews on your favorite Amazon products
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-3 px-4 sm:rounded-lg sm:px-10">
                <third-party-auth />
            </div>
            <p class="text-center mt-2 text-base text-primary md:text-sm">
                Already have an account? <span class="font-medium">Sign in</span>
            </p>
        </div>
        <div class="absolute bottom-0 left-0 right-0  w-full">
            <p class="max-w-sm text-sm pb-5 mx-auto text-center text-gray-600 md:text-xs md:max-w-md">
                By continuing, you agree to BackIt’s <span class="font-semibold text-gray-800">Terms of Service</span> and confirm that you have read BackIt’s <span class="font-semibold text-gray-800">Privacy Policy</span>
            </p>

        </div>
    </div>
</template>

<script>
import ThirdPartyAuth from '../components/auth/ThirdPartyAuth'
export default {
    name: 'signup',
    components: {ThirdPartyAuth}
}
</script>
