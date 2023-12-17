package Generaciya8.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Generaciya8.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Сотр
 */
@Entity(name = "IISGeneraciya8Сотр")
@Table(schema = "public", name = "Сотр")
public class Sotr {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "имя")
    private String имя;


    public Sotr() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getимя() {
      return имя;
    }

    public void setимя(String имя) {
      this.имя = имя;
    }


}