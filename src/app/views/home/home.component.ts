import { Component, OnInit } from '@angular/core';

export interface Task {
  position: number;
  titulo: string;
  descricao: string;
  responsavel: string;
  prioridade: string,
  data: string,
  situacao: string;
}

const TASK_DATA: Task[] = [
  {position: 1, titulo: 'Criar Projeto',        descricao: 'Criar Projeto para...',        responsavel: 'Gabriel', prioridade: 'Alta', data: '22/04/2022', situacao: 'concluida'},
  {position: 2, titulo: 'Criar Interface',      descricao: 'Criar Interface para...',      responsavel: 'Bruno', prioridade: 'Média', data: '22/04/2022', situacao: 'concluida'},
  {position: 3, titulo: 'Criar Banco de Dados', descricao: 'Criar Banco de Dados para...', responsavel: 'Felipe', prioridade: 'Baixa', data: '22/04/2022', situacao: 'concluida'},
  {position: 4, titulo: 'Deletar Interface',    descricao: 'Deletar Interface para...',    responsavel: 'Gabriel', prioridade: 'Baixa', data: '22/04/2022', situacao: 'concluida'},
  {position: 5, titulo: 'Deletar Banco',        descricao: 'Deletar Banco para...',        responsavel: 'Felipe', prioridade: 'Média', data: '22/04/2022', situacao: 'concluida'},
  {position: 6, titulo: 'Alterar Usuario',      descricao: 'Alterar Usuario para...',      responsavel: 'Gabriel', prioridade: 'Média', data: '22/04/2022', situacao: 'concluida'},
  {position: 7, titulo: 'Alterar Descricao',    descricao: 'Alterar Descricao para...',    responsavel: 'Felipe', prioridade: 'Baixa', data: '22/04/2022', situacao: 'concluida'},
  {position: 8, titulo: 'Upar Projeto',         descricao: 'Upar Projeto para...',         responsavel: 'Bruno', prioridade: 'Média', data: '22/04/2022', situacao: 'concluida'},
  {position: 9, titulo: 'Consumir API',         descricao: 'Consumir API para...',         responsavel: 'Felipe', prioridade: 'Média', data: '22/04/2022', situacao: 'concluida'},
  {position: 10, titulo: 'Documentar API',      descricao: 'Documentar API para...',       responsavel: 'Bruno', prioridade: 'Baixa', data: '22/04/2022', situacao: 'concluida'},
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['position', 'titulo', 'descricao', 'responsavel', 'prioridade', 'data', 'situacao', 'actions'];
  dataSource = TASK_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
