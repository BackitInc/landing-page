<template>
    <div class="grid grid-cols-1 gap-4">
        <div v-for="company in companies" class="w-full mx-auto relative flex items-center space-x-3 rounded-sm bg-white px-6 py-5 shadow-md border-transparent md:max-w-sm border hover:border-gray-100">
            <div class="absolute left-0">
                <img class="ml-5 h-9 w-auto rounded-full" :src="company.logo" alt="" />
            </div>
            <div class="text-center w-full">
                <a href="#" class="focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-medium text-gray-900">Continue with {{ company.title }}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import googleLogo from '../../assets/imgs/social_logos/google_logo.png'
import facebookLogo from '../../assets/imgs/social_logos/facebook_logo.png'
import appleLogo from '../../assets/imgs/social_logos/apple_logo.png'
export default {
    name: 'ThirdPartyAuth',
    data(){
        return {
            companies: {
                'google': {
                    logo: googleLogo,
                    title: 'Google'
                },
                'facebook': {
                    logo: facebookLogo,
                    title: 'Facebook'
                },
                'apple': {
                    logo: appleLogo,
                    title: 'Apple'
                },
            }
        }
    }
}
</script>
