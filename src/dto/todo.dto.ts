// export class CreateCatDto {
export class TodoDto {
  id: number;
  content: string;
  type: number;
  create_time: Date;
  update_time: Date;
  deleted_time: Date;  
  deleted_flag: boolean;
}