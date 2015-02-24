function carrega_agendamentos(disciplina) {

			$("#conteudoAgendamentos").hide();
			$("#conteudoAddAgendamento").hide();
			$("#conteudoInterno").show();
			

			var string3 = "\
				<div class='row center-align'>\
					<div class='col s4'>\
						<a class='voltar1'><i class='icon-angle-circled-left'></i></a>\
					</div>\
					<div class='col s4'>\
						<a href='index.html'><i class='icon-home'></i></a>\
					</div>\
					<div class='col s4'>\
						<a href='#' id='addAgendamento'><i class='icon-plus-circled'></i></a>\
					</div>\
				</div>\
				<div>\
					<h6 id='aquiDisciplina'></h6>\
					<table class='striped '>\
							<thead>\
								<tr>\
									<th>Etapa</th>\
									<th>Descrição</th>\
									<th>Data</th>\
								</tr>\
							</thead>\
							<tbody id='coisas'>\
							</tbody>\
					</table>\
					<div class='modalDosElementosAgendamento'></div>\
				</div>\
				";

			$("#conteudoInterno").html(string3);

			$(".voltar1").click(function(){
				$("#conteudoInterno").hide();
				$("#conteudoAgendamentos").show();
			});

			$("#addAgendamento").click(function(){
				$("#conteudoAddAgendamento").show();
				$("#conteudoInterno").hide();
				$("#conteudoAgendamentos").hide();
				

				var conteudoAdd = "\
				<div>\
					<h5>Adicionar Agendamento</h5>\
					\
					<div class='row'>\
						<form class='col s12'>\
							<div class='divider'></div>\
							<div class='input-field col s12'>\
								<select>\
									<option value='1'>1ª Etapa</option>\
									<option value='2'>2ª Etapa</option>\
									<option value='3'>3ª Etapa</option>\
								</select>\
							</div>\
							<div class='input-field col s12'>\
								<textarea class='materialize-textarea'></textarea>\
								<label for='textarea'>Descrição do Agendamento</label>\
							</div>\
							<label>Tipo de Agendamento</label>\
							<select>\
								<option value='0'>Avaliação</option>\
								<option value='1'>Teste</option>\
								<option value='2'>Trabalho Teórico</option>\
								<option value='3'>Trabalho Prático</option>\
								<option value='4'>Trabalho de Campo</option>\
								<option value='5'>Exercício em Classe</option>\
								<!--<option value='6'>Exame especial</option>-->\
								<option value='7'>APS</option>\
							<select>\
							<div class='row'>\
								<div class='input-field col s6'>\
									<input type='number' class='validate'>\
									<label for='formNotas'>Nota</label>\
								</div>\
								<div class='input-field col s6'>\
									<input type='number' class='validate'>\
									<label for='formAps'>APS</label>\
								</div>\
							</div>\
							<div class='row'>\
								<div class='input-field col s12'>\
									<label class='active'>Data do Agendamento</label>\
									<input type='date' class='datepicker'>\
								</div>\
							</div>\
							<div class='row'>\
								<div class='input-field col s12 center-align'>\
									<button class='waves-effect waves-light voltar3 light-blue btn'>Voltar</button>\
									\
									<button class='waves-effect waves-light light-blue btn' type='submit' name='action'>\
										Salvar<i class='mdi-content-send right'></i>\
									</button>\
								</div>\
							</div>\
							\
						</form>\
				</div>\
				";
				$("#conteudoAddAgendamento").html(conteudoAdd);
				
				$('.datepicker').pickadate(); //inicializando o calendario.
				$('select').material_select(); //inicializando o seletor de opções.
				
				$(".voltar3").click(function(){
					$("#conteudoAddAgendamento").hide();
					$("#conteudoInterno").show();
					return false;
				});				
			});

			for(etapa in AGENDAMENTOS[$(disciplina).attr('id')].etapas){
				cod= AGENDAMENTOS[$(disciplina).attr('id')].etapas[etapa];
				for(codigoAgendamento in cod){
						var cont = cod[codigoAgendamento]; // variavel que contem o conteudo de cada topico do agendamento
						var labelEtapa = etapa;
						etapa = etapa.toString();
						var string2 = "\
							<tr class='dropdown-button' data-activates='dropdown"+codigoAgendamento+"'>\
								<td>"+labelEtapa.replace('Etapa','')+"</td>\
								<td class='truncate'><a >"+cont['descricao']+"</a>\
									<ul data-agendamento='"+codigoAgendamento+"' id='dropdown"+codigoAgendamento+"' class='dropdown-content'>\
									\
										<li><a href='#modalVer"+codigoAgendamento+"' class='verDetalhes modal-trigger'>Ver Detalhes</a></li>\
										<li class='divider'></li>\
										<li><a href='#' class='verEditar' data-idagendamento='"+codigoAgendamento+"'' data-idetapa='"+etapa+"'>Editar</a></li>\
										<li class='divider'></li>\
										<li><a href='#modalDeletar"+codigoAgendamento+"' class='verDeletar modal-trigger'>Excluir</a></li>\
									</ul>\
								</td>\
								<td>"+cont['data']+"</td>\
								<td>\
									<i class='icon-ellipsis-vert'></i>\
								</td>\
							</tr>\
						";
						$("#coisas").append(string2);
						$("#aquiDisciplina").html(cod);
						var msgVer = "\
						<div id='modalVer"+codigoAgendamento+"' class='modal'>\
									<div class='modal-content'>\
										<h5>Detalhes</h5>\
										\
										<div class='divider'></div>\
										<div class='section'>\
											<strong>Descrição</strong>\
											<p>"+cont['descricao']+"</p>\
											<div class='divider'></div>\
											<strong> Tipo</strong>\
											<p>"+cont['tipo']+"</p>\
											<div class='divider'></div>\
											<strong>Nota</strong>\
											<p>"+cont['nota']+"</p>\
											<div class='divider'></div>\
											<strong>APS</strong>\
											<p>"+cont['aps']+"</p>\
											<div class='divider'></div>\
											<strong>Data</strong>\
											<p>"+cont['data']+"</p>\
										</div>\
										\
									</div>\
									<div class='modal-footer right-align'>\
										<a href='#' class='waves-effect waves-blue btn light-blue modal-action modal-close'>Sair</a>\
									</div>\
								</div>\
						";

						var msgDeletar = "\
						<div id='modalDeletar"+codigoAgendamento+"' class='modal'>\
							<div class='modal-content'>\
								<h5>Deletar</h5>\
								\
								<p><strong>Tem certeza que deseja deletar \""+cont['descricao']+"\"</strong></p>\
								\
							</div>\
							<div class='modal-footer center-align'>\
								<button id='deletarSim' class='waves-effect waves-light btn modal-action modal-close light-blue'>Sim</button>\
								<button class='waves-effect waves-light btn modal-action modal-close light-blue'>Não</button>\
							</div>\
						</div>\
						";
						//se clicar em editar abre outra "página".
						$(".modalDosElementosAgendamento").append(msgVer);
						$(".modalDosElementosAgendamento").append(msgDeletar);
						$('.modal-trigger').leanModal();
						
						$(".verEditar").click(function(){
							$("#conteudoInterno").hide();
							$("#conteudoEditarAgendamentos").show();
														
							carrega_edita_agendamento($(disciplina).attr('id'),$(this).attr('data-idetapa'),$(this).attr('data-idagendamento'));

							$(".voltar2").click(function(){
								$("#conteudoInterno").show();
								$("#conteudoEditarAgendamentos").hide();
								return false;
							});
							//alert($('.datepicker').attr('data-value'));
							$('.datepicker').pickadate(); //inicializando o calendario.
							//alert($('.datepicker').attr('data-value'));
							$('select').material_select(); //inicializando o seletor de opções.
						});
				};
			};
			$('.dropdown-button').dropdown({
		      inDuration: 0,
		      outDuration: 0,
		      constrain_width: false, // Does not change width of dropdown to that of the activator
		      hover: false, // Activate on click
		      alignment: 'right', // Aligns dropdown to left or right edge (works with constrain_width)
		      gutter: '15', // Spacing from edge
		      belowOrigin: true // Displays dropdown below the button
		    });
}


