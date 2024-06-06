package bnext.produtos.api.domain.service;

import bnext.produtos.api.domain.repository.ProdutoRepository;
import bnext.produtos.api.domain.entities.Produto;
import bnext.produtos.api.domain.entities.Resposta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ProdutoService {

    @Autowired
    private Resposta resposta;
    
    @Autowired
    private ProdutoRepository repository;

    public ResponseEntity<?> cadastrarAtualizar(Produto produto, String acao){
        if(produto.getNome() == null || produto.getNome().isEmpty()){
            resposta.setMensagem("O nome do produto é obrigatório");
            return new ResponseEntity<>(resposta, HttpStatus.BAD_REQUEST);
        } else if(produto.getValor() == null){
            resposta.setMensagem("O valor do produto é obrigatório");
            return new ResponseEntity<>(resposta, HttpStatus.BAD_REQUEST);
        } else {
            if(acao.equals("cadastrar")){
                return new ResponseEntity<>(repository.save(produto), HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>(repository.save(produto), HttpStatus.OK);
            }
        }
}

    public Iterable<Produto> listar(){
        return repository.findAll();
    }

    public ResponseEntity<Resposta> remover(long id){
        repository.deleteById(id);
        resposta.setMensagem("O produto foi removido com sucesso");
        return new ResponseEntity<>(resposta, HttpStatus.OK);
    }
}
