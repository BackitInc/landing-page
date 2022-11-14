<template>
    <EnterProduct class="hidden" />
    <Uploading />
    <ThankYou class="hidden" />
</template>

<script>
import EnterProduct from '../components/create/EnterProduct'
import ThankYou from '../components/create/ThankYou'
import Uploading from "../components/create/Uploading";
export default {
    name: 'create',
    components: {Uploading, ThankYou, EnterProduct}

    //TODO: Add all the logic to navigate between steps
}
</script>
