// export interface OnSuccess {
//     (result: string): void;
// }

// export type OnSuccess = {
//     (result: string): void;
// };

export type OnSuccess = (result: string) => void;

export function doSomethingAsync(onSuccess: OnSuccess) {
    setTimeout(() => {
        onSuccess('Hurra');
    }, 5000);
};