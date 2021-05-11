import { CategoriaModel } from './../model/categoria-model';
import { CategoriaDTO } from './../dto/categoria-dto';

export class CategoriaMapper {

    converterDTOParaModel(dto: CategoriaDTO): CategoriaModel{
        return {
          codCategoria: dto.codCategoria ? dto.codCategoria : 0,
          descricao: dto.descricao
        };
    }

    converterModelParaDTO(model: CategoriaModel): CategoriaDTO{
        return {
          codCategoria: model.codCategoria,
          descricao: model.descricao
        };
    }
}
