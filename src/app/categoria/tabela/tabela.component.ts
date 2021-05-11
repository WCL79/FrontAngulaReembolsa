import { CategoriaService } from './../categoria.service';
import { CategoriaMapper } from './../../mapper/categoria-mapper';
import { CategoriaDTO } from './../../dto/categoria-dto';
import { CategoriaModel } from './../../model/categoria-model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

 public categorias: CategoriaModel[] = [];
 public categoria: CategoriaDTO = {};
 public mapper = new CategoriaMapper;

  operacao: Boolean = true;

  constructor(public service: CategoriaService) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar(){ //não é necessário ter o mesmo nome do método do service
    this.service.buscar().subscribe(resposta => {
      this.categorias = resposta;
    });
  }

  adicionar(){
    this.service.salvar(this.categoria).subscribe( resposta => {
      console.log(resposta);
      this.consultar();
      this.categoria  = {};
    });
  }

  editar(dado: CategoriaModel){
    this.categoria = this.mapper.converterModelParaDTO(dado)
    this.operacao = false;
  }

  atualizar(){
    this.service.atualizar(this.categoria).subscribe( () => {
      this.categoria = {};
      this.operacao = true;
      this.consultar();
    })
  }
}
