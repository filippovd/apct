<template>
	<form class="card auth-card" @submit.prevent="submitForm">
		<div class="card-content">
			<span class="card-title">{{ $t("pages.signup.title") }}</span>
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
					:placeholder2="$t('pages.signup.fields.email.placeholder')"
				/>
				<label for="email">{{
					$t("pages.signup.fields.email.label")
				}}</label>
				<small
					class="helper-text invalid"
					v-if="$v.email.$dirty && !$v.email.required"
					>{{ $t("pages.signup.fields.email.required") }}</small
				>
				<small
					class="helper-text invalid"
					v-else-if="$v.email.$dirty && !$v.email.email"
					>{{ $t("pages.signup.fields.email.invalid") }}</small
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
						$t('pages.signup.fields.password.placeholder')
					"
				/>
				<label for="password">{{
					$t("pages.signup.fields.password.label")
				}}</label>
				<small
					class="helper-text invalid"
					v-if="$v.password.$dirty && !$v.password.required"
					>{{ $t("pages.signup.fields.password.required") }}</small
				>
				<small
					class="helper-text invalid"
					v-else-if="$v.password.$dirty && !$v.password.minLength"
					>{{ $t("pages.signup.fields.password.minlength") }}</small
				>
			</div>
			<div class="input-field">
				<input
					id="name"
					type="text"
					v-model.trim="name"
					:class="{
						invalid: $v.name.$dirty && !$v.name.required
					}"
				/>
				<label for="name">{{
					$t("pages.signup.fields.name.label")
				}}</label>
				<small
					class="helper-text invalid"
					v-if="$v.name.$dirty && !$v.name.required"
					>{{ $t("pages.signup.fields.name.required") }}</small
				>
			</div>
			<p>
				<label>
					<input type="checkbox" v-model="agree" />
					<span>С правилами согласен</span>
				</label>
			</p>
		</div>
		<div class="card-action">
			<div>
				<button
					class="btn waves-effect waves-light auth-submit"
					type="submit"
				>
					{{ $t("pages.signup.buttons.signup") }}
					<send-icon />
				</button>
			</div>
			<p class="center">
				{{ $t("pages.signup.text.hasAccount") }}
				<router-link to="/login">
					{{ $t("pages.signup.links.login") }}
				</router-link>
			</p>
		</div>
	</form>
</template>
<script>
import M from "materialize-css/dist/js/materialize";
import SendIcon from "vue-material-design-icons/Send.vue";
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
	name: "signup",
	components: { SendIcon },
	data() {
		return {
			email: "",
			password: "",
			name: "",
			agree: false
		};
	},
	validations: {
		email: { email, required },
		password: { required, minLength: minLength(6) },
		name: { required },
		agree: { checked: v => v }
	},
	methods: {
		async submitForm() {
			if (this.$v.$invalid) {
				this.$v.$touch();
				return;
			}
			const formData = {
				email: this.email,
				password: this.password,
				name: this.name
			};
			console.log("signing up...", formData);

			try {
				await this.$store.dispatch("signUp", formData);
				this.$router.push("/");
			} catch (e) {
				//
				console.log(e);
			}
		}
	},
	mounted() {
		M.updateTextFields();
	}
};
</script>
<style lang="scss">
// @import "~materialize-css";
</style>
