export interface UseCaseWithParams<T, R> {
  run(params: T): Promise<R>;
}

export interface UseCase<R> {
  run(): Promise<R>;
}
