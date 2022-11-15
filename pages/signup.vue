<template>
    <div class="relative flex h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
        <sign-up-component class="hidden" />
        <create-user />
    </div>
</template>

<script>
import ThirdPartyAuth from '../components/auth/ThirdPartyAuth'
import SignUpComponent from '../components/auth/signup/SignUpComponent'
import CreateUser from '../components/auth/signup/CreateUser'
export default {
    name: 'signup',
    components: {CreateUser, SignUpComponent, ThirdPartyAuth}
}
</script>
