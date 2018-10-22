
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('cotizacion', require('./components/CotizacionComponent.vue'));
const app = new Vue({
    el: '#app',
    data:{
    	cliente: {
    		"cotizacion":null,
    		'uso_auto':'',
    		'marca_auto':"",
	    	'modelo_auto':"",
	    	'descripcion_auto':"",
	    	'cp':"",
	    	'nombre':"",
	    	'appaterno':"",
	    	'apmaterno':"",
	    	'telefono':"",
	    	'email':"",
	    	'sexo':"",
	    	'f_nac':""
    	},

    },
});