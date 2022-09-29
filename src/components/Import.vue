<template>
	<div class="grid">
		<div class="col-12">
			<div class="card">
				<h5>Importar dados</h5>
				<FileUpload name="file" url="http://localhost/customer/insert" @upload="onUpload" :multiple="false" accept=".csv"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			onUpload() {
				this.$toast.add({severity: 'info', summary: 'Sucesso', detail: 'Arquivo carregado', life: 3000});
			}
		}
	}
</script>