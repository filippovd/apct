<template>
	<form class="card auth-card" @submit.prevent="submitForm">
		<div class="card-content">
			<span class="card-title">{{ $t("pages.login.title") }}</span>
			<div class="input-field">
				<input
					id="email"
					type="text"
					v-model.trim="email"
					:class="{
						invalid:
							($v.email.$dirty && !$v.email.required) ||
							($v.email.$dirty && !$v.email.email)
					}"
					:placeholder2="$t('pages.login.fields.email.placeholder')"
				/>
				<label for="email">{{
					$t("pages.login.fields.email.label")
				}}</label>
				<small
					class="helper-text invalid"
					v-if="$v.email.$dirty && !$v.email.required"
					>{{ $t("pages.login.fields.email.required") }}</small
				>
				<small
					class="helper-text invalid"
					v-else-if="$v.email.$dirty && !$v.email.email"
					>{{ $t("pages.login.fields.email.invalid") }}</small
				>
			</div>
			<div class="input-field">
				<input
					id="password"
					type="password"
					v-model.trim="password"
					:class="{
						invalid:
							($v.password.$dirty && !$v.password.required) ||
							($v.password.$dirty && !$v.password.minLength)
					}"
					:placeholder2="
						$t('pages.login.fields.password.placeholder')
					"
				/>
				<label for="password">{{
					$t("pages.login.fields.password.label")
				}}</label>
				<small
					class="helper-text invalid"
					v-if="$v.password.$dirty && !$v.password.required"
					>{{ $t("pages.login.fields.password.required") }}</small
				>
				<small
					class="helper-text invalid"
					v-else-if="$v.password.$dirty && !$v.password.minLength"
					>{{ $t("pages.login.fields.password.minlength") }}</small
				>
			</div>
		</div>
		<div class="card-action">
			<div>
				<button
					ref="btn"
					class="btn waves-effect waves-light auth-submit"
					type="submit"
					:disabled="isProcessing"
				>
					{{ $t("pages.login.buttons.login") }}
					<send-icon v-if="!isProcessing" />
				</button>
				<div class="progress" v-if="isProcessing">
					<div class="indeterminate"></div>
				</div>
			</div>

			<p class="center">
				{{ $t("pages.login.text.noAccount") }}
				<router-link to="/signup">{{
					$t("pages.login.links.signup")
				}}</router-link>
			</p>
		</div>
	</form>
</template>
<script>
import M from "materialize-css/dist/js/materialize";
import SendIcon from "vue-material-design-icons/Send.vue";
import { email, required, minLength } from "vuelidate/lib/validators";
export default {
	name: "login",
	components: { SendIcon },
	data() {
		return {
			email: "",
			password: "",
			isProcessing: false,
			status: ""
		};
	},
	validations: {
		email: { email, required },
		password: { required, minLength: minLength(6) }
	},
	methods: {
		async submitForm() {
			if (this.$v.$invalid) {
				this.$v.$touch();
				return;
			}
			const formData = {
				email: this.email,
				password: this.password
			};

			try {
				this.isProcessing = true;
				await this.$store.dispatch("login", formData);
				this.isProcessing = false;

				this.$router.push("/");
			} catch (e) {
				//
				this.isProcessing = false;
			}
		}
	},
	watch: {},
	mounted() {
		console.log("login");
		M.updateTextFields();

	}
};
</script>
<style lang="scss">
// @import "~materialize-css";
</style>
