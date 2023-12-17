package Generaciya8.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Generaciya8.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: сп
 */
@Entity(name = "IISGeneraciya8сп")
@Table(schema = "public", name = "сп")
public class sp {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotr")
    @Convert("Sotr")
    @Column(name = "Сотр", length = 16, unique = true, nullable = false)
    private UUID _sotrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotr", insertable = false, updatable = false)
    private Sotr sotr;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "formi")
    @Convert("formi")
    @Column(name = "форми", length = 16, unique = true, nullable = false)
    private UUID _formiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "formi", insertable = false, updatable = false)
    private formi formi;


    public sp() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}