package br.com.gestaoprodutos.backend.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.gestaoprodutos.backend.model.Produto;
import br.com.gestaoprodutos.backend.repository.ProdutoRepository;
import jakarta.persistence.EntityNotFoundException;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<Produto> findAll() {
        return produtoRepository.findAll();
    }

    public Produto findById(UUID id) {
        return produtoRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Produto não encontrado com o ID: " + id));
    }

    public Produto save(Produto produto) {
        return produtoRepository.save(produto);
    }

    public Produto update(UUID id, Produto produtoDetails) {
        Produto produto = findById(id); // Reusa o findById para checar se existe
        produto.setNome(produtoDetails.getNome());
        produto.setCategoria(produtoDetails.getCategoria());
        produto.setDescricao(produtoDetails.getDescricao());
        produto.setPreco(produtoDetails.getPreco());
        produto.setEstoque(produtoDetails.getEstoque());
        return produtoRepository.save(produto);
    }

    public void delete(UUID id) {
        Produto produto = findById(id); // Checa se o produto existe antes de deletar
        produtoRepository.delete(produto);
    }
}