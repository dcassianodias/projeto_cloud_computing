package bnext.produtos.api.domain.dto;

import bnext.produtos.api.domain.entities.Produto;
import jakarta.validation.constraints.NotNull;

public record AtualizarProdutoDTO(
		
		@NotNull
		Long id, 
		
		String descricao
		) {

	public AtualizarProdutoDTO(Produto produto) {
		this(produto.getId(), produto.getDescricao());
	}

}
