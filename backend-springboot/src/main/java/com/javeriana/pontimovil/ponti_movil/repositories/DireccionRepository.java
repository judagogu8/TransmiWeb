package com.javeriana.pontimovil.ponti_movil.repositories;

import com.javeriana.pontimovil.ponti_movil.entities.Direccion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface DireccionRepository extends JpaRepository<Direccion, UUID> {
    Direccion findByTipoViaAndNumeroViaAndNumero(String tipoVia, String numeroViaA, String numero);
}