interface Window {
    QUI: any;
};

interface vDOM {
    tag: string;
    props: { [key: string]: string };
    children: (vDOM | string)[];
    data: any;
    dismiss: boolean;
};

type Patch =
    | { type: "CREATE"; vdom: vDOM | string; index?: number[] }
    | { type: "APPEND"; vdom: vDOM | string; index?: number[] }
    | { type: "REPLACE"; vdom: vDOM; index?: number[] }
    | { type: "TEXT"; vdom: vDOM; value: string; index: number[] }
    | { type: "PROP"; vdom: vDOM; key: string; value: string | null | undefined; index?: number[] }
    | { type: "REMOVE"; index?: number[] };