package Generaciya8.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Generaciya8.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: настр
 */
@Entity(name = "IISGeneraciya8настр")
@Table(schema = "public", name = "настр")
public class nastr {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "opr")
    @Convert("opr")
    @Column(name = "опр", length = 16, unique = true, nullable = false)
    private UUID _oprid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "opr", insertable = false, updatable = false)
    private opr opr;

    @OneToMany(mappedBy = "nastr", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<soder> soders;


    public nastr() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}