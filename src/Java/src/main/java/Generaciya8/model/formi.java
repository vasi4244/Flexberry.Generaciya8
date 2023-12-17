package Generaciya8.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Generaciya8.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: форми
 */
@Entity(name = "IISGeneraciya8форми")
@Table(schema = "public", name = "форми")
public class formi {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "код")
    private Integer код;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "opr")
    @Convert("opr")
    @Column(name = "опр", length = 16, unique = true, nullable = false)
    private UUID _oprid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "opr", insertable = false, updatable = false)
    private opr opr;

    @OneToMany(mappedBy = "formi", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<sp> sps;


    public formi() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getкод() {
      return код;
    }

    public void setкод(Integer код) {
      this.код = код;
    }


}