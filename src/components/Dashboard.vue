<template>
	<div class="grid">
		<div class="col-12 lg:col-6 xl:col-3">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>
						<span class="block text-500 font-medium mb-3">E-mail válidos</span>
						<div class="text-900 font-medium text-xl">{{ countValidEmail > 0 ? countValidEmail : 0 }}</div>
					</div>
					<div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
						<i class="pi pi-check text-blue-500 text-xl"></i>
					</div>
				</div>
			</div>
		</div>
		<div  class="col-12 lg:col-6 xl:col-3">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>
						<span class="block text-500 font-medium mb-3">E-mail inválidos</span>
						<div class="text-900 font-medium text-xl">{{ countNotValidEmail > 0 ? countNotValidEmail : 0 }}</div>
					</div>
					<div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
						<i class="pi pi-times text-orange-500 text-xl"></i>
					</div>
				</div>
			</div>
		</div>
		<div class="col-12 lg:col-6 xl:col-3">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>
						<span class="block text-500 font-medium mb-3">Clientes</span>
						<div class="text-900 font-medium text-xl">{{ customersTotal > 0 ? customersTotal : 0 }}</div>
					</div>
					<div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem">
						<i class="pi pi-users text-cyan-500 text-xl"></i>
					</div>
				</div>
			</div>
		</div>
		<div  class="col-12 lg:col-6 xl:col-3">
			<div class="card mb-0">
				<div class="flex justify-content-between mb-3">
					<div>
						<span class="block text-500 font-medium mb-3">Sobrenomes válidos</span>
						<div class="text-900 font-medium text-xl">{{ countIsLastName > 0 ? countIsLastName : 0 }}</div>
					</div>
					<div class="flex align-items-center justify-content-center bg-green-100 border-round" style="width:2.5rem;height:2.5rem">
						<i class="pi  pi-check text-green-500 text-xl"></i>
					</div>
				</div>
			</div>
		</div>
		<div class="col-12 xl:col-6">
			<div class="card">
				<h5>Importações recentes</h5>
				<DataTable :value="customers" :rows="5" :paginator="true" responsiveLayout="scroll">
					<Column field="id" header="Id"></Column>
					<Column field="first_name" header="Nome"></Column>
					<Column field="last_name" header="Sobrenome"></Column>
					<Column field="gender" header="Gênero"></Column>
					<Column field="email" header="E-mail"></Column>
				</DataTable>
			</div>
		</div>
		<div class="col-12 xl:col-6">
			<div class="card">
				<h5>Gêneros</h5>
				<Chart type="pie" :data="chartData" :options="lightOptions" :width="200" :height="200" />
			</div>
		</div>
	</div>
</template>

<script>
import CustomerService from '../service/CustomerService';

export default {
	data() {
		return {
			customers: [],
			countValidEmail: [],
			countNotValidEmail: [],
			customersTotal: [],
			countIsLastName: [],
			chartData: {
                labels: [],
                datasets: [
                    {
                        data: [],
                        backgroundColor: ["#42A5F5","#66BB6A","#FFA726", "#e77474","#1558ef", "#8b8c8d"],
                        hoverBackgroundColor: ["#64B5F6","#81C784","#FFB74D","#e77474bf","#1558efab", "#8b8c8dbf"]
                    }
                ]
            },
            lightOptions: {
                plugins: {
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    }
                }
            },
			items: [
                {label: 'Add New', icon: 'pi pi-fw pi-plus'},
                {label: 'Remove', icon: 'pi pi-fw pi-minus'},
            ],
			lineOptions: null,
		}
	},
	customerService: null,
	mounted() {

		this.customerService.getCustomersAll().then((data) => {
			this.customers = data;
		});

		this.customerService.getCustomersIsValidEmail().then((data) => {
			this.countValidEmail = data[0].TOTAL_EMAIL_VALID;
		});

		this.customerService.getCustomersNotIsValidEmail().then((data) => {
			this.countNotValidEmail = data[0].TOTAL_EMAIL_INVALID;
		});

		this.customerService.getCustomersTotal().then((data) => {
			this.customersTotal = data[0].TOTAL_CUSTOMERS;
		});

		this.customerService.getCustomersIsLastName().then((data) => {
			this.countIsLastName = data[0].TOTAL_LAST_NAME_NOBLANK;
		});

		this.customerService.getCustomersGender().then((data) => {
	
			let gender = [];
			let genderTotal = [];

			data.forEach((value) => {
				gender.push(value.GENDER);
				genderTotal.push(value.TOTAL_GENDER);
			});
		
			this.chartData.labels = (gender.length > 0 ? gender : ['Sem registros']);
			this.chartData.datasets[0].data = (genderTotal.length > 0 ? genderTotal : [1]);
			
			
		});
	},
	created() {
		this.customerService = new CustomerService();
	},
	methods: {
		
	}
}
</script>