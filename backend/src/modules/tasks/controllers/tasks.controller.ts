import {Controller, Get} from "@nestjs/common";
import {TasksService} from "../services/tasks.service";
import {TaskEntity} from "../../../share/entities/task.entity";

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly taskService: TasksService
  ) {}

  @Get('/')
  async getTasks(): Promise<TaskEntity[]> {
    return await this.taskService.getTasks();
  }
}