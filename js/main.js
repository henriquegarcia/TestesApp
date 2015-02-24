var AGENDAMENTOS={
	"001": { 
		nome: "Calculo I - COMP1N",
		etapas: {
			"1ª Etapa": {
				"0001": { 
					descricao: "Prova de calculo I",
					tipo: "Avaliação",
					nota: "5",
					aps: "0",
					data: "12/03/2014"
				},
				"0010": { 
					descricao: "Outra Prova de calculo I",
					tipo: "Avaliação",
					nota: "15",
					aps: "0",
					data: "13/03/2014"
				},
				"0011": { 
					descricao: "Mais uma Prova de calculo I",
					tipo: "Avaliação",
					nota: "10",
					aps: "0",
					data: "14/03/2014"
				}
			},
			"2ª Etapa": {
				"0002": { 
					descricao: "avaliação para os alunos com a matéria X.",
					tipo: "Avaliação",
					nota: "30",
					aps: "0",
					data: "12/03/2014"
				}
			}
		}
	},

	"002": { //codigo da disciplina
		nome: "Calculo II",
		etapas: {
			"1ª Etapa": {
				"0003": { //codigo do agendamento
					descricao: "avaliação para os alunos com a matéria X.",
					tipo: "Avaliação",
					nota: "30",
					aps: "0",
					data: "12/03/2014"
				}
			},
			"2ª Etapa": {
				"0004": { //codigo do agendamento
					descricao: "Prova de calculo 1",
					tipo: "Avaliação",
					nota: "3",
					aps: "0",
					data: "12/03/2014"
				}
			}
		}
	},

	"003": { //codigo da disciplina
		nome: "Polimonios",
		etapas: {
			"1ª Etapa": {
				"0005": { //codigo do agendamento
					descricao: "Prova de calculo 1",
					tipo: "Trabalho Teórico",
					nota: "10",
					aps: "0",
					data: "12/03/2014"
				}
			}
		}
	},

	"004": { //codigo da disciplina
		nome: "Física I",
		etapas: {
			"1ª Etapa": {
				"0006": { //codigo do agendamento
					descricao: "Prova de Física 1",
					tipo: "Avaliação",
					nota: "5",
					aps: "10",
					data: "12/04/2014"
				},
"0013": { //codigo do agendamento
					descricao: "Prova de Física 1",
					tipo: "Avaliação",
					nota: "5",
					aps: "10",
					data: "12/04/2014"
				},
"0055": { //codigo do agendamento
					descricao: "Prova de Física 1",
					tipo: "Avaliação",
					nota: "5",
					aps: "10",
					data: "12/04/2014"
				},
"0098": { //codigo do agendamento
					descricao: "Prova de Física 1",
					tipo: "Avaliação",
					nota: "5",
					aps: "10",
					data: "12/04/2014"
				},
				"0060": { //codigo do agendamento
					descricao: "Prova de Física 1",
					tipo: "Avaliação",
					nota: "25",
					aps: "10",
					data: "12/04/2014"
				}
			},
			"2ª Etapa": {
				"0007": { //codigo do agendamento
					descricao: "Outra Prova",
					tipo: "Avaliação",
					nota: "25",
					aps: "0",
					data: "26/04/2014"
				},"1258": { //codigo do agendamento
					descricao: "Outra Prova",
					tipo: "Avaliação",
					nota: "25",
					aps: "0",
					data: "26/04/2014"
				},"5548": { //codigo do agendamento
					descricao: "Outra Prova",
					tipo: "Avaliação",
					nota: "25",
					aps: "0",
					data: "26/04/2014"
				},
			},
			"3ª Etapa": {
				"0008": { //codigo do agendamento
					descricao: "avaliação para os alunos com a matéria X.",
					tipo: "Trabalho Teórico",
					nota: "3000",
					aps: "0",
					data: "12/03/2014"
				}
			}
		}
	}			
}


