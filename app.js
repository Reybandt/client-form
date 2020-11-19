Vue.config.devtools = true;
Vue.use(window.vuelidate.default);

new Vue({
    el: '#app',

    data() {
        return {
            address_boolen: false,
            document_boolen: false,
            form: {
                surname: null,
                name: null,
                second_name: null,
                date_of_birth: null,
                phone_number: null,
                gender: null,
                client_group: [],
                doctor: null,
                notifications: null
            },
            address: {
                index: null,
                country: null,
                region: null,
                city: null,
                street: null,
                house: null
            },
            document: {
                type: null,
                series: null,
                number: null,
                issued_by: null,
                date_of_issue: null
            }
        }
    },

    validations: {
        form: {
            surname: {
                required: validators.required
            },

            name: {
                required: validators.required
            },

            date_of_birth: {
                required: validators.required,
                formatDate(date_of_birth) {
                    return (
                        /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(date_of_birth)
                    )
                }
            },

            phone_number: {
                required: validators.required,
                numeric: validators.numeric,
                minLength: validators.minLength(11),
                maxLength: validators.maxLength(11)

            },

            client_group: {
                required: validators.required
            }
        },
        address: {
            city: {
                required: validators.required,
            }
        },
        document: {
            type: {
                required: validators.required
            },
            date_of_issue: {
                required: validators.required,
                formatDate(date_of_birth) {
                    return (
                        /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(date_of_birth)
                    )
                }
            }
        }
    },

    methods: {
        SubmitForm() {
            if (!this.$v.form.$invalid) {
                console.log('Form Successfully Submitted!', this.form);
                alert('Форма успешно отправлена!')
            } else {
                console.log('Invalid Form!')
            }
        }
    }
})
