package bnext.produtos.api.controller;

import bnext.produtos.api.domain.entities.Produto;
import bnext.produtos.api.domain.entities.Resposta;
import bnext.produtos.api.domain.repository.ProdutoRepository;
import bnext.produtos.api.domain.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("produtos")
@CrossOrigin(origins="*")
public class ProdutoController {

    @Autowired
    ProdutoRepository repository;

    @Autowired
    private ProdutoService service;

    @PostMapping("/cadastrar")
    @Transactional
    public ResponseEntity<?> cadastrar(@RequestBody Produto produto){
        return service.cadastrarAtualizar(produto, "cadastrar");
    }

    @GetMapping("/listar")
    public Iterable<Produto> listar(@PageableDefault(sort = {"nome"}, direction = Direction.DESC)
                                           Pageable page){
        return service.listar();
    }
    
    @PutMapping("/atualizar")
    @Transactional
    public ResponseEntity<?> atualizar(@RequestBody Produto produto){
        return service.cadastrarAtualizar(produto, "atualizar");
    }
    
    @DeleteMapping("/deletar/{id}")
    @Transactional
    public ResponseEntity<Resposta> remover(@PathVariable long id){
        return service.remover(id);
    }
}
