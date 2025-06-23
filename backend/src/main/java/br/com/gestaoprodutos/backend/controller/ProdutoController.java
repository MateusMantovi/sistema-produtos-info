package br.com.gestaoprodutos.backend.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.gestaoprodutos.backend.model.Produto;
import br.com.gestaoprodutos.backend.service.ProdutoService;
import jakarta.validation.Valid;

@RestController // Define a classe como um controller REST
@RequestMapping("/api/v1/produtos") // URL base para todos os endpoints deste controller
@CrossOrigin(origins = "http://localhost:4200") // Permite requisições do nosso frontend Angular
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    // GET /api/v1/produtos -> Listar todos
    @GetMapping
    public List<Produto> getAllProdutos() {
        return produtoService.findAll();
    }

    // GET /api/v1/produtos/{id} -> Buscar por ID
    @GetMapping("/{id}")
    public ResponseEntity<Produto> getProdutoById(@PathVariable UUID id) {
        Produto produto = produtoService.findById(id);
        return ResponseEntity.ok(produto);
    }

    // POST /api/v1/produtos -> Criar novo produto
    @PostMapping
    public ResponseEntity<Produto> createProduto(@Valid @RequestBody Produto produto) {
        Produto novoProduto = produtoService.save(produto);
        return new ResponseEntity<>(novoProduto, HttpStatus.CREATED);
    }

    // PUT /api/v1/produtos/{id} -> Atualizar produto
    @PutMapping("/{id}")
    public ResponseEntity<Produto> updateProduto(@PathVariable UUID id, @Valid @RequestBody Produto produtoDetails) {
        Produto produtoAtualizado = produtoService.update(id, produtoDetails);
        return ResponseEntity.ok(produtoAtualizado);
    }



    // DELETE /api/v1/produtos/{id} -> Deletar produto
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduto(@PathVariable UUID id) {
        produtoService.delete(id);
        return ResponseEntity.noContent().build();
    }
}