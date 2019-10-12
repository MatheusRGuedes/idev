//screen como imagem de fundo caso o usuario queira

		$(window).ready(function() {
			let screenContent = $('#screenContent');
			screenContent.fadeOut();

			$('#fisicBtn').click(function() {
				$('#screen').css('background', 'transparent');
				$('#screenContent').fadeIn('slow');
			});
		});

		const screenContent = document.getElementById('screenContent'),
				lock = document.querySelector('#navTop .fa-lock');

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

				//length = 10
				for (let num = 0; num < numeros.length; num++) {
					numeros[num].addEventListener("click", function() {
						codeDigited += numeros[num].innerText;

						numberCheck[posCheck].classList.add('filled');
						posCheck++;

						if (codeDigited === codeAcess) { 
							$(function() {
								$('#unlockScreen , #bg-image , #navTop div').slideUp('fast');
							})

							const finalScreen = document.createElement('div');
							finalScreen.setAttribute('class', 'finalScreen');
							screenContent.appendChild(finalScreen);

							console.log(codeDigited);
						} 
						if (codeDigited.length - 1 == codeAcess.length - 1) {
							for (let i = 0; i < codeDigited.length; i++) {
								if (codeDigited[i] != codeAcess[i]) {
									$(function() {
										$('#navTop .fa-lock').animate({left: '0%'}, 300)
										$('#navTop .fa-lock').animate({
											left: '50%', 
											transform: 'translateX(-50%)'}, 300)
									})

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