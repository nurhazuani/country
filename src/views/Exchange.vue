<template>
  <div class="exchange">
	    <b-row class="mt-5 d-flex justify-content-center">
			<b-col cols="6">
				<b-card bg-variant="dark" text-variant="white" >
				<h1>{{ title }}</h1>
				<br>
				<!-- <b-card v-for="(exchange) in exchange" :key="exchange.id"> -->
					<b-row class="d-flex justify-content-center">
					<b-col cols="6">
						<b-form-select 
							v-model="selectedCountry"
							:options="exchange"
							value-field="rate" 
							text-field="country"
						>
						</b-form-select>
					</b-col>
					</b-row>
					<b-row class="mt-5 d-flex justify-content-center" >
						<b-col cols="6">
						<b-form-select v-model="selectedCountry1" :options="exchange" 
						value-field="rate" 
						text-field="country"
						> 
						</b-form-select>
					</b-col>
				</b-row>

				<b-row class="mt-5 d-flex justify-content-center" >
					<b-col cols="6">
						<input  :value="form.value" type="number" @change="addValue" class="form-control" placeholder="Enter value..">
						<input  :value="form.rate"  type="number"  class="form-control" hidden >
						
									<!-- <h2> {{selectedCountry1 }} </h2> -->

					<b-button block variant="primary" type="submit" @focus="addRate" >Convert</b-button>
							<br>
							<b-row>
								<b-col>
									<b-alert variant="success" show>
									RESULT: {{form.converter}} 
									</b-alert>
								</b-col>
								
							</b-row>
					</b-col>
				
				</b-row>

				</b-card>
			</b-col>
	    </b-row>
  </div>
</template>

<script>

// import axios from 'axios';

export default {
    data() {
        return {
			title: "Currency Converter",
		  exchange: [],
		  form: {
				 value: '',
				 rate: ''
				
              },
					selectedCountry: '',
					selectedCountry1: '',
        }
    },

		created() {
			this.loadAllCountries()
		},

		methods: {
			
			loadAllCountries() {
				this.$http.get('http://localhost:3000/exchange')
                      .then(res => {
                          this.exchange = res.data
                      })
			},

			addValue(event) {
				this.form.value = event.target.value
				this.form.converter = this.form.value * this.form.rate
      		},
			addRate() {
				var selectedCountry1 = this.selectedCountry1
				this.form.rate = selectedCountry1
				this.form.converter = (this.form.value * selectedCountry1).toFixed(2)
				
			
			},
		
		},
	
}
</script>

<style scoped>

</style>
