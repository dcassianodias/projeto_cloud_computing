package bnext.produtos.api.domain.dto;

import java.math.BigDecimal;

import bnext.produtos.api.domain.entities.Produto;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ProdutoDTO(
		
		Long id,
		
        @NotBlank 
        String nome,
        
        String descricao,
        
        @NotNull 
        BigDecimal valor
        
) {
    public ProdutoDTO(Produto produto) {
        this(produto.getId(),produto.getNome(), produto.getDescricao(), produto.getValor());
    }
}