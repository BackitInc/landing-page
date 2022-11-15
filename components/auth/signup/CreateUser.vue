<template>
    <div class="flex min-h-screen h-full bg-gray-50 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img class="mx-auto h-12 w-auto" src="@/assets/imgs/logos/backit_mini_logo.svg" />
            <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Welcome to BackIt! &#x1F44B;</h2>
            <p class="mt-2 text-center text-base text-gray-600 max-w-sm mx-auto">
                To complete your account set up, please fill out the form fields below
            </p>
        </div>

        <div class="mt-8 px-5 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-6 shadow rounded-md sm:rounded-lg sm:px-10">
                <form class="space-y-6" action="#" method="POST">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">When is your birthday?</label>
                        <div class="mt-1">
                            <Datepicker
                                v-model="birthday"
                                :format="format"
                                placeholder="Select a date"
                                noToday
                                :yearRange="[1900, 2015]"
                                :enableTimePicker="false"
                                autoApply
                            />
                        </div>
                    </div>
                    <div class="mt-5">
                        <label for="email" class="block text-sm font-medium text-gray-700">Create a username</label>
                        <div class="mt-1">
                            <input id="email" name="email" type="email" placeholder="username2911" autocomplete="email" required="" class="block w-full appearance-none rounded border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary-soft focus:outline-none sm:text-sm" />
                        </div>
                    </div>
                    <div class="pt-4">
                        <button type="submit" class="flex w-full max-w-xs mx-auto justify-center rounded-md border border-transparent bg-primary py-3 text-sm font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none">
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="absolute bottom-0 left-0 right-0  w-full">
            <p class="text-primary max-w-sm text-sm pb-5 mx-auto text-center">
                Sign Out
            </p>
        </div>

    </div>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
export default {
    name: 'CreateUser',
    components: { Datepicker },
    setup() {
        const format = (date) => {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return `${month}/${day}/${year}`;
        }

        return {
            format,
        }
    },
    data(){
        return {
            birthday: 0
        }
    },
}
</script>
<style scoped>
.dp__theme_light {
    --dp-primary-color: #28A2DA;
    --dp-border-color-hover: #28A2DA;
    --dp-success-color: #28A2DA;
    --dp-success-color-disabled: #4EB2E0;
    --dp-highlight-color: #28A2DA;
}
</style>

