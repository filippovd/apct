<template>
	<div>
		<div class="page-title">
			<h3>Реестр собственности</h3>

			<button class="btn waves-effect waves-light btn-small">
				<refresh-icon :size="64" class="icon-2x" />
			</button>
		</div>

		<div class="row">
			<div class="col s12 m6 l4">
				<div class="card light-blue bill-card">
					<div class="card-content white-text">
						<span class="card-title">Счет в валюте</span>

						<p class="currency-line">
							<span>12.0 Р</span>
						</p>
					</div>
				</div>
			</div>

			<div class="col s12 m6 l8">
				<div class="card orange darken-3 bill-card">
					<div class="card-content white-text">
						<div class="card-header">
							<span class="card-title">Курс валют</span>
						</div>
						<table>
							<thead>
								<tr>
									<th>Валюта</th>
									<th>Курс</th>
									<th>Дата</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td>руб</td>
									<td>12121</td>
									<td>12.12.12</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import RefreshIcon from "vue-material-design-icons/Refresh.vue";

export default {
	name: "home",
	components: {
		RefreshIcon
	}
};
</script>

<style>
.material-design-icon.icon-2x {
	height: 2em;
	width: 2em;
}

.material-design-icon.icon-2x > .material-design-icon__svg {
	height: 2em;
	width: 2em;
}
</style>
