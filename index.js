$(window).ready(function() {
			let screenContent = $('#screenContent');
			screenContent.fadeOut();

			$('#fisicBtn').click(function() {
				$('#screen').css('background', 'transparent');
				$('#screenContent').fadeIn('slow');
			});
		});

		const screenContent = document.getElementById('screenContent'),
			  lock = document.querySelector('#navTop .fa-lock'),
			  finalScreen = document.querySelector('.finalScreen');

		//pegar e validar codigo
		document.getElementById('salvar').addEventListener("click", function() {
			let code = document.querySelector('#code'),
				tam = code.value.length;

			if (code.value == "" || code.value == null) {
				alert("Ensira um código");
			} else if ( isNaN(code.value) || tam != 4) {
				alert("Codigo inválido ou diferente de 4");
			} else {
				let numeros = document.querySelectorAll('.digits span'), 
					numberCheck = document.querySelectorAll('.checking label'),
					codeAcess = code.value,
					codeDigited = '',
					posCheck = 0;

				const checking = document.querySelector('.checking'),
					  lockIcon = document.querySelector('#navTop div i.fa-lock');
				//remover antes de adicionar
				checking.classList.remove('animate');
				lockIcon.classList.remove('animate');

				//length = 10
				//adiciona evento para tds os numeros
				for (let num = 0; num < numeros.length; num++) {
					numeros[num].addEventListener("click", function() {
						codeDigited += numeros[num].innerText;

						numberCheck[posCheck].classList.add('filled');
						posCheck++;

						if (codeDigited === codeAcess) { 

							finalScreen.classList.add('unlocked');

							$(function() {
								$('#unlockScreen , #bg-image , #navTop div').slideUp('fast');

								$('#lightSlider').lightSlider({
									gallery: false,
									item: 1,
									controls: false,
									slideMargin: 10,
									vertical: false,
									adaptativeHeight: false,
									keyPress: false,
									pager: false
								});
							});

							console.log(codeDigited);
						} 
						if (codeDigited.length - 1 == codeAcess.length - 1) {
							for (let i = 0; i < codeDigited.length; i++) {
								if (codeDigited[i] != codeAcess[i]) {
									
									//efeito balançar se os codigos forem diferentes
									lockIcon.classList.add('animate');
									checking.classList.add('animate');

									//remove preenchimento
									for (let posCheck = 0; posCheck < numberCheck.length; posCheck++) {
										numberCheck[posCheck].classList.remove('filled');
									}
								}
							}
						}
					});
				}

			}
		});
		


