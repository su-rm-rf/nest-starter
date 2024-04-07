import { Column, Entity } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import moment from 'moment'

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  // @Column({
  //   type: 'int',
  //   default: 1,
  // })
  // type: number;

  // @Column({
  //   type: 'timestamp',
  //   default: () => 'CURRENT_TIMESTAMP',
  // })
  // create_time: Date;

  // @Column({
  //   type: 'timestamp',
  //   default: () => null,
  // })
  // update_time: Date;
  
  // @Column({
  //   type: 'timestamp',
  //   default: () => null,
  // })
  // deleted_time: Date;
  
  @Column({ default: false })
  deleted_flag: boolean;
}