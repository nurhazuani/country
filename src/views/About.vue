<template>
  <div class="about">
    <h1>This is an about page</h1>


  </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
		  countries: [],
					selectedCountry: '',
        }
    },

		created() {
			this.loadAllCountries()
			
		},

		methods: {
			
			loadAllCountries() {
				axios.get('https://restcountries.eu/rest/v2/all?fields=currencies')
					.then(respond => {
						this.countries = respond.data
					})
					.catch(err => {
						console.log(err)
					})
			}
		},
}
</script>

<style scoped>

</style>