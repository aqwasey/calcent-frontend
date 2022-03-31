<template>
	<div class="h-100">
		<div class="container h-100">
			<div class="row justify-content-md-center h-100">
				<div class="card-wrapper">
					<div class="brand">	<img src='../../assets/img/logo.jpg' alt="logo"> </div>
					<div class="card fat">
						<div class="card-body">
							<slot></slot>
						</div>
					</div>
					<div class="footer">Copyright &copy; 2022 &mdash; FUSEM Holdings Pty. </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'InitialView',
	data () {
		return {
			isbody: true,
		}
	},
	mounted () {
		document.body.classList.add('my-login-page')
	},
	unmounted () {
		document.body.classList.remove('my-login-page')
	}
}
</script>

<style>
html, body {
	height: 100%;
}

body.my-login-page {
	background-color: #e3ecf8;
	font-size: 14px;
}

.my-login-page .brand {
	width: 90px;
	height: 90px;
	overflow: hidden;
	border-radius: 50%;
	margin: 30px auto;
	box-shadow: 0 4px 8px rgba(0,0,0,.05);
	position: relative;
	z-index: 1;
}

.my-login-page .brand img {
	width: 100%;
}

.my-login-page .card-wrapper {
	width: 500px;
}

.my-login-page .card {
	border-color: transparent;
	box-shadow: 0 4px 8px rgba(0,0,0,.05);
}

.my-login-page .card.fat {
	padding: 10px;
}

.my-login-page .card .card-title {
	margin-bottom: 30px;
}

.my-login-page .form-control {
	border-width: 2.3px;
}

.my-login-page .form-group label {
	width: 100%;
}

.my-login-page .btn.btn-block {
	padding: 12px 10px;
}

.my-login-page .footer {
	margin: 40px 0;
	color: #888;
	text-align: center;
}

@media screen and (max-width: 425px) {
	.my-login-page .card-wrapper {
		width: 90%;
		margin: 0 auto;
	}
}

@media screen and (max-width: 320px) {
	.my-login-page .card.fat {
		padding: 0;
	}

	.my-login-page .card.fat .card-body {
		padding: 15px;
	}
}
</style>