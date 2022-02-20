<template>
    <div>
        <!-- {{FRONT_BASE_URL}} -->
        <!-- {{res.data}} -->
    </div>
</template>

<script>

// import {API_BASE_URL} from "../../constants.js"
import {FRONT_BASE_URL} from "../../constants.js"
import {AUTHORIZATION} from "../../constants.js"
import {REFRESH} from "../../constants.js"

import {apiRequest} from "../../api/ApiCommon.js"

export default {
    created() {
        var query = this.$route.query;
        localStorage.clear();
        localStorage.setItem(AUTHORIZATION, query[AUTHORIZATION]);
        localStorage.setItem(REFRESH, query[REFRESH]);
        // localStorage.clear();
        // this.test();
        // this.role_test();
        window.location.href = FRONT_BASE_URL;
    },
    // TEST
    methods: {
        test() {
            apiRequest("/any-role-test")
            .then(res => {
            /* eslint-disable no-console */
                console.log(res.data)
            })

        },
        role_test() {
            apiRequest("/required-authorization-test")
            .then(res => {
            /* eslint-disable no-console */
                console.log(res)
            })
        }
    }
}
</script>