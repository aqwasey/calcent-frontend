<template>
	<initial-view>
		<!-- Error messages show inside this tag -->
		<div v-show="notify.status" v-bind:class="notify.theme" role="alert">
			{{ notify.msg }}
		</div>
		<!-- Error messages ends here.... -->
		<h4 class="card-title">Sign in</h4>
		<form v-on:submit.prevent="doSignin" class="my-login-validation">
			<div class="form-group">
				<label for="email">Email</label>
				<input id="email" type="email" class="form-control" name="email" v-model="login.username" required autofocus /><br />
			</div>
			<div class="form-group">
				<label for="password">Password </label>
				<input id="password" type="password" class="form-control" name="password" v-model="login.password" required data-eye />
				<div class="invalid-feedback">Password is required 	</div><br>
			</div>
			<div class="form-group">
				<button type="submit" class="col-12 btn btn-primary btn-block" v-on:click="doSignin">Sign in</button>
			</div>
			<div class="mt-4 text-center"> 
				Don't have an account? <a href="/register">Register</a> <br />
				Struggling to Sign into your Account? <a href="/forgot" class="float-right">Forgot Password?</a>
			</div>
		</form>
	</initial-view>
</template>

<script>
import InitialView from '../templates/InitialView.vue'
import axios from 'axios'

export default {
    name: 'LoginMain',
	data () {
		return {
			login: {
				username: '',
				password: ''
			},
			notify: {
				theme: '',
				msg: '',
				status: false
			},
			errors: false,
			error_msg: '',
			result: null,
			code: -1,
		};
	},
	components: {
		InitialView
	},
	methods: {
		async doSignin(e) {
			e.preventDefault();
			if (this.login.username.length == 0 || this.login.username == null || '') {
				this.error_msg = 'Registered email is required to Sign in.';
				this.errors = true;
				setTimeout(() => this.errors = false, 8000);
				return;
			}

			if (this.login.password === '') {
				this.error_msg = 'Password is required to Sign in.';
				this.errors = true;
				setTimeout(() => this.errors = false, 8000);
				return;
			}
			await axios.post('http://127.0.0.1:8000/agents/signin', {
				username: this.login.username,
				password: this.login.password
			})
			.then((resp) => {
				this.code = resp.data.code;
				this.result = resp.data.data;
				this.notify.msg = this.result;
				if (this.code <= 0) {
					this.notify.theme = 'alert alert-danger';
				}else {
					axios.defaults.headers.common['Authorization'] = `Bearer ${this.result}`;
					this.notify.msg = 'Login credentials are valid :)';
					this.notify.theme = 'alert alert-success';
				}	
				this.notify.status = true;
				setTimeout(() => this.notify.status = false, 5000);
				//this.$router.push('about')
			}).catch((err) => {
				this.result = err;
				this.notify.msg = this.result;
				this.notify.theme = 'alert alert-danger';
				this.notify.status = true;
				setTimeout(() => this.notify.status = false, 8000);
			})
		}
	}
}
</script>

<style>

</style>