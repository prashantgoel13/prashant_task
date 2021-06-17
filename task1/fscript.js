
const contain =document.querySelector('.container'),
		form = contain.querySelectorAll('.form'),
		submitInput = form[0].querySelector('input[type=submit]');

		function getDataForm(e){
			e.preventDefault();

			var formData = new FormData(form[0]);

			console.log(formData.post('firstname'));	
		}