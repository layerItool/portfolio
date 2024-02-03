const formItems = document.querySelectorAll('.form-line__field');

for(let item of formItems){
    const thisParent = item.closest('.form-line');
    const thisPlaceholder = thisParent.querySelector('.form-line__text');

    item.addEventListener('focus', function(){
        thisPlaceholder.classList.add('form-line__text--active');
    });

    item.addEventListener('blur', function(){
        if(item.value.length > 0){
            thisPlaceholder.classList.add('form-line__text--active');
        }

        else{
            thisPlaceholder.classList.remove('form-line__text--active');
        }
    })


}

$(document).ready(function () {


    //FORM VALIDATE
	$('.contact-form').validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			
			message: {
				required: true
			}
		},
		messages: {
			email: {
				required: 'Введите email',
				email: 'отсутсвует символ @'
			},
			
			message: {
				required: 'Поле не должно быть пустым'
			}
		},
		submitHandler: function (form) {
			ajaxFormSubmit();
		}

	});

	//*************************************************** */
	// Функция AJAX запрса на сервер

	function ajaxFormSubmit() {

		let string = $(".contact-form").serialize(); // Соханяем данные введенные в форму в строку.

		//Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string

			// Функция если все прошло успешно
			success: function (html) {
				$(".contact-form").slideUp(800);
				$('#answer').html(html);
			}
		});
		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false;
	}



});