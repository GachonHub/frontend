<template>
    <div>
        <!-- {{FRONT_BASE_URL}} -->
        <!-- {{res.data}} -->
    </div>
</template>

<script>

import {API_BASE_URL} from "../../constants.js"
import {FRONT_BASE_URL} from "../../constants.js"
import {AUTHORIZATION} from "../../constants.js"
import {REFRESH} from "../../constants.js"

import {instance} from "../../api/ApiCommon.js"

export default {
    created() {
        var query = this.$route.query;
        var token = query[AUTHORIZATION];
        var refresh = query[REFRESH];
        localStorage.clear();
        localStorage.setItem(AUTHORIZATION, "Bearer " + token);
        localStorage.setItem(REFRESH, "Bearer " + refresh);
        // this.test();
        // this.role_test();
        window.location.href = FRONT_BASE_URL;
    },
    // TEST
    methods: {
        test() {
            instance.get(API_BASE_URL + "/any-role-test")
            .then(res => {
                /* eslint-disable no-console */
                console.log(res);
                console.log(res.data.data);
                console.log("api : " + instance.headers.AUTH)
            })
            .catch(err => {
                /* eslint-disable no-console */
                console.log(err);
            })
        },
        role_test() {
            instance.get(API_BASE_URL + "/required-authorization-test")
            .then(res => {
                console.log(res);
                console.log(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
}
</script>