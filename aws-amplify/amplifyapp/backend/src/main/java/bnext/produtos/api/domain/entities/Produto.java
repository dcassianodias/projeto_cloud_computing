package bnext.produtos.api.domain.entities;

import bnext.produtos.api.domain.dto.AtualizarProdutoDTO;
import bnext.produtos.api.domain.dto.ProdutoDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Table(name = "produtos")
@Entity(name = "Produtos")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Produto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String nome;
	private String descricao;
	private BigDecimal valor;
	private Boolean ativo;

		public Produto(ProdutoDTO produtoDTO) {
		this.nome = produtoDTO.nome();
		this.descricao = produtoDTO.descricao();
		this.valor = produtoDTO.valor();
		this.ativo = true;
	}

	public void atualizarInformacoes(AtualizarProdutoDTO update) {
		if(update.descricao() != null) {
			this.descricao = update.descricao();
		}
	}

	public void excluir() {
		this.ativo = false;
	}
}
