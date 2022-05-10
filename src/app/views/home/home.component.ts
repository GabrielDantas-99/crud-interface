import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementDialogComponent } from 'src/app/shared/element-dialog/element-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

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

  @ViewChild(MatTable)   // Obtendo os filhos da tabela #table
  table!: MatTable<any>;
  displayedColumns: string[] = ['position', 'titulo', 'descricao', 'responsavel', 'prioridade', 'data', 'situacao', 'actions'];
  dataSource = TASK_DATA;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog (element: Task | null): void{
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '250px',
      data: element === null ? {    // Validando se o elemento for nulo
        position: null,
        titulo: '',
        descricao: '',
        responsavel: '',
        prioridade: '',
        data: '',
        situacao: '',
      } : {
        position: element.position,
        titulo: element.titulo,
        descricao: element.descricao,
        responsavel: element.responsavel,
        prioridade: element.prioridade,
        data: element.data,
        situacao: element.situacao,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // Verificando se o resultado é o mesmo quando fecha o Dialog
      if (result !== undefined) {
        if (this.dataSource.map(p => p.position).includes(result.position)) { // Se no dataSource tiver a posição do resultado
          this.dataSource[result.position - 1] = result;                      // receber o novo result no dataSource
          this.table.renderRows();
        } else {
          this.dataSource.push(result);  // Adicionando o result ao Array
          this.table.renderRows();       // Atualizando a tabela
        }
      }
    });
  }

  editTask(element: Task): void {
    this.openDialog(element);
  }

  deleteTask(position: number): void {
    this.dataSource = this.dataSource.filter(p => p.position !== position) // Devolvendo todos os elementos que 
  }                                                                        // sejam diferente da posição que deletamos

}