function carrega_edita_agendamento(disciplina,etapa,codigoAgendamento) {
	cont=AGENDAMENTOS[disciplina].etapas[etapa][codigoAgendamento];
	var msgEditar = "\
	<div id='modalEditar"+codigoAgendamento+"'>\
				<div>\
					<h5>Detalhes - Editar</h5>\
					\
					<div class='row'>\
						<form class='col s12'>\
							<div class='divider'></div>\
							<div class='input-field col s12'>\
								<textarea id='textarea"+codigoAgendamento+"' class='materialize-textarea'>"+cont['descricao']+"</textarea>\
								<label class='active' for='textarea"+codigoAgendamento+"'>Descrição do Agendamento</label>\
							</div>\
								<label>Tipo de Agendamento</label>\
								<select>\
									<option value='0'>Avaliação</option>\
									<option value='1'>Teste</option>\
									<option value='2'>Trabalho Teórico</option>\
									<option value='3'>Trabalho Prático</option>\
									<option value='4'>Trabalho de Campo</option>\
									<option value='5'>Exercício em Classe</option>\
									<!--<option value='6'>Exame especial</option>-->\
									<option value='7'>APS</option>\
								<select>\
							<div class='row'>\
								<div class='input-field col s6'>\
									<input id='formNotas"+codigoAgendamento+"' type='number' class='validate' value='"+cont['nota']+"'>\
									<label class='active' for='formNotas"+codigoAgendamento+"'>Nota</label>\
								</div>\
								<div class='input-field col s6'>\
									<input id='formAps"+codigoAgendamento+"' type='number' class='validate' value='"+cont['aps']+"'>\
									<label class='active' for='formAps"+codigoAgendamento+"'>APS</label>\
								</div>\
							</div>\
							<div class='row'>\
								<div class='input-field col s12'>\
									<label class='active'>Data do Agendamento</label>\
									<input type='date' class='datepicker' value='"+cont['data']+"' data-value='"+cont['data']+"'>\
								</div>\
							</div>\
							<div class='row'>\
								<div class='input-field col s12 center-align'>\
									<button class='btn waves-effect waves-light voltar2 light-blue'>Voltar</button>\
									\
									<button class='btn waves-effect waves-light light-blue' type='submit' name='action'>\
										Salvar<i class='mdi-content-send right'></i>\
									</button>\
								</div>\
							</div>\
							\
						</form>\
				</div>\
	</div>\
	";
	$("#conteudoEditarAgendamentos").html(msgEditar);
}