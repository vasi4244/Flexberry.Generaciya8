package Generaciya8.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Generaciya8.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: содер
 */
@Entity(name = "IISGeneraciya8содер")
@Table(schema = "public", name = "содер")
public class soder {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "воп")
    private String воп;

    @Column(name = "во1")
    private String во1;

    @Column(name = "во2")
    private String во2;

    @Column(name = "во3")
    private String во3;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "nastr")
    @Convert("nastr")
    @Column(name = "настр", length = 16, unique = true, nullable = false)
    private UUID _nastrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "nastr", insertable = false, updatable = false)
    private nastr nastr;


    public soder() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getвоп() {
      return воп;
    }

    public void setвоп(String воп) {
      this.воп = воп;
    }

    public String getво1() {
      return во1;
    }

    public void setво1(String во1) {
      this.во1 = во1;
    }

    public String getво2() {
      return во2;
    }

    public void setво2(String во2) {
      this.во2 = во2;
    }

    public String getво3() {
      return во3;
    }

    public void setво3(String во3) {
      this.во3 = во3;
    }


}