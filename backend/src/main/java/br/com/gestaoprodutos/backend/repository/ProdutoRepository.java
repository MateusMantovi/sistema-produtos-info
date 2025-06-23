package br.com.gestaoprodutos.backend.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.gestaoprodutos.backend.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, UUID> {
    // JpaRepository já nos dá métodos como save(), findAll(), findById(), deleteById()
    // Podemos adicionar consultas customizadas aqui se precisarmos
}