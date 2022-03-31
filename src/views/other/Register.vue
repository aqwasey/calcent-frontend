<template>
    <initial-view>
        <!-- Error messages show inside this tag -->
		<div v-show="errors" class="alert alert-danger" role="alert">
			{{ error_msg }}
		</div>
		<!-- Error messages ends here.... -->
        <h4 class="card-title">Register an Account</h4>
        <form class="my-login-validation">
            <div class="form-group">
                <label for="othername">Othername</label>
                <input type="text" class="form-control" name="othername" v-model="signups.othername" required autofocus /><br />
            </div>
            <div class="form-group">
                <label for="surname">Surname</label>
                <input type="text" class="form-control" name="surname" v-model="signups.surname" required /><br />
            </div>
            <div class="form-group">
                <label for="gender">Gender</label>
                <select class="form-control form-select" aria-label=".form-select-md" v-model="signups.gender">
                    <option selected> -- Select Gender -- </option>
                    <option value="Male">Female</option>
                    <option value="Male">Male</option>
                </select><br />
            </div>
            <div class="form-group">
                <label for="birthdate">Date of Birth</label>
                <input type="date" class="form-control" name="birthdate" max="2022/12/31" min="1910/01/01" v-model="signups.birthdate" required /><br />
            </div>
            <div class="form-group">
                <label for="idnumber">ID Number</label>
                <input type="number" class="form-control" name="idnumber" pattern="[0-9]{10}" v-model="signups.idnumber" required /><br />
            </div>
            <div class="form-group">
                <label for="mobile">Mobile No.</label>
                <input type="number" minlength="10" maxlength="10" class="form-control" name="mobile" pattern="[0-9]{10}" v-model="signups.mobile" required /><br />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" name="email" v-model="signups.email" required /><br />
            </div>
            <div class="form-group">
                <label for="password">Password </label>
                <input type="password" class="form-control" name="password" v-model="signups.password" required data-eye /><br>
            </div>
            <div class="form-group">
                <button type="submit" @click.prevent="Signup()" class="col-12 btn btn-primary btn-lg btn-block"> Register </button>
            </div>
            <div class="mt-4 text-center"> 
                Do you have an account? <a href="/login">Sign in</a>
            </div>
        </form>
    </initial-view>
</template>

<script>
import InitialView from '../templates/InitialView.vue'
import axios from 'axios'

export default {
    name: 'RegisterView',
    components: {
        InitialView,
    },
    data () {
        return {
            errors: false,
            error_msg: '',
            signups: {
                othername: '',
                surname: '',
                birthdate: '',
                mobile: '',
                idnumber: '',
                email: '',
                password: '',
                gender: ''
            }
        }
    },
    methods: {
        async Signup() {
            // Save data into the database
            axios.post('http://127.0.0.1:8000/agents/register', {
                othername: this.signups.othername,
                surname: this.signups.surname,
                gender: this.signups.gender,
                birthdate: this.signups.birthdate,
                mobile: this.signups.mobile,
                email: this.signups.email,
                idnumber: this.signups.idnumber,
                password: this.signups.password
            }).then((resp) => {
                console.log(resp)
            }).catch((err) => {
                console.log(err)
            });
        }
    }
}
</script>

<style>

</style>