export declare class StencilComponent {
    text: string;
    lastPing: string;
    onFrameworkPing(event: CustomEvent): void;
    ping(): void;
    render(): any;
}
