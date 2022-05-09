import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity({
  name: 'tasks'
})
export class TaskEntity {
  @PrimaryColumn({
    name: 'id'
  })
  id: number;

  @Column({
    name: 'title'
  })
  title: string;

  @Column({
    name: 'description'
  })
  description: string;

  @Column({
    name: 'created_at'
  })
  createdAt: string;

  @Column({
    name: 'edit_at'
  })
  editAt: string;
}