export interface ApiResult<T> {
    result: boolean;
    contents: T;
    message: string;
}
