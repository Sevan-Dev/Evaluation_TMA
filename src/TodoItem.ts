export interface ITodoItem {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
}

export class TodoItem implements ITodoItem {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;

  constructor(id: number, title: string, description?: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = false;
    this.createdAt = new Date();
  }

  toggle(): void {
    this.completed = !this.completed;
  }

  toString(): string {
    const status = this.completed ? '✅' : ' ';
    const desc = this.description ? ` - ${this.description}` : '';
    return `[${status}] ${this.id}. ${this.title}${desc}`;
  }
}
