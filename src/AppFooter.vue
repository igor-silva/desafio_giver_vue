<template>
	<div class="layout-footer">
		<img alt="Logo" :src="footerImage()" height="20" class="mr-2" />
		by
		<span class="font-medium ml-2">Igor Silva</span>
	</div>
</template>

<script>
	export default {
		name: "AppFooter",
		methods: {
			footerImage() {
				return this.$appState.darkTheme ? 'https://www.giver.com.br/wp-content/themes/giver/assets/images/logo.svg' : 'https://www.giver.com.br/wp-content/themes/giver/assets/images/logo.svg';
			}
		},
		computed: {
			darkTheme() {
				return this.$appState.darkTheme;
			}
		}
	}
</script>
