export type Task = {
  name: string,
  targetTime: number,
  currentTime: number,
};

export namespace Task {
  export function getTodayProgressRatio(tasks: Task[]): number {
    const targetSum = tasks.map((v) => v.targetTime).reduce((previous, current) => previous + current);
    const currentSum = tasks.map((v) => v.currentTime).reduce((previous, current) => previous + current);
    return currentSum / targetSum;
  }
}
