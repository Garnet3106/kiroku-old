import { firstDayOfWeek } from "./date";

const sumReducer = (previous: number, current: number) => previous + current;

export type TaskDate = {
  year: number,
  month: number,
  date: number,
};

export namespace TaskDate {
  export function isEqual(left: TaskDate, right: TaskDate) {
    return left.year === right.year &&
      left.month === right.month &&
      left.date === right.date;
  }

  export function isInDateRange(source: TaskDate, from: Date, to: Date) {
    const sourceTimestamp = toDate(source).getTime();
    return from.getTime() <= sourceTimestamp && to.getTime() >= sourceTimestamp;
  }

  export function fromDate(date: Date): TaskDate {
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      date: date.getDate(),
    };
  }

  export function getToday(): TaskDate {
    return fromDate(new Date());
  }

  export function toDate(date: TaskDate): Date {
    return new Date(date.year, date.month, date.date);
  }

  export function getNextDate(date: TaskDate): TaskDate {
    const newDate = toDate(date);
    newDate.setDate(newDate.getDate() + 1);
    return fromDate(newDate);
  }
}

export type Task = {
  id: string,
  name: string,
  targetTime: number,
  archived: boolean,
};

export namespace Task {
  export function getTargetTimeSum(tasks: Task[]): number {
    const targetTasks = tasks.filter((v) => !v.archived);
    return targetTasks.length === 0 ? 0 : targetTasks.map((v) => v.targetTime).reduce(sumReducer);
  }

  export function find(tasks: Task[], id: string): Task | undefined {
    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].id === id) {
        return tasks[i];
      }
    }

    return;
  }

  export function getCompletedTasks(tasks: Task[], progress: TaskProgress[]): Task[] {
    const completedTasks: Task[] = [];
    const progressTime = new Map<string, number>();

    progress.forEach((progress) => {
      const time = progressTime.get(progress.taskId);
      const newTime = time === undefined ? progress.time : time + progress.time;
      progressTime.set(progress.taskId, newTime);
    });

    tasks.forEach((eachTask) => {
      const time = progressTime.get(eachTask.id);

      if (time !== undefined && eachTask.targetTime <= time) {
        completedTasks.push(eachTask);
      }
    });

    return completedTasks;
  }
}

export type TaskProgress = {
  taskId: string,
  date: TaskDate,
  targetTime: number,
  time: number,
};

export namespace TaskProgress {
  const initialStats = {
    timeSum: 0,
    ratio: 0,
  };

  export function getTodayProgress(progress: TaskProgress[]): TaskProgress[] {
    const date = TaskDate.getToday();
    return progress.filter((v) => TaskDate.isEqual(v.date, date));
  }

  export function getWeeklyProgress(progress: TaskProgress[]): TaskProgress[] {
    const firstDateOfWeek = TaskDate.toDate(TaskDate.getToday());
    firstDateOfWeek.setDate(firstDateOfWeek.getDate() - firstDateOfWeek.getDay() + firstDayOfWeek);

    const lastDateOfWeek = new Date(firstDateOfWeek);
    lastDateOfWeek.setDate(firstDateOfWeek.getDate() + 7);

    return progress.filter((v) => TaskDate.isInDateRange(v.date, firstDateOfWeek, lastDateOfWeek));
  }

  export function getProgressStats(tasks: Task[], progress: TaskProgress[], targetTime: number): TaskProgressStats {
    const targetProgress = progress.filter((v) => Task.find(tasks, v.taskId));

    if (targetProgress.length === 0) {
      return initialStats;
    }

    const timeSum = targetProgress.map((v) => v.time).reduce(sumReducer);

    if (targetTime === 0) {
      return initialStats;
    }

    return {
      timeSum,
      ratio: timeSum / targetTime,
    };
  }
}

export type TaskProgressStats = {
  timeSum: number,
  ratio: number,
};
