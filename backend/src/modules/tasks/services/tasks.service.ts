import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {TaskEntity} from "../../../share/entities/task.entity";
import {Repository} from "typeorm";

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>
  ) {}

  async getTasks(): Promise<TaskEntity[]> {
    return await this.taskRepository.find();
  }
}