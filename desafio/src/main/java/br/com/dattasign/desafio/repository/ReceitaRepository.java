package br.com.dattasign.desafio.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.dattasign.desafio.model.Receita;


public interface ReceitaRepository extends JpaRepository<Receita, Long> {
	List<Receita> findByPublicado(boolean publicado);
	List<Receita> findByTituloContaining(String titulo);
}