function carrega_disciplinas(dados,opcao) {

	var string = "\
	<div class='row center-align'>\
		<div class='col s6'>\
			<a href='index.html' class='voltar'><i class='icon-angle-circled-left'></i></a>\
		</div>\
		<div class='col s6'>\
			<a href='index.html'><i class='icon-home'></i></a>\
		</div>\
	</div>\
	<div><h5>Disciplinas</h5></div>\
	";
	$("#conteudoAgendamentos").html(string);



	for(codigoDisciplina in dados){
		var cod = dados[codigoDisciplina];
		var stringListaDisciplinas = "\
			<a href='#!' class='collection-item' id='"+codigoDisciplina+"'>"+cod['nome']+"\
			</a>\
		";
		$("#conteudo"+opcao).append(stringListaDisciplinas);

		
		$("#"+codigoDisciplina).click(function() {
			switch(opcao){
				case 'Agendamentos':
					carrega_agendamentos(this);
					break;
				case 'Frequencia':
				case 'Notas':
				case 'Avisos':
				default:
					break;
			}
		});
	};
	
}	



$(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
    $('.materialboxed').materialbox();
    $('.modal-trigger').leanModal();
    $('.slider').slider({height:'auto',indicators:false});
    $(".button-collapse").sideNav();
    

    

	$("#nomeSecao").html("Início");

//caso o usuario clique em algum item do menu carregar a página com as informações de cada

	$(".secaoInicio").click(function(){
		$("#nomeSecao").html("Início");
	});

	$(".secaoNotas").click(function(){
		$("#nomeSecao").html("Notas");
		$("#conteudoInicial").hide();
		$("#conteudoInterno").hide();
		$("#conteudoFrequencia").hide();
		$("#conteudoAvisos").hide();
		$("#conteudoAgendamentos").hide();
		$("#conteudoEditarAgendamentos").hide();
		$("#conteudoAddAgendamento").hide();
		$("#conteudoNotas").show();
		
		$('.button-collapse').sideNav('hide');
	});

	$(".secaoAgendamento").click(function(){

		$("#nomeSecao").html("Agendamento");
		$("#conteudoInicial").hide();
		$("#conteudoInterno").hide();
		$("#conteudoNotas").hide();
		$("#conteudoFrequencia").hide();
		$("#conteudoAvisos").hide();
		$("#conteudoEditarAgendamentos").hide();
		$("#conteudoAddAgendamento").hide();
		$("#conteudoAgendamentos").show();

		carrega_disciplinas(AGENDAMENTOS,'Agendamentos');
		
		$('.button-collapse').sideNav('hide');
	});	

	$(".secaoFrequencias").click(function(){
		$("#nomeSecao").html("Frequência");

		$("#conteudoInicial").hide();
		$("#conteudoInterno").hide();
		$("#conteudoNotas").hide();
		$("#conteudoAvisos").hide();
		$("#conteudoAgendamentos").hide();
		$("#conteudoEditarAgendamentos").hide();
		$("#conteudoAddAgendamento").hide();
		$("#conteudoFrequencia").show();

		var string = "\
		<div class='row center-align'>\
			<div class='col s6'>\
				<a href='index.html' class='voltar'><i class='icon-angle-circled-left'></i></a>\
			</div>\
			<div class='col s6'>\
				<a href='index.html'><i class='icon-home'></i></a>\
			</div>\
		</div>\
		<p> Teste aqui </p>\
		";
		$("#conteudoFrequencia").html(string);

		$('.button-collapse').sideNav('hide');
	});

	$(".secaoAvisos").click(function(){
		$("#nomeSecao").html("Avisos");
		$("#conteudoInicial").hide();
		$("#conteudoInterno").hide();
		$("#conteudoFrequencia").hide();
		$("#conteudoAgendamentos").hide();
		$("#conteudoEditarAgendamentos").hide();
		$("#conteudoAddAgendamento").hide();
		$("#conteudoNotas").hide();
		$("#conteudoAvisos").show();		

		$('.button-collapse').sideNav('hide');
	});		




	$(document).on('touchstart','.dropdown-button',function() {
		var clicou = this;
		$('.dropdown-content').each(function() {
			if (this.id!=$(clicou).attr('data-activates')) {
				$(this).hide();
			} 
		});
	});

});
